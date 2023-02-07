import {useState} from "react";

export default function Student() {
    let [list, setList] = useState([
        {
            id: 1,
            name: "Nam",
            address: "HN"
        },
        {
            id: 2,
            name: "Quân",
            address: "HB"
        }
    ]);
    let [id, setId] = useState("");
    let [name, setName] = useState("");
    let [address, setAddress] = useState("");
    const create = () => {
        setList([...list, {
            id: list[list.length - 1].id + 1,
            name: name,
            address: address
        }])
        setName("");
        setAddress("");
    }
    const update = () => {
        let index;
        list.map((item) => {
            if (item.id === id) {
                index = list.indexOf(item);
            }
        })
        list[index].name = name;
        list[index].address = address;
        setList([...list])
        setName("");
        setAddress("");
        document.getElementById("createBtn").style.display = "block";
        document.getElementById("editBtn").style.display = "none";
    }
    const del = (id) => {
        let index;
        list.map((item) => {
            if (item.id === id) {
                index = list.indexOf(item);
            }
        })
        list.splice(index, 1);
        console.log(index)
        console.log(list)
        setList([...list])
    }
    const display = () => {
        return (
            <>
                <table class="table table-striped">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {list.map((item, index) => (
                        <>
                            <tr>
                                <td><p key={index}>{item.id}</p></td>
                                <td><p key={index}>{item.name}</p></td>
                                <td><p key={index}>{item.address}</p></td>
                                <td>
                                    <button class="btn btn-light" onClick={() => {
                                        setName(item.name)
                                        setAddress(item.address)
                                        setId(item.id)
                                        document.getElementById("createBtn").style.display = "none";
                                        document.getElementById("editBtn").style.display = "block";
                                    }}>Edit
                                    </button>
                                    <button onClick={() => del(item.id)} class="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                        </>

                    ))}
                    </tbody>
                </table>
                <input id="inpName" type="text" value={name} onChange={(e) => {
                    setName(e.target.value)
                }}/>
                <input id="inpAddress" type="text" value={address} onChange={(e) => {
                    setAddress(e.target.value)
                }}/><br/>
                <button onClick={create} id="createBtn" class="btn btn-success">Create</button>
                <button onClick={update} id="editBtn" style={{display: "none"}} class="btn btn-success">Edit</button>
            </>
        )
    }
    return (
        <>
            {display()}
        </>
    )
}
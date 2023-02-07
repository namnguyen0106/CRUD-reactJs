import {useEffect, useState} from "react";

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
                {list.map((item, index) => (
                    <div>
                        <p key={index}>{item.id}, {item.name}, {item.address}</p>
                        <button onClick={() => {
                            setName(item.name)
                            setAddress(item.address)
                            setId(item.id)
                            document.getElementById("createBtn").style.display = "none";
                            document.getElementById("updateBtn").style.display = "block";
                        }}>Edit
                        </button>
                        <button onClick={() => del(item.id)}>Delete</button>
                    </div>
                ))}
                <input id="inpName" type="text" value={name} onChange={(e) => {
                    setName(e.target.value)
                }}/>
                <input id="inpAddress" type="text" value={address} onChange={(e) => {
                    setAddress(e.target.value)
                }}/>
                <button onClick={create} id="createBtn">Create</button>
                <button onClick={update} id="editBtn" style={{display:"none"}}>Edit
                </button>
            </>
        )
    }
    return (
        <>
            {display()}
        </>
    )
}
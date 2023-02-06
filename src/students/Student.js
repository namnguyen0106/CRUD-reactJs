import {useState} from "react";

export default function Student(state, action) {
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
    const update = (id) => {
        let index;
        list.map((item) => {
            if (item.id === id) {
                index = list.indexOf(item);
            }
        })
        list[index].name = name;
        list[index].address = address;
        return display();
    }
    const del = (id) => {
        let index;
        list.map((item) => {
            if (item.id === id) {
                index = list.indexOf(item);
            }
        })
        list.splice(index);
        console.log(index)
        return display();
    }
    const display = () => {
        return (
            <>
                {list.map((item, index) => (
                    <div>
                        <p key={index}>{item.id}, {item.name}, {item.address}</p>
                        <button onClick={() => {
                            document.getElementById("inpName").value = item.name;
                            document.getElementById("inpAddress").value = item.address;
                            // document.getElementById("action").
                        }}>Edit
                        </button>
                        <button onClick={del(item.id)}>Delete</button>
                    </div>
                ))}
                <input id="inpName" type="text" value={name} onChange={(e) => {
                    setName(e.target.value)
                }}/>
                <input id="inpAddress" type="text" value={address} onChange={(e) => {
                    setAddress(e.target.value)
                }}/>
                <span id="action">
                <button onClick={create}>Create
                </button>
                </span>
            </>
        )
    }
    return (
        <>
            {display()}
        </>
    )
}
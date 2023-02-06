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
    const display = () => {
        return (
            <>
                {list.map((item, index) => (
                    <p key={index}>{item.id}, {item.name}, {item.address}</p>
                ))}
                <input type="text" value={name} onChange={(e) => {
                    setName(e.target.value)
                }}/>
                <input type="text" value={address} onChange={(e) => {
                    setAddress(e.target.value)
                }}/>
                <button onClick={create}>Create
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
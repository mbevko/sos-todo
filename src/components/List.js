import React, { useState } from 'react';

export default function List () {

    const [item, setItem] = useState('')
    const [list, setList] = useState([])

    const handleChange = (e) => {
        setItem(e.target.value)
    };

    const handleSubmit = (e) => {
        e.preventDefaul()
        setList(prev => [...prev, item])
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input onChange={handleChange} value={item}/>
            </form>
            {list.map((item, index) => {
                return (
                    <ul>
                        <li key={index}>{item}</li>
                    </ul>
                )
            })}
        </div>
    )
}
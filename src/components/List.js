import React, { useState } from 'react';
import Form from './Form';
import Header from './Header';
import Items from './Items';

export default function List () {

    const [item, setItem] = useState('')
    const [list, setList] = useState([])

    const handleChange = (e) => {
        setItem(e.target.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        setList(prev => [...prev, item])
        setItem('')
    };

    return (
        <div>
            <Header list={list} />
            <Form handleChange={handleChange} handleSubmit={handleSubmit} item={item}/>
            <Items list={list}/>
        </div>
    )
}
import React, { useState } from 'react';
import Form from './Form';
import Header from './Header';
import Items from './Items';
import './List.css'

export default function List () {

    const [item, setItem] = useState({
        /* cmpltd: 'done', */
        hours: '',
        time: '00:00:00',
        task: ''
    });

    const [list, setList] = useState([])
    

    const handleChange = (e) => {
        const value = e.target.value
        
        setItem({
            /* cmpltd: {[e.target.name]: value}, */
            hours: {[e.target.name]: value},
            time: {[e.target.name]: value},
            task: {[e.target.name]: value}
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        setList(prev => [...prev, item])
        console.log(item)
        setItem({
            hours: '',
            time: '',
            task: ''
        })
    };

    return (
        <div className="app">
            <Header list={list} />
            <Form handleChange={handleChange} handleSubmit={handleSubmit} item={item} />
            <Items list={list} />
        </div>
    )
};


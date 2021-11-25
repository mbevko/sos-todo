import React, {useState} from 'react';
import Form from './Form';
import Header from './Header';
import Items from './Items';
import './List.css'

export default function List() {

    const [item,
        setItem] = useState({
            hours: 0, 
            time: '00:00', 
            task: ''
        });

    const [list,
        setList] = useState([])

    const handleChange = (e) => {
        let value = e.target.value;
        let name = e.target.name;

        setItem({
            ...item,
            [name]: value
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        setList(prev => [
            ...prev,
            item
        ])
        setItem({hours: 0, time: '', task: ''})
    };

    // list.reduce((a, b) => ({hours: parseInt(a.hours) + parseInt(b.hours)}))
    // list.reduce((a, b) => ({hours: parseInt(a.hours) + parseInt(b.hours)}))
    // console.log(list.reduce((a, b) => ({hours: parseInt(a.hours) +
    // parseInt(b.hours)})))

    function AddHours() {

        if (list.length > 0) {
            const totalHours = list.reduce((a, b) => ({
                hours: parseInt(a.hours) + parseInt(b.hours)
            }))
            return <p>Total hours: {totalHours.hours}</p>
        } else {
            return <p>Total hours: 0</p>
        }
    }

    return (
        <div className="app">
            <Header list={list}/>
            <Form handleChange={handleChange} item={item} handleSubmit={handleSubmit}/>
            <Items list={list}/>
            <AddHours/>
            <div>
                <p>Tasks: {list.length}</p>
            </div>
        </div>

    )
};

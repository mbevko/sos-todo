import {Input} from 'semantic-ui-react'

export default function Form({handleChange, handleSubmit, item}) {

    return (
        <form onSubmit={handleSubmit}>
            {/* <input className="sub_field completed_field" type="checkbox" /> */}

            <Input
                label='Hours'
                onChange={handleChange}
                type="number"
                min="0"
                name="hours"
                value={item.hours}placeholder='mysite.com'/>
            <input
                className="sub_field time_field"
                onInput={handleChange}
                type="time"
                name="time"
                value={item.time}/>
            <input
                className="task_field"
                onInput={handleChange}
                type="text"
                value={item.task}
                name="task"/>
            <input className="submit" type="submit" onSubmit={handleSubmit}/>

        </form>
    )
}
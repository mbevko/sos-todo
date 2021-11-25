export default function Form({handleChange, handleSubmit, item, }) {

    return (
        <form onSubmit={handleSubmit}>
            {/* <input className="sub_field completed_field" type="checkbox" /> */}
            <input
                className="sub_field hours_field"
                onChange={handleChange}
                type="number"
                min="0"
                name="hours"
                value={item.hours}/>
            <input
                className="sub_field apt_field"
                onChange={handleChange}
                type="time"
                name="time"
                value={item.time}/>
            <input
                className="task_field"
                onChange={handleChange}
                type="text"
                value={item.task}
                name="task" />
            <input type="submit" onSubmit={handleSubmit}/>
        </form>
    )
}
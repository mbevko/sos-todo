export default function Form({handleChange, handleSubmit, item}) {

    return (
        <form onSubmit={handleSubmit}>
            <input className="sub_field completed_field" type="checkbox" />
            <input className="sub_field hours_field" type="number" min="0" />
            <input className="sub_field apt_field"/>
            <input className="task_field" onChange={handleChange} /* value={item.task} *//>
        </form>
    )
}
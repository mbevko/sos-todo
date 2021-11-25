export default function Items ({list}) {
    return(
        <div>
        {list.map((item, index) => {
            return (
                    <div key={index + 1}>
                        {/* <div className="completed_field_output">{item.compltd}</div> */}
                        <input type="check" />
                        <div className="hours_field_output">{item.hours}</div>
                        <div className="apt_field_output">{item.apt}</div>
                        <div className="task_field_output">{item.task}</div>
                    </div>
            )
        })}
        </div>
    )
}

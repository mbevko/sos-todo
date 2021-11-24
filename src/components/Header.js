
export default function Header ({list}) {

    return(
        <div className="header">
            <h1>Reminders <span style={{color:"green"}}>{list.length}</span></h1>
        </div>
    )
}
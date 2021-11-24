
export default function Header ({list}) {

    return(
        <div className="header">
            <h1>Reminders</h1>
            <h1 style={{color:"green"}}>{list.length}</h1>
        </div>
    )
}
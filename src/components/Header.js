
export default function Header ({list}) {

    return(
        <h1>My todo list <span style={{color:"red"}}>{list.length}</span></h1>
    )
}
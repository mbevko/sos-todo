

export default function Form ({handleChange, handleSubmit, item}) {

    return(
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} value={item}/>
        </form>
    )
}
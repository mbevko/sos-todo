export default function Items ({list}) {
    return(
        <ol>
        {list.map((item, index) => {
            return (
                    <li key={index + 1}><span class="check"></span>{item}</li>
            )
        })}
        </ol>
    )
}
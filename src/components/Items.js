export default function Items ({list}) {
    return(
        <ol>
        {list.map((item, index) => {
            return (
                    <li key={index + 1}>{item}</li>
            )
        })}
        </ol>
    )
}
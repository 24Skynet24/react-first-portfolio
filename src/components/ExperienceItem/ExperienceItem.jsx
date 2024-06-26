import "./ExperienceItem.scss"

export default function ExperienceItem({ title = "", list = [] }) {
    const exList = list.map((i, id) => {
        return <li key={id}>{i}</li>
    })

    return (
        <>
            <article className="ex_item">
                <div className="ex_item_inner">
                    <h4>{ title }</h4>
                    <ul>
                        { exList }
                    </ul>
                </div>
            </article>
        </>
    )
}
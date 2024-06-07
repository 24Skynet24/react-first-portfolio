import "./SectionName.scss"

export default function SectionName({ children, nameId }) {
    return (
        <>
            <h2 id={nameId}>{ children }</h2>
        </>
    )
}
import "./SkillItem.scss"

export default function SkillItem({ title = "", txt = "", alt = "", img }) {
    return (
        <>
            <article className="skill_item flex_align_center">
                <div className="icon_block">
                    <img src={ img } alt={ alt } />
                </div>
                <div className="txt_block">
                    <h4 className="title">{ title }</h4>
                    <span className="txt">{ txt }</span>
                </div>
            </article>
        </>
    )
}
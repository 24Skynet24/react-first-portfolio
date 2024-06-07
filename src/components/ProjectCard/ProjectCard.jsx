import "./ProjectCard.scss"

function CardTitle({title, subTitle = null}) {
    if (subTitle) return <h3 className="title"> {title} <span> {subTitle} </span></h3>
    return <h3 className="title"> {title}</h3>
}

export default function ProjectCard({ img, alt, skills = [], title, subTitle, txt, link }) {
    const skillsEl = skills.map((skill, id) => {
        return <span key={id} className="skill_item"> {skill} </span>
    })

    return (
        <>
            <article className="project_card d-flex">
                <div className="img_box flex-center">
                    <img src={ img } alt={ alt }/>
                    <div className="img_gox_skills flex-align-center">
                        { skillsEl }
                    </div>
                </div>
                <div className="txt_box">
                    <CardTitle title={ title } subTitle={ subTitle }/>
                    <p>{ txt }</p>
                    <a href={ link } target="_blank">see project</a>
                </div>
            </article>
        </>
    )
}
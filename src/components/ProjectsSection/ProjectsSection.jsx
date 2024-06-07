import SectionName from "../SectionName/SectionName";
import Container from "../Container/Container";
import ProjectCard from "../ProjectCard/ProjectCard";

import "./ProjectsSection.scss"

import projectItems from "../../data/projectItems";

const projectCards = projectItems.map((card, id) => {
    return <ProjectCard {...card} key={id}/>
})

export default function ProjectsSection() {
    return (
        <>
            <section className="projects">
                <Container>
                    <div className="flex_end">
                        <SectionName nameId="projects">personal projects</SectionName>
                    </div>
                    <div className="flex_wrap flex-between">
                        { projectCards }
                    </div>
                </Container>
            </section>
        </>
    )
}
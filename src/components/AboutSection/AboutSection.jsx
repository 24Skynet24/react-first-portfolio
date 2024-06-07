import Container from "../Container/Container";
import SectionName from "../SectionName/SectionName";
import SkillItem from "../SkillItem/SkillItem";
import ExperienceItem from "../ExperienceItem/ExperienceItem";

import userImg from "../../assets/img/user.webp"
import "./AboutSection.scss"
import skillItems from "../../data/skillItems";
import exItems from "../../data/exItems";

const skillsEl = skillItems.map((skill, id) => {
    return <SkillItem {...skill} key={id}/>
})
const exEl = exItems.map((ex, id) => {
    return <ExperienceItem {...ex} key={id}/>
})

export default function AboutSection() {
    return (
        <>
            <section className="about">
                <Container>
                    <div className="section_title">
                        <SectionName nameId="about">about me</SectionName>
                    </div>

                    <article className="about_card flex-align-center flex-between">
                        <img src={userImg} alt="User"/>
                        <div className="about_txt">
                            <h3>Albert Mnatsakanian</h3>
                            <p>
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                I'm more than one in love for Front-End. My experience with interface design turn me one extremely criterious with
                                alignments, margins, colors and a lot other resorces in CSS. Today I work with projects in a whole world. Codifiding in my
                                home office, in a quiet interior of São Paulo, Brazil.
                            </p>
                        </div>
                    </article>

                    <div className="skills_box flex-between flex-align-center">
                        { skillsEl }
                    </div>

                    <div className="experience_box flex-between">
                        { exEl }
                    </div>
                </Container>
            </section>
        </>
    )
}
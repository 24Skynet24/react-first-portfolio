import "./HomeSection.scss"
import { ReactTyped } from "react-typed";

export default function HomeSection() {
    return (
        <>
            <section className="home flex-center">
                <h1>
                    <ReactTyped
                        strings={["front-end developer"]}
                        typeSpeed={100}
                    />
                </h1>
            </section>
        </>
    )
}
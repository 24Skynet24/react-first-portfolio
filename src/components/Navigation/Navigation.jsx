import "./Navigation.scss"

export default function Navigation() {
    return (
        <>
            <nav className="flex_align_center">
                <a href="#about" className="link">about me</a>
                <a href="#projects" className="link">projects</a>
                <a href="#contacts" className="link">contacts</a>
            </nav>
        </>
    )
}
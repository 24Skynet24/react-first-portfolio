import Container from "../Container/Container";
import Navigation from "../Navigation/Navigation";
import "./Header.scss"

export default function Header() {
    return (
        <>
            <Container>
                <header className="flex-align-center flex-between header">
                    <a href="#" className="home_link">al.</a>
                    <Navigation/>
                    <button className="theme_btn">dark mode.</button>
                </header>
            </Container>
        </>
    )
}
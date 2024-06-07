import Container from "../Container/Container";
import Navigation from "../Navigation/Navigation";

import "./Header.scss"

export default function Header() {
    return (
        <>
            <header className="header">
                <Container>
                    <a href="#" className="home_link">al.</a>
                    <Navigation/>
                    <button className="theme_btn">dark mode.</button>
                </Container>
            </header>
        </>
    )
}
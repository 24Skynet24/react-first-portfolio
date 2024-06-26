import HomeSection from "./components/HomeSection/HomeSection";
import Header from "./components/Header/Header";
import AboutSection from "./components/AboutSection/AboutSection";
import ProjectsSection from "./components/ProjectsSection/ProjectsSection";
import ContactsSection from "./components/ContactsSection/ContactsSection";
import Footer from "./components/Footer/Footer";

function App() {

  return (
    <>
        <main>
            <Header/>
            <HomeSection/>
            <AboutSection/>
            <ProjectsSection/>
            <ContactsSection/>
            <Footer/>
        </main>
    </>
  )
}

export default App

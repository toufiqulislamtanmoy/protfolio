import About from "../About/About";
import Contact from "../Contact/Contact";
import Experience from "../Exoerience/Experience";
import Header from "../Header/Header"
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Home = () => {
    AOS.init({
        duration: 1000,
        once: false,
    })
    return (
        <div className="overflow-x-hidden">
            <Header />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Contact />
        </div>
    );
};

export default Home;
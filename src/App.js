import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Social from "./components/Social";

function App() {
    return (
        <>
            <div>
                <Navbar />
                <Home />

                <Social />
                <About />
                <Projects />
                <Experience />

                <Contact />
            </div>
        </>
    );
}

export default App;

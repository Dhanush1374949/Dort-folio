import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import Hero from './Hero';
import Navbar from './Navbar';
import Project from './Projects';


export default function Main(){
    return(
        <div>
        <Navbar/>
        <Hero/>
        <About/>
        <Project/>
        <Contact/>
        <Footer/>
        </div>
    )
}
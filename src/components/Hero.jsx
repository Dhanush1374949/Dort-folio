import hero from '../assets/Hero.png'
import { FaGithub,FaLinkedin,FaBehance } from "react-icons/fa";

export default function Hero(){
    return(
        <div className="flex  flex-col-reverse md:py-20 md:flex-row flex-wrap-reverse bg-primary md:gap-20 text-white justify-center" >
            <div className="px-10 md:py-32 "  >
                <h1 className="font-heroFont text-2xl md:text-7xl">Iam Dha<span className='text-yellow-300'>nu</span>sh
                <p className='text-[12px] md:text-2xl'>Front-end Developer and UI UX Designer </p></h1>
               <div className='flex py-2 gap-3'>
                <button onClick={ () => window.open('https://github.com/Dhanush1374949', '_blank')}><FaGithub/></button>
                <button onClick={ () => window.open('https://www.linkedin.com/in/dhanush-m-970136325/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', '_blank')}><FaLinkedin/></button>
                <button onClick={ () => window.open('https://www.behance.net/dhanushmurugan2596', '_blank')}><FaBehance/></button>
                </div> 
            </div>
            <img className="px-2 w-[400px] md:w-1/3"  src={hero} alt="hero img"></img>


        </div>
    )
}
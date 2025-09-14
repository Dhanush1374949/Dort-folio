import { useState } from "react"
import { CiMenuKebab } from "react-icons/ci"
export default function Navbar(){
  const[toggleMenu, setToggleMenu]=useState(false);
    return(
        <div>
          <header className="flex justify-between fixed top-0 md:static items-center p-4 md:px-11  w-full bg-primary text-white">
            <name className="font-bold">
                <a href="#">Dhanush M</a>
            </name>
            <nav className="hidden md:block">
            <ul  className="flex gap-4 font-semibold">
                <li><a href="/">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Project</a></li>
                <li><a href="#contact">Contact</a></li>

            </ul>
            </nav>
            {toggleMenu && <nav className="md:hidden mobileNav">
            <ul onClick={()=>setToggleMenu(!toggleMenu)} className="flex flex-col gap-5 font-semibold">
                <li><a href="/">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Project</a></li>
                <li><a href="#contact">Contact</a></li>

            </ul>
            </nav>}
            <button onClick={()=>setToggleMenu(!toggleMenu)} className="md:hidden"><CiMenuKebab size={20}/></button>
          </header>
        </div>
    )
}



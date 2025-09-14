
import { MdEmail,MdCall } from "react-icons/md";



export default function Contact(){
    return(
        <section id="contact" className="bg-primary py-20 px-32 gap-10 justify-items-center text-white " >
            <h1 className=" font-heroFont text-3xl">Contact</h1>
            <a className="flex gap-2 mt-20" href="#"><MdEmail size={20}/>dhanushmurugan3075@gmail.com</a>
            <p className=" flex gap-2 mt-20"><MdCall size={20} />9361610642</p>
            
        </section>
    )
}
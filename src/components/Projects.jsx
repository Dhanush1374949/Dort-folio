import port from '../assets/port.jpg'
import tempQ from '../assets/tempQ.jpg'
import iBon from '../assets/iBon.jpg'

export default function Project() {
    return (
        <section id='projects' className=" bg-primary px-12 md:py-20 md:px-26 gap-10 text-white  ">
            <h1 className="font-heroFont text-3xl">My Projects</h1>
            <p className="mt-5">Here are some of the projects I've worked on:</p>
            
                <div className="card"> 
                    <div className="card1">
                        <img src={port} alt="img" width={"300px"} height={"200px"}/>
                        <h3 className='font-heroFont'>Project 1</h3>
                        <h4>Portfolio website</h4>
                        <p><b>Description:</b> <br/>
                         Developed a fully responsive e-commerce platform for Laura Cosmetics, focusing on delivering a seamless online shopping experience for beauty and skincare products. The website features an elegant UI with intuitive navigation, product categorization, and a secure checkout process.</p>
                         <button  onClick={ () => window.open('https://github.com/Dhanush1374949/Dort-folio', '_blank')}  className="btnProject">Code</button>
                    </div>
                    <div className="card1">
                        <img src={tempQ} alt="img" width={"300px"} height={"200px"}/>
                        <h3 className='font-heroFont'>Project 2</h3>
                        <h4>E-commerce website</h4>
                        <p><b>Description:</b> <br/>
                         Developed a fully responsive e-commerce platform for Laura Cosmetics, focusing on delivering a seamless online shopping experience for beauty and skincare products. The website features an elegant UI with intuitive navigation, product categorization, and a secure checkout process.</p>
                         <button  onClick={ () => window.open('https://www.behance.net/gallery/230664095/Laura-Skin-Care-Product', '_blank')} className="btnProject">Case study</button>

                    </div>
                    <div className="card1">
                        <img src={iBon} alt="img" width={"300px"} height={"200px"}/>
                        <h3 className='font-heroFont '>Project 3</h3>
                        <h4>iBON website</h4>
                        <p><b>Description:</b> <br/>
                         Developed a fully responsive e-commerce platform for Laura Cosmetics, focusing on delivering a seamless online shopping experience for beauty and skincare products. The website features an elegant UI with intuitive navigation, product categorization, and a secure checkout process.</p>
                         <button onClick={ () => window.open('https://www.behance.net/gallery/228845275/IBON-Gaming-Accessories', '_blank')} className="btnProject">Case study</button>

                    </div>
                    </div>
                
            </section>
       
    );
}

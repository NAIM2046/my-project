import { useState } from "react";
import NavBar from "../NavBar/NavBar";
import { IoMdClose } from "react-icons/io";

import { CiMenuBurger } from "react-icons/ci";

const Navbers = () => {
    const routes = [
        {id: 1 , path:"/" , name: "Home"},
        {id: 2 , path:"/about" , name: "about"},
        {id: 3 , path:"/services" , name: "services"},
        {id: 4 , path:"/contact" , name: "contact"},
        {id: 5 , path:"*" , name: "NotFound"},
    ]
    const [open , setopen] = useState(false)
    return (
        <nav className="bg-amber-500 p-4">
             <div className="md:hidden" onClick={
            ()=>{
                setopen(!open) 
                
            }
           }>
           {
            open === true ? <IoMdClose className="text-2xl"/> :<CiMenuBurger className="text-2xl" />
           }
           </div>
            <ul className={`  bg-amber-500 md:flex duration-1000  absolute md:static ${open? 'top-16' : '-top-60'}`}>

          
                {
                    routes.map(rout => <NavBar key={rout.id} rout={rout}></NavBar> )
                }
            </ul>
        </nav>
    );
};

export default Navbers;
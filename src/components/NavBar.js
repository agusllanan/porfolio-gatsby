import React from 'react'
import { Link } from 'gatsby'


export default function NavBar (){
    return (
        <nav className="flex flex-row  p-6 flex-nowrap space-x-10">
            <div className="Nombre flex-1">
            <h1 className="text-green-100"> Agustín Llanán </h1>
            </div>
            <div className="links flex-1 text-center space-x-28">
                <Link to="/" className="text-green-100 "> Home </Link>
                <Link to="/about" className="text-green-100 "> About </Link>
                <Link to="/projects" className="text-green-100 "> Portfolio </Link>
            </div>
            <div className="profiles flex-1">
                <Link to="https://www.linkedin.com/in/agust%C3%ADn-llan%C3%A1n/" 
                    className="text-green-100" ><i class="fab fa-linkedin"></i></Link>
                <Link to="https://github.com/agusllanan" className="text-green-100"><i class="fab fa-github-square" ></i></Link>
            </div>
        </nav>
    )
}




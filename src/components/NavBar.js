import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons"

export default function NavBar (){
    return (
        <nav className="flex flex-none flex-row p-4 flex-nowrap space-x-10 items-center justify-between">
            <div className="Nombre">
            <h1 className="text-gray-50 text-xl font-mono font-black self-stretch"> DEV Agustín Llanán </h1>
            </div>
            <div className="links flex text-center space-x-28 text-xl items-center flex-row flex-nowrap self-stretch ">
                <Link to="/" className="text-gray-50 font-mono hover:text-green-100 transition ease-out duration-500"> Home </Link>
                <Link to="/about" className="text-gray-50 font-mono hover:text-green-100 transition ease-out duration-500"> About </Link>
                <Link to="/projects" className="text-gray-50 font-mono hover:text-green-100 transition ease-out duration-500"> Portfolio </Link>
            </div>
            <div className="profiles">
                <Link to="https://www.linkedin.com/in/agust%C3%ADn-llan%C3%A1n/">
                    <FontAwesomeIcon icon= {faLinkedin} size="2x" className="text-gray-50 px-2 text-5xl"/></Link>
                <Link to="https://github.com/agusllanan">
                    <FontAwesomeIcon icon= {faGithubSquare} size="2x" className="text-gray-50 px-2 text-5xl text-center" /></Link>
            </div>
        </nav>
    )
}




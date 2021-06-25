import React from 'react'
import NavBar from './NavBar'


export default function Layout({ children }) {
    return (
        <div className="layout">
            <NavBar />
            <div className="content"> 
            { children }
            </div>
            <footer>
                <p className="text-gray-50 font-mono font-black text-xl text-center">Copyright 2021 Agustín Llanán</p>
            </footer>
        </div>
    )
}

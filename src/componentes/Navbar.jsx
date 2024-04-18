import React from "react"
import Cart from "./Cart.jsx";
import {Link} from "react-router-dom"



function NavBar(){
    return (
        <nav>
            <header className="p-4 dark:bg-gray-100 dark:text-gray-800">
	<div className="container flex justify-between h-16 mx-auto">
		<a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2">
		<img src="./logot.jpg" alt="" className="h-10"/>
		<h1 className="">MUNAH GIFTSTORE</h1>
		</a>
		
		<ul className="items-stretch hidden space-x-3 md:flex">
			
			<li className="flex">
				<Link to="/" className="flex items-center px-4 -mb-1">Inicio</Link>
			</li>
			<li className="flex">
				<Link to="/inicio" className="flex items-center px-4 -mb-1">Productos</Link>
			</li>
			<li className="flex">
				<Link to="/productos" className="flex items-center px-4 -mb-1">GiftCard</Link>
			</li>
			<li className="flex">
				<Link to="giftcard"className="flex items-center px-4 -mb-1">Contacto</Link>
			</li> 
		</ul>
		
        <Cart/>
		<button className="flex justify-end p-4 md:hidden">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
			</svg>
		</button>
	</div>
</header>
        </nav>
    );
}

export default NavBar
import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
    const location = useLocation();
    const directory = location.pathname.split('/')[1] || 'home';
    useEffect(() => {

        console.log("Current Directory: ", directory);
    }, [])
    return (
        <div className="sticky top-0 z-10 navbar shadow-sm" style={{ backgroundColor: '#4E0A62' }}>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost text-white hover:text-black lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-200 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><Link to="/">Home</Link></li>
                        <li><a>Grab</a></li>
                        <li><a>Foodpanda</a></li>
                    </ul>
                </div>
                <a className="mx-2 font-bold text-xl text-white" style={{ fontFamily: ['Urbanist', 'sans-serif'] }}>GenieX</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-white">
                    <li className={`${directory === 'home' ? 'bg-primary-content text-black rounded-sm' : 'text-white'}`}><Link to="/">Home</Link></li>
                    
                    <li className={`${directory === 'foodpanda' ? 'bg-secondary text-secondary-content rounded-sm' : 'text-white'}`}><Link to="/foodpanda">Foodpanda</Link></li>
                    <li className={`${directory === 'grab' ? 'bg-success text-white rounded-sm' : 'text-white'}`}>
                        <Link to="/grab">Grab</Link>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Login</a>
            </div>
        </div>
    )
}

export default Navbar
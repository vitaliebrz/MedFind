import React, { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router'
import { FaRegHospital } from "react-icons/fa6";

const Header = () => {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-white border-b border-gray-100'}`}>
            <div className='container mx-auto px-6 py-4 flex items-center justify-between'>
                <Link to="/" className='flex items-center gap-2 group'>
                    <div className='w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-200 group-hover:bg-blue-700 transition-colors'>
                        <FaRegHospital className='text-white text-lg' />
                    </div>
                    <span className='font-bold text-xl text-gray-900 tracking-tight'>Med<span className='text-blue-600'>Find</span></span>
                </Link>
                <nav>
                    <ul className='flex items-center gap-1'>
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${isActive
                                        ? 'bg-blue-600 text-white shadow-md shadow-blue-200'
                                        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                                    }`
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/hospital"
                                className={({ isActive }) =>
                                    `px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${isActive
                                        ? 'bg-blue-600 text-white shadow-md shadow-blue-200'
                                        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                                    }`
                                }
                            >
                                Spitale
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header

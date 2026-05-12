import React from 'react'
import { Link } from 'react-router'
import { FaRegHospital } from "react-icons/fa6";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className='bg-gray-900 text-gray-400'>
            <div className='container mx-auto px-6 py-12'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                    <div className='flex flex-col gap-3'>
                        <Link to="/" className='flex items-center gap-2 w-fit'>
                            <div className='w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center'>
                                <FaRegHospital className='text-white' />
                            </div>
                            <span className='font-bold text-white text-lg'>Med<span className='text-blue-400'>Find</span></span>
                        </Link>
                        <p className='text-sm leading-relaxed'>
                            Găsește rapid spitale și clinici din Moldova și România. Informații actualizate, contacte directe.
                        </p>
                    </div>

                    <div className='flex flex-col gap-3'>
                        <h4 className='text-white font-semibold text-sm uppercase tracking-wider'>Navigare</h4>
                        <ul className='flex flex-col gap-2 text-sm'>
                            <li><Link to="/" className='hover:text-white transition-colors'>Home</Link></li>
                            <li><Link to="/hospital" className='hover:text-white transition-colors'>Spitale</Link></li>
                        </ul>
                    </div>

                    <div className='flex flex-col gap-3'>
                        <h4 className='text-white font-semibold text-sm uppercase tracking-wider'>Contact</h4>
                        <ul className='flex flex-col gap-2 text-sm'>
                            <li className='flex items-center gap-2'><FaPhoneAlt className='text-blue-400' /> +373 22 000 000</li>
                            <li className='flex items-center gap-2'><FaEnvelope className='text-blue-400' /> contact@medfind.md</li>
                        </ul>
                    </div>
                </div>

                <div className='border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-2 text-xs'>
                    <p>© {new Date().getFullYear()} MedFind. Toate drepturile rezervate.</p>
                    <p>Construit cu React & Tailwind CSS</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer

import React from 'react'
import { useParams, Link } from 'react-router'
import hospitalsData from '../data/hospitals.json'
import { FaPhoneAlt, FaEnvelope, FaLink, FaHospital } from 'react-icons/fa'
import { FaLocationDot, FaArrowLeft } from 'react-icons/fa6'

const HospitalDetail = () => {
    const { id } = useParams()

    const hospital = hospitalsData
        .flatMap(({ city, hospitals }) => hospitals.map(h => ({ ...h, city })))
        .find(h => h.id === Number(id))

    if (!hospital) {
        return (
            <div className='container mx-auto px-6 py-24 text-center flex flex-col items-center gap-4'>
                <p className='text-6xl'><FaHospital  className='text-gray-500'/></p>
                <h2 className='text-2xl font-bold text-gray-900'>Spitalul nu a fost găsit</h2>
                <Link to="/" className='text-blue-600 hover:underline flex items-center gap-2'>
                    <FaArrowLeft /> Înapoi acasă
                </Link>
            </div>
        )
    }

    return (
        <div>
            {/* Back */}
            <div className='bg-white border-b border-gray-100'>
                <div className='container mx-auto px-6 py-4'>
                    <Link
                        to="/hospital"
                        className='inline-flex items-center gap-2 text-sm text-gray-500 hover:text-blue-600 transition-colors'
                    >
                        <FaArrowLeft /> Înapoi
                    </Link>
                </div>
            </div>

            <div className='container mx-auto px-6 py-10 max-w-4xl'>
                {/* Image */}
                <div className='rounded-3xl overflow-hidden h-72 md:h-96 w-full shadow-md mb-8'>
                    <img
                        src={hospital.image}
                        alt={hospital.name}
                        className='w-full h-full object-cover'
                    />
                </div>

                {/* Info */}
                <div className='flex flex-col gap-6'>
                    <div>
                        <span className='text-xs font-semibold text-blue-600 uppercase tracking-wider'>{hospital.city}</span>
                        <h1 className='text-3xl md:text-4xl font-bold text-gray-900 mt-1'>{hospital.name}</h1>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        {/* Address */}
                        <Link
                            to={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(hospital.address)}`}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='flex items-start gap-4 bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all group'
                        >
                            <div className='w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-blue-100 transition-colors'>
                                <FaLocationDot className='text-blue-600' />
                            </div>
                            <div>
                                <p className='text-xs text-gray-400 font-medium mb-1'>Adresă</p>
                                <p className='text-gray-800 font-medium text-sm leading-relaxed'>{hospital.address}</p>
                                <p className='text-xs text-blue-500 mt-1 group-hover:underline'>Deschide în Maps →</p>
                            </div>
                        </Link>

                        {/* Phone */}
                        <Link
                            to={`tel:${hospital.contact.phone}`}
                            className='flex items-start gap-4 bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all group'
                        >
                            <div className='w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-blue-100 transition-colors'>
                                <FaPhoneAlt className='text-blue-600' />
                            </div>
                            <div>
                                <p className='text-xs text-gray-400 font-medium mb-1'>Telefon</p>
                                <p className='text-gray-800 font-medium'>{hospital.contact.phone}</p>
                                <p className='text-xs text-blue-500 mt-1 group-hover:underline'>Sună acum →</p>
                            </div>
                        </Link>

                        {/* Email */}
                        <Link
                            to={`mailto:${hospital.contact.email}`}
                            className='flex items-start gap-4 bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all group'
                        >
                            <div className='w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-blue-100 transition-colors'>
                                <FaEnvelope className='text-blue-600' />
                            </div>
                            <div>
                                <p className='text-xs text-gray-400 font-medium mb-1'>Email</p>
                                <p className='text-gray-800 font-medium'>{hospital.contact.email}</p>
                                <p className='text-xs text-blue-500 mt-1 group-hover:underline'>Trimite email →</p>
                            </div>
                        </Link>

                        {/* Website */}
                        <Link
                            to={hospital.contact.website}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='flex items-start gap-4 bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all group'
                        >
                            <div className='w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-blue-100 transition-colors'>
                                <FaLink className='text-blue-600' />
                            </div>
                            <div>
                                <p className='text-xs text-gray-400 font-medium mb-1'>Website</p>
                                <p className='text-gray-800 font-medium'>{hospital.contact.website}</p>
                                <p className='text-xs text-blue-500 mt-1 group-hover:underline'>Vizitează →</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HospitalDetail

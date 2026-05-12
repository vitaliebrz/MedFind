import React from 'react'
import { Link } from 'react-router'
import { FaPhoneAlt, FaEnvelope, FaLink } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const HospitalCard = ({ hospital }) => {
    return (
        <Link
            to={`/hospitals/${hospital.id}`}
            className='group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col'
        >
            <div className='relative overflow-hidden h-48'>
                <img
                    src={hospital.image}
                    alt={hospital.name}
                    className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                />
                <div className='absolute inset-0 bg-linear-to-t from-black/30 to-transparent' />
            </div>

            <div className='flex flex-col gap-3 p-5 flex-1'>
                <h3 className='font-semibold text-gray-900 leading-snug group-hover:text-blue-600 transition-colors'>
                    {hospital.name}
                </h3>

                <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(hospital.address)}`}
                    target='_blank'
                    rel='noopener noreferrer'
                    onClick={e => e.stopPropagation()}
                    className='flex items-start gap-2 text-gray-500 hover:text-blue-600 transition-colors text-sm'
                >
                    <FaLocationDot className='mt-0.5 shrink-0 text-blue-400' />
                    <span className='truncate' title={hospital.address}>{hospital.address}</span>
                </a>

                <div className='border-t border-gray-100 mt-auto pt-3 flex items-center gap-3'>
                    <a
                        href={`tel:${hospital.contact.phone}`}
                        onClick={e => e.stopPropagation()}
                        title={hospital.contact.phone}
                        className='flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors'
                    >
                        <FaPhoneAlt className='text-xs' />
                    </a>
                    <a
                        href={`mailto:${hospital.contact.email}`}
                        onClick={e => e.stopPropagation()}
                        title={hospital.contact.email}
                        className='flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors'
                    >
                        <FaEnvelope className='text-xs' />
                    </a>
                    <a
                        href={hospital.contact.website}
                        target='_blank'
                        rel='noopener noreferrer'
                        onClick={e => e.stopPropagation()}
                        title={hospital.contact.website}
                        className='flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors'
                    >
                        <FaLink className='text-xs' />
                    </a>
                    <span className='ml-auto text-xs text-gray-400 font-medium'>Vezi detalii →</span>
                </div>
            </div>
        </Link>
    )
}

export default HospitalCard

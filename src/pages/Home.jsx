import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router'
import { FaLocationDot } from 'react-icons/fa6'
import { FaArrowRight } from 'react-icons/fa'
import hospitalsData from '../data/hospitals.json'
import HospitalCard from '../components/HospitalCard'

const normalize = (oras) =>
    oras?.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '') ?? '' // sterge diacriticile, [\u0300-\u036f] interval de unicode cu diacritice, g - gaseste toate aparitiile de diacritice. Example: "Chișinău" -> "chisinau" ne permite sa comparăm numele orașelor fără să ne îngrijorăm de diacritice sau majuscule. Astfel, "Chișinău", "chisinau" și "CHIȘINĂU" vor fi considerate același oraș.

const Home = () => {
    const [city, setCity] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const { latitude: lat, longitude: lon } = position.coords
                try {
                    const { data } = await axios.get(
                        'https://nominatim.openstreetmap.org/reverse',
                        { params: { format: 'json', lat, lon } }
                    )
                    setCity(data.address.city || data.address.town || data.address.village || data.address.state)
                } catch (error) {
                    console.error('Error getting the city:', error)
                } finally {
                    setLoading(false)
                }
            },
            () => setLoading(false)
        )
    }, [])

    const userCityData = city
        ? hospitalsData.find(({ city: c }) => normalize(c).includes(normalize(city)) || normalize(city).includes(normalize(c)))
        : null

    const otherCities = hospitalsData.filter((item) => item.city !== userCityData?.city)

    return (
        <div>
            {/* Hero */}
            <section className='relative overflow-hidden bg-linear-to-br from-blue-600 via-blue-700 to-indigo-800 text-white'>
                <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.1), transparent_60%)]' />
                <div className='container mx-auto px-6 py-24 md:py-32 relative'>
                    <div className='max-w-2xl flex flex-col gap-6'>
                        {!loading && (
                            <div className='flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 w-fit text-sm'>
                                <FaLocationDot className='text-blue-200' />
                                {city
                                    ? <span>Locația ta: <strong>{city}</strong></span>
                                    : <span>Locația nu a putut fi determinată</span>
                                }
                            </div>
                        )}
                        {loading && (
                            <div className='flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 w-fit text-sm animate-pulse'>
                                <FaLocationDot className='text-blue-200' />
                                <span>Se determină locația...</span>
                            </div>
                        )}
                        <h1 className='text-4xl md:text-6xl font-bold leading-tight tracking-tight'>
                            Găsește spitalul <br />
                            <span className='text-blue-200'>potrivit pentru tine</span>
                        </h1>
                        <p className='text-blue-100 text-lg leading-relaxed max-w-lg'>
                            Acces rapid la informații despre spitale din Moldova și România. Adrese, telefoane și linkuri directe.
                        </p>
                        <Link
                            to="/hospital"
                            className='flex items-center gap-2 bg-white text-blue-700 font-semibold px-6 py-3 rounded-full w-fit hover:bg-blue-50 transition-all duration-200 shadow-lg shadow-blue-900/30'
                        >
                            Vezi toate spitalele <FaArrowRight />
                        </Link>
                    </div>
                </div>
                <div className='absolute -bottom-1 left-0 right-0'>
                    <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 60L1440 60L1440 0C1200 50 900 60 720 60C540 60 240 50 0 0L0 60Z" fill="#f9fafb" />
                    </svg>
                </div>
            </section>

            <div className='container mx-auto px-6 py-12 flex flex-col gap-14'>
                {/* Spitale din orașul utilizatorului */}
                {!loading && userCityData && (
                    <section>
                        <div className='flex items-center gap-3 mb-6'>
                            <div className='w-1 h-7 bg-blue-600 rounded-full' />
                            <h2 className='text-2xl font-bold text-gray-900'>
                                Spitale în <span className='text-blue-600'>{userCityData.city}</span>
                            </h2>
                            <span className='bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full'>
                                Orașul tău
                            </span>
                        </div>
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                            {userCityData.hospitals.map(hospital => (
                                <HospitalCard key={hospital.id} hospital={hospital} />
                            ))}
                        </div>
                    </section>
                )}

                {/* Loading skeleton */}
                {loading && (
                    <section>
                        <div className='h-8 w-64 bg-gray-200 rounded-full animate-pulse mb-6' />
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                            {[1, 2, 3].map(i => (
                                <div key={i} className='bg-white rounded-2xl overflow-hidden border border-gray-100 animate-pulse'>
                                    <div className='h-48 bg-gray-200' />
                                    <div className='p-5 flex flex-col gap-3'>
                                        <div className='h-4 bg-gray-200 rounded w-3/4' />
                                        <div className='h-3 bg-gray-100 rounded w-full' />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Spitale din alte orașe */}
                {!loading && (
                    <section className='flex flex-col gap-12'>
                        {(userCityData ? otherCities : hospitalsData).map(({ city: cityName, hospitals: list }) => (
                            <div key={cityName}>
                                <div className='flex items-center gap-3 mb-6'>
                                    <div className='w-1 h-7 bg-gray-300 rounded-full' />
                                    <h2 className='text-2xl font-bold text-gray-900'>{cityName}</h2>
                                    <span className='bg-gray-100 text-gray-600 text-xs font-semibold px-3 py-1 rounded-full'>
                                        {list.length} spitale
                                    </span>
                                </div>
                                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                                    {list.map(hospital => (
                                        <HospitalCard key={hospital.id} hospital={hospital} />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </section>
                )}
            </div>
        </div>
    )
}

export default Home

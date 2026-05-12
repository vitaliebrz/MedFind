import React from 'react'
import hospitals from '../data/hospitals.json'
import HospitalCard from '../components/HospitalCard'

const Hospital = () => {
    return (
        <div>
            <div className='bg-white border-b border-gray-100'>
                <div className='container mx-auto px-6 py-10'>
                    <h1 className='text-4xl font-bold text-gray-900'>Spitale</h1>
                    <p className='text-gray-500 mt-2'>Listă completă de spitale din Moldova și România</p>
                </div>
            </div>

            <div className='container mx-auto px-6 py-10 flex flex-col gap-12'>
                {hospitals.map(({ city, hospitals: list }) => (
                    <section key={city}>
                        <div className='flex items-center gap-3 mb-6'>
                            <div className='w-1 h-7 bg-blue-600 rounded-full' />
                            <h2 className='text-2xl font-bold text-gray-900'>{city}</h2>
                            <span className='bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full'>
                                {list.length} spitale
                            </span>
                        </div>
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                            {list.map(hospital => (
                                <HospitalCard key={hospital.id} hospital={hospital} />
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </div>
    )
}

export default Hospital

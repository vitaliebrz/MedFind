import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router'

const MainLayout = () => {
    return (
        <div className='flex flex-col min-h-screen bg-gray-50'>
            <Header />
            <main className='flex-1'>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default MainLayout

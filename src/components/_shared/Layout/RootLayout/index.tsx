import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar />
            <main className='flex-1'>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default RootLayout
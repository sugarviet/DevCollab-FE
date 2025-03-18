import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}

export default RootLayout
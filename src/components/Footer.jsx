import React from 'react'

const Footer = () => {
    return (
        <div className='fixed bottom-0 w-full'>
            <div class="container mx-auto text-center text-red-400 bg-white">
                copyright &copy; {new Date().getFullYear()} Mahenoor Salat | All Rights Reserved.
            </div>
        </div>
    )
}

export default Footer

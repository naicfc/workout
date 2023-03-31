import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='bg-white'>
        <div className="max-w-[1000px] my-0 mx-auto p-5 flex items-center justify-between">
            <Link to="/" className='text-gray-800'>
                <h1 className='font-bold'>Workout Buddy</h1>
            </Link>
        </div>
    </header>
  )
}

export default Navbar
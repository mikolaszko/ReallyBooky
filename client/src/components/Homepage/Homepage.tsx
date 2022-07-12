import React from 'react'
import Navbar from '../reusable/Navbar/Navbar'
import Sidebar from '../reusable/Sidebar/Sidebar'

function HomePage() {
  return (
    <div className='homePage'>
        <Navbar />
        <Sidebar />
    </div>
  )
}

export default HomePage
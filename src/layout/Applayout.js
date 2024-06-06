import React from 'react'
import Header from '../components/header'
import Footer from '../components/Footer'

import { Outlet } from 'react-router-dom'

const Applayout = () => {
  return (
    <div>
        <Header/>
        <main>
            <Outlet/>
        </main>
        <Footer/>
    </div>
  )
}

export default Applayout
import React from 'react'
import Navbar from './componets/Navbar/Navbar'
import Hero from './componets/Hero/Hero'
import Services from './componets/Services/Services'
import Banner from './componets/Banner/Banner'
import Banner2 from './componets/Banner/Banner2'
import Subscribe from './componets/Subscribe/Subscribe'
import Footer from './componets/Footer/Footer'

const App = () => {
  return (
    <main className='overflow-x-hidden bg-slate-950 text-white'>
      <Navbar/>
      <Hero/>
      <Services/>
      <Banner/>
      <Subscribe/>
      <Banner2/>
      <Footer/>
    </main>
  )
}

export default App
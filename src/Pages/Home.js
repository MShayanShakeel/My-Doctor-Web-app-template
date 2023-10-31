import React from 'react'
import Banner from '../Components/Banner'
import Customer from '../Components/Customer'
import Ourteam from '../Components/Ourteam'
import Expert from '../Components/Expert'
import Services from '../Components/Services'
import Products from '../Components/Products'

const Home = () => {
  return (
    <div>
      <Banner />
      <Services />
      <Customer />
      <Expert />
      <Products />
      <Ourteam/>
    </div>
  )
}

export default Home

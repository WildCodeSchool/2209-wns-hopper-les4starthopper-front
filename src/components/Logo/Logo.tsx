import React from 'react'
import './logo.css'
import CityLogo from '../../assets/cityGuideLogo.png'

const Logo = () => {
  return (
    <div className='logoBox'>
      <img src={CityLogo} alt="" />
    </div>
  )
}

export default Logo
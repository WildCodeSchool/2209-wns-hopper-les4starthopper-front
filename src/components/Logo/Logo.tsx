import React from 'react'
import s from './logo.module.css'
import CityLogo from '../../assets/cityGuideLogo.png'

const Logo = () => {
  return (
    <div className={s.logoBox}>
      <img src={CityLogo} alt="" />
    </div>
  )
}

export default Logo
import React from 'react'
import DenialDenial from './Img/DenialDenial.webp'

const HeroSection = () => {
  return (
    <div className="d-flex align-items-start">
      <img src={DenialDenial} alt="Hero" style={{ width: '100%' }} />
    </div>
  )
}

/* style={{ marginLeft: '50px', padding: '10px' }}
 */
export default HeroSection
import React from 'react'

import images from './constants/images'
import './StatsPreviewCard.css'

const StatsPreviewCard = () => {
  return (
    <div className='app__statsPreviewCard'>
      <img src={images.mobileHeader} alt='mobile header' className='app__statsPreviewCard-mobile-header'/>
      <img src={images.desktopHeader} alt='desktop header' className='app__statsPreviewCard-desktop-header'/>
      <div className='app__statsPreviewCard-info'>
        <header>
          <h1>Get <b>insights</b> that help your business grow.</h1>
          <p>Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency</p>
        </header>
        <div className='app__statsPreviewCard-stats'>
          <div className='app__statsPreviewCard-stat'>
            <h2>10k+</h2>
            <p>Companies</p>
          </div>
          <div className='app__statsPreviewCard-stat'>
            <h2>314</h2>
            <p>Templates</p>
          </div>
          <div className='app__statsPreviewCard-stat'>
            <h2>12M+</h2>
            <p>Queries</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StatsPreviewCard

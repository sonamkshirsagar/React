import React from 'react'
import Header from './Header'
import './Hero.css'
import heart from './Images/heart.jpg'
import hero from './Images/hero.jpg'
import cal from './Images/cal.png'

const Hero = () => {
    return (
        <div className='hero'>
            <div className='left-h'>

                <Header />
                <div className='the-best-ad'>
                    <div></div>
                    <span>the best fitness club in the town</span>
                </div>

                <div className='hero-text'>
                    <div>
                        <span className='stroke-text'>Shape</span>
                        <span className='y'>Your</span>
                    </div>

                    <div><span>Ideal Body</span></div>
                    <div><span>
                        In Here we will help you to shape and build your ideal body and live up your life fullest
                    </span>
                    </div>
                </div>
                <div className='figures'>
                    <div>
                        <span>+140</span>
                        <span>Expert coaches</span>
                    </div>

                    <div>
                        <span>+987</span>
                        <span>Members joined</span>
                    </div>

                    <div>
                        <span>+50</span>
                        <span>Fitness Programs</span>
                    </div>

                </div>
                <div className='hero-buttons'>
                    <buttons className='btn'>Get Started</buttons>
                    <buttons className='btn'>Learn More</buttons>


                </div>

            </div>

            <div className='right-h'>
                <button className='btn'>Join Now</button>
                <div className='heart-rate'>
                    <img src={heart} alt='heart' width={60} />
                    <span>Heart Rate</span>
                    <span>116 bpm</span>
                </div>
                <img src={hero} alt='hero' className='hero-image'/>
                <div className='calories'>
                    <img src={cal} alt='cal' width={20}/>
                  <div>  <span>Calories Burned</span>
                        <span>220 kcal</span>
                    </div>
                </div>

            </div>
            </div>
            )
}

            export default Hero
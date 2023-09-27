import React from 'react'
import Profile from "../../assets/home.jpg"
import { Link } from "react-router-dom"
import { FaArrowRight } from 'react-icons/fa'
import './home.css'
const Home = () => {
  return (
    <section className="home section grid">
      <img src={ Profile } alt="" className="home__img" />
      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>I'm Biruk Tadesse. </span> Full-stack and Mobile Developer
          </h1>
          <p className="home__description">
            I'm an Ethiopian based Software Engineer and former Google Engineer
            with four years of experience in developing Full-stack web application
            and mobile apps. Skilled at writing clear, concise and modularized
            code that is easy to maintain and troubleshoot.
          </p>
          <Link to='/about' className='button'>
            More About Me
            <span className="button__icon">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>
      <div className="color__block"></div>
    </section>
  )
}

export default Home

import { useEffect, useState } from 'react'
import './assets/styles/App.scss'

import Lottie from 'react-lottie-player'
import scroll from './assets/animations/scroll.json';
import frame from './assets/animations/frame.json';

import { FaGithub, FaLinkedin} from 'react-icons/fa';
import {GrMail} from 'react-icons/gr'
import {GiAbstract030} from 'react-icons/gi'
import {FaConnectdevelop} from 'react-icons/fa'
import {BsHexagon} from 'react-icons/bs';

import initCube from './assets/components/Cube/Cube';

import addObservers from './assets/scripts/intersection-observers';
import fixVh from './assets/scripts/fixVh';

function App() {

  useEffect(() => {

    // Add a `--vh` variable to account for mobile browsers
    fixVh();

    // Initialise Cube
    let cubeContainer = document.getElementById('cube-container')
    initCube(cubeContainer)

    // Add Intersection Observers to elements
    addObservers();
   
  }, [])
  

  return (

    
    <div className="App">
      
      <div className="landing-page page">

        <div className="header">
          <a href = "" className="icon spin-hover observe fade down" >
            {/* <GiAbstract030></GiAbstract030> */}
            {/* <FaConnectdevelop></FaConnectdevelop> */}
            <BsHexagon></BsHexagon>
          </a>
          <div className="navigation">

            <a href="" className="nav-link strike-hover observe fade down delay-16 duration-10">
              About
            </a>
            <a href="" className="nav-link strike-hover observe fade down delay-19 duration-10">
              Projects
            </a>
            <a href="" className="nav-link strike-hover observe fade down delay-22 duration-10">
              Contact
            </a>

          </div>
        </div>

        <div className="content">

          <div className="text">
            <div className="title observe fade">Morgan Daniel</div>
            <div className="sub-title observe fade delay-3">FULL-STACK DEVELOPER</div>
            <div className="buttons">

              <a href="" className="button float-hover observe fade delay-8 duration-15">
                <FaGithub></FaGithub>
              </a>
              <a href="" className="button float-hover observe fade delay-9 duration-15">
                <FaLinkedin></FaLinkedin>
              </a>
              <a href="" className="button float-hover observe fade delay-10 duration-15">
               <GrMail></GrMail>
              </a>


            </div>
          </div>

          <div className="cube-container">
            <div className="cube observe fade down delay-16 duration-10" id = 'cube-container' >
              <Lottie 
              animationData = {frame}
              play
              className='frame-animation'
              />
            </div>
          </div>

        </div>

        <div className="footer">

          <Lottie 
          animationData = {scroll}
          loop
          play
          className='footer-animation observe fade down delay-16'
          />

        </div>

      </div>

      <div className="about-us-page page">

      </div>



    </div>

  )
}

export default App

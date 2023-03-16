import { useEffect, useRef } from 'react'
import './assets/styles/App.scss'

import Lottie from 'react-lottie-player';
import frame from './assets/animations/frame.json';
import scrollHint from './assets/animations/scroll.json'

import { Link, Element } from 'react-scroll'

import { FaGithub, FaLinkedin} from 'react-icons/fa';
import {GrMail} from 'react-icons/gr'

import initCube from './assets/components/Cube/Cube';

import addObservers from './assets/scripts/intersection-observers';
import fixVh from './assets/scripts/fixVh';
import ambientBackground from './assets/scripts/ambientBackground';
import initTrailer from './assets/scripts/mouseTrailer';

function App() {

  useEffect(() => {

    // Add a `--vh` variable to account for mobile browsers
    fixVh();

    // Initialise Cube
    let cubeContainer = document.getElementById('cube-container')
    initCube(cubeContainer)

    // Add Intersection Observers to elements
    addObservers();

    // Add Mouse Trailer
    const trailer = document.getElementById('trailer');
    initTrailer(trailer)

    // Initialize Particle Background
    let backgroundCanvas = document.querySelector('.background') as HTMLCanvasElement;
    backgroundCanvas.width = window.innerWidth;
    backgroundCanvas.height = document.getElementsByTagName('body')[0].offsetHeight;
    ambientBackground({canvas: backgroundCanvas, numberParticles:100});

    let footer = document.querySelector('.footer');
    window.onscroll = e => {
      footer?.classList.add('hide');
    }
   
  }, [])
  

  return (

    
    <div className="App">

      <canvas className="background"></canvas>
      
      <div id="trailer">
        <div className="inner"></div>
        <div className="outer"></div>
      </div>

      <div className="landing-page">

        <div className="header">
          <a href = '#' className="resume observe fade down delay-12">
            <div className="icon" >
              <div className="square1"></div>
              <div className="square2"></div>
            </div>
            <div className="text">RESUME</div>
          </a>
         
          <div className="navigation">

            <Link to="about" offset={-100} spy={false} smooth={true} duration={500} className="nav-link interactive-surround strike-hover observe fade down delay-12 duration-10">
              ABOUT
            </Link>
            <Link to="projects" offset={-100} spy={false} smooth={true} duration={500} className="nav-link interactive-surround strike-hover observe fade down delay-15 duration-10">
              PROJECTS
            </Link>
            <Link to="contact" offset={-100} spy={false} smooth={true} duration={500} className="nav-link interactive-surround strike-hover observe fade down delay-18 duration-10">
              CONTACT
            </Link>

          </div>
        </div>

        <div className="content">

          <div className="text">
            <div className="title observe fade">Morgan Daniel</div>
            <div className="sub-title observe fade delay-2">FULL-STACK DEVELOPER</div>
            <div className="buttons">

              <a href="" className="button interactive-surround observe fade delay-6 duration-11">
                <FaGithub></FaGithub>
              </a>
              <a href="" className="button interactive-surround observe fade delay-7 duration-10">
                <FaLinkedin></FaLinkedin>
              </a>
              <a href="" className="button interactive-surround observe fade delay-8 duration-9">
               <GrMail></GrMail>
              </a>


            </div>
          </div>

          <div className="cube-container">
            <div className="cube observe fade down delay-12 duration-10" id = 'cube-container' >
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
          animationData = {scrollHint}
          loop
          play
          className='footer-animation observe fade down delay-25'
          />

        </div>

      </div>

      {/* <div className="seperator-8" ></div> */}

      <Element className="about-us-page page" id = 'about' name = 'about'>
          
          <div className="pageTitle">
            
          <div className="pointer observe continous">
              <div className="inner"></div>
              <div className="outer"></div>
            </div>
            <div className="number observe fade down delay-10">01.</div>
            <div className="title  observe fade down delay-10">ABOUT</div>
            <div className="line  observe fade down delay-10"></div>
          </div>
          

      </Element>

      <Element className="about-us-page page" id = 'about' name = 'projects'>
          
          <div className="pageTitle">
            
            <div className="pointer observe continous">
              <div className="inner"></div>
              <div className="outer"></div>
            </div>
            <div className="number observe fade down delay-10">02.</div>
            <div className="title  observe fade down delay-10">PROJECTS</div>
            <div className="line  observe fade down delay-10"></div>
          </div>
          

      </Element>

      <Element className="about-us-page page" id = 'about' name = 'contact'>
          
          <div className="pageTitle">
            
          <div className="pointer observe continous">
              <div className="inner"></div>
              <div className="outer"></div>
            </div>
            <div className="number observe fade down delay-10">03.</div>
            <div className="title  observe fade down delay-10">CONTACT</div>
            <div className="line  observe fade down delay-10"></div>
          </div>
          

      </Element>



    </div>

  )
}

export default App

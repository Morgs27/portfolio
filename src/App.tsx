import { useEffect } from 'react'
import './assets/styles/App.scss'

import Lottie from 'react-lottie-player';
import frame from './assets/animations/frame.json';

import { Link, Element } from 'react-scroll'

import { FaCss3Alt, FaGithub, FaHtml5, FaJs, FaLinkedin, FaNodeJs, FaPhp, FaReact, FaSass} from 'react-icons/fa';
import {GrMail} from 'react-icons/gr'
import {SiFirebase, SiMysql, SiThreedotjs, SiTypescript, SiVite} from 'react-icons/si'

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
    // const trailer = document.getElementById('trailer');
    // initTrailer(trailer)

    // Initialize Particle Background
    let backgroundCanvas = document.querySelector('.background') as HTMLCanvasElement;
    backgroundCanvas.width = window.innerWidth;
    backgroundCanvas.height = document.getElementsByTagName('body')[0].offsetHeight;
    ambientBackground({canvas: backgroundCanvas, numberParticles:100});

    // Hide Scroll Hint on scroll
    let footer = document.querySelector('.footer');
    let footerText = footer?.querySelector('.text')
    let footerCube = footer?.querySelector('.line');
    window.onscroll = e => {

      if (window.pageYOffset == 0){
        footerText?.classList.remove('hide');
      }
      else {
        footerText?.classList.add('hide');
      }

      // @ts-ignore
      footerCube.style.opacity = '0.6';
      // @ts-ignore
      footerCube.style.transform = `rotate(${45 + window.pageYOffset / 2}deg)`
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

            <Link to="about" offset={-40} spy={false} smooth={true} duration={500} className="nav-link interactive-surround strike-hover observe fade down delay-12 duration-10">
              ABOUT
            </Link>
            <Link to="projects" offset={-40} spy={false} smooth={true} duration={500} className="nav-link interactive-surround strike-hover observe fade down delay-15 duration-10">
              PROJECTS
            </Link>
            <Link to="contact" offset={-40} spy={false} smooth={true} duration={500} className="nav-link interactive-surround strike-hover observe fade down delay-18 duration-10">
              CONTACT
            </Link>

          </div>
        </div>

        <div className="content">

          <div className="text">
            <div className="title observe fade">Morgan Daniel</div>
            <div className="sub-title observe fade delay-2">FULL-STACK DEVELOPER</div>
            <div className="buttons">

              <a href="" className="button float-hover interactive-surround observe fade delay-6 duration-11">
                <FaGithub></FaGithub>
              </a>
              <a href="" className="button float-hover interactive-surround observe fade delay-7 duration-10">
                <FaLinkedin></FaLinkedin>
              </a>
              <a href="" className="button float-hover interactive-surround observe fade delay-8 duration-9">
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

          {/* <Lottie 
          animationData = {scrollHint}
          loop = {false}
          play
          className='footer-animation observe fade down delay-25'
          /> */}

          <div className="scrollHint observe fade up delay-25 duration-10">
              <div className="text">SCROLL</div>
              <div className="line"></div>
          </div>

        </div>

      </div>


      <Element className="about-us-page page" id = 'about' name = 'about'>
          
          <div className="pageTitle">
            <div className="pointer observe continous delay-5">
              <div className="inner"></div>
              <div className="outer"></div>
            </div>
            <div className="number observe fade down delay-10">01.</div>
            <div className="title  observe fade down delay-10">ABOUT</div>
            <div className="line  observe fade down delay-10"></div>
          </div>

          <div className="content">

            <div className="verticalLine observe fade delay-15"></div>

            <div className="container">

              <div className="item">

                <div className="pointer observe fade delay-17"></div>

                <div className="info observe fade delay-22">
                    <div className="title">
                      Some information about me...
                    </div>
                    <br></br>
                    <p>
                   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus, dolore ratione maxime rem, veniam quis omnis nemo ducimus pariatur in odit voluptate autem error neque recusandae tenetur illo molestias nobis.
                    </p>
                    <br></br>
                    <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto excepturi illum dolorem ipsum rem fugiat doloribus vero, atque adipisci, possimus placeat et deleniti, at repellendus nesciunt aperiam error fugit deserunt!
                    </p>
                    <br></br>
                  </div>
                </div>

              <div className="item">
                <div className="pointer observe fade delay-17"></div>
                <div className="info observe fade delay-22">
                  <div className="title">Some technologies I'm familiar with...</div>
                  <div className="techStack">
                    <FaHtml5></FaHtml5>
                    <FaReact></FaReact>
                    <div className="break"></div>
                    <FaJs></FaJs>
                    <SiTypescript></SiTypescript>
                    <div className="break"></div>
                    <FaCss3Alt></FaCss3Alt>
                    <FaSass></FaSass>
                    <div className="break"></div>
                    <FaPhp></FaPhp>
                    <FaNodeJs></FaNodeJs>
                    <div className="break"></div>
                    <SiMysql></SiMysql>
                    <SiFirebase></SiFirebase>
                    <div className="break"></div>
                    <SiThreedotjs></SiThreedotjs>
                    <SiVite></SiVite>
                  </div>
                  
                </div>
              </div>

            </div>


          </div>
          

      </Element>

      <Element className="about-us-page page" id = 'about' name = 'projects'>
          
          <div className="pageTitle">
            
            <div className="pointer observe continous delay-5">
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
            
          <div className="pointer observe continous delay-5">
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

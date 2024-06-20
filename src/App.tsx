import { useEffect } from 'react'
import './assets/styles/App.scss'

import Lottie from 'react-lottie-player';
import frame from './assets/animations/frame.json';

import { Link, Element } from 'react-scroll'

import { useForm, ValidationError } from '@formspree/react';


import { FaCss3Alt, FaEye, FaGithub, FaHtml5, FaJs, FaLinkedin, FaNodeJs, FaPhp, FaReact, FaSass} from 'react-icons/fa';
import {GrMail} from 'react-icons/gr'
import {SiFirebase, SiMysql, SiSqlite, SiThreedotjs, SiTypescript, SiVite} from 'react-icons/si'
import {BsArrowUpRight, BsBoxArrowInDownLeft} from 'react-icons/bs';
import initCube from './assets/components/Cube/Cube';
import {RxOpenInNewWindow} from 'react-icons/rx'
import {VscGithub} from 'react-icons/vsc'
import {FiGithub} from 'react-icons/fi'
import addObservers from './assets/scripts/intersection-observers';
import fixVh from './assets/scripts/fixVh';
import ambientBackground from './assets/scripts/ambientBackground';
import initTrailer from './assets/scripts/mouseTrailer';
import pageBreak from './assets/components/Footer';
import PageBreak from './assets/components/Footer';
import Footer from './assets/components/Footer';
import Seperator from './assets/components/Seperator';
import ContactForm from './assets/components/ContactForm/ContactForm';

function App() {

  useEffect(() => {

    // Add a `--vh` variable to account for mobile browsers
    fixVh();

    // Initialise Cube
    let cubeContainer = document.getElementById('cube-container')
    initCube(cubeContainer)

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
    
    let loader = document.getElementById('myVideo');
    setTimeout(() => {
      
      // Add Intersection Observers to elements
      addObservers();
      
      loader?.classList.add('fade');
      loader?.classList.add('down')

      setTimeout(() => {

        // @ts-ignore
        loader.style.display = 'none';
        
      }, 300);

      document.documentElement.style.background = 'transparent';
     
    }, 2000);

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
          <a href = '/resume.pdf' target = '_blank' className="resume observe fade down delay-12">
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
            <div className="sub-title observe fade delay-2">WEB DEVELOPER</div>
            <div className="buttons">

              <a href="https://github.com/Morgs27" target = '_blank' className="button float-hover interactive-surround observe fade delay-6 duration-11">
                <FaGithub></FaGithub>
              </a>
              <a href="https://www.linkedin.com/in/morgan-daniel-9011b7258/" target = '_blank' className="button float-hover interactive-surround observe fade delay-7 duration-10">
                <FaLinkedin></FaLinkedin>
              </a>
              <a href="mailto:morganjdaniel@gmail.com" className="button float-hover interactive-surround observe fade delay-8 duration-9">
               <GrMail></GrMail>
              </a>


            </div>
          </div>

          <div className="cube-container">
            <div className="cube observe fade down delay-20 duration-10" id = 'cube-container' >
            </div>
          </div>

        </div>

        <div className="footer">

          <div className="scrollHint observe fade up delay-25 duration-10">
              <div className="text">SCROLL</div>
              {/* <div className="line"></div> */}
          </div>

          {/* <Seperator number = {1}></Seperator> */}
          <Footer delay={30}></Footer>
        </div>

        

      </div>
        

      <Element className="about-us-page page" id = 'about' name = 'about'>
          
          <div className="pageTitle">
            <div className="pointer observe continous delay-5">
              <div className="inner"></div>
              <div className="outer"></div>
            </div>
            <div className="number observe fade down delay-5">01.</div>
            <div className="title  observe fade down delay-5">ABOUT</div>
            <div className="line  observe fade down delay-5"></div>
          </div>

          <div className="content">

            <div className="verticalLine observe fade"></div>

            <div className="container">

              <div className="item">

                <div className="pointer observe fade delay-5"></div>

                <div className="info observe fade delay-10">
                    <div className="title">
                      Some information about me...
                    </div>
                    <br></br>
                    <p>
                    I'm Morgan Daniel, a self-taught web developer actively pursuing a 
                    degree in Computing Science at The University of Edinburgh.
                    </p>
                    <br></br>
                    <p>
                    My journey into web development began as I sought to improve the 
                    functionality and visual appeal of a website I used frequently. 
                    This sparked my interest in the process of learning various 
                    programming languages and frameworks. 

                    </p>
                    <br></br>
                  </div>
                </div>

              <div className="item">
                <div className="pointer observe fade delay-5"></div>
                <div className="info observe fade delay-10">
                  <div className="title">Some technologies I'm familiar with...</div>
                  <div className="techStack">

                    <div className="pair">
                      <div className = 'techItem interactive-surround' id='html'><FaHtml5  ></FaHtml5></div>
                      <div className = 'techItem interactive-surround' id='react'><FaReact  ></FaReact></div>
                    </div>

                    <div className="pair">
                      <div className = 'techItem' id='js'><FaJs  ></FaJs></div>
                      <div className = 'techItem' id='ts'><SiTypescript  ></SiTypescript></div>
                    </div>

                    <div className="pair">
                      <div className = 'techItem' id='css'><FaCss3Alt  ></FaCss3Alt></div>
                      <div className = 'techItem' id='sass'><FaSass ></FaSass></div>
                    </div>

                    <div className="pair">
                      <div className = 'techItem' id='php'><FaPhp  ></FaPhp></div>
                      <div className = 'techItem' id='node'><FaNodeJs  ></FaNodeJs></div>
                    </div>

                    <div className="pair">
                      <div className = 'techItem' id='sql'><SiMysql  ></SiMysql></div>
                      <div className = 'techItem' id='firebase'><SiFirebase ></SiFirebase></div>
                    </div>

                    <div className="pair">
                      <div className = 'techItem' id='three'><SiThreedotjs  ></SiThreedotjs></div>
                      <div className = 'techItem' id='vite'><SiVite ></SiVite></div>
                    </div>
                    
                  </div>

              
                  
                </div>
              </div>

            </div>


          </div>

      </Element>

      <Footer delay={0}></Footer>

      <Element className="projects-page page" id = 'about' name = 'projects'>
          
          <div className="pageTitle">
            
            <div className="pointer observe continous delay-5">
              <div className="inner"></div>
              <div className="outer"></div>
            </div>
            <div className="number observe fade down delay-10">02.</div>
            <div className="title  observe fade down delay-10">PROJECTS</div>
            <div className="line  observe fade down delay-10"></div>
          </div>
          
          <div className="content">

            <div className="verticalLine observe fade delay-10"></div>

            <div className="container">

              <div className="item">
                <div className="pointer observe fade delay-10"></div>
                <div className="info observe fade delay-12">
                  <div className="project">
                    <div className="featured manager">Featured Project</div>
                    <div className="title">
                      SWGOH Team Manager
                    </div>
                    <div className="links">
                      <a href="https://swgohteammanager.com/use_as_guest.php" target={'_blank'}>
                        Website 
                        <RxOpenInNewWindow></RxOpenInNewWindow>
                        
                      </a>
                      <a href="https://github.com/Morgs27/swgoh-website" target={'_blank'}>Code  <FiGithub></FiGithub>
                     
                      </a>
                    </div>
                    <div className="line"></div>
                    <div className="description">
                      Companion tool for the mobile game 'Star Wars Galaxy of Heroes'. 
                      Use the guest mode to try out the websites features.

                      The back-end is built using PHP with a MySQL database, with the front-end 
                      being comprised of vanilla HTML, CSS and JS. The SWGOH.gg API is used to retrive
                      player date along with a stat calculation API to process the values. 
                    </div>
                   
                    <div className="techStack">
                      <FaHtml5></FaHtml5>
                      <FaCss3Alt></FaCss3Alt>
                      <FaJs></FaJs>
                      <FaPhp></FaPhp>
                      <SiMysql></SiMysql>
                    </div>
                    
                    <div className="display">
                      <img src="./home.PNG" alt="" />
                      <div className="border">
                      </div>
                    </div>


                  </div>
                </div>
                    
              </div>

              <div className="item">
                <div className="pointer observe fade delay-0"></div>
                <div className="info observe fade delay-8">
                  <div className="project">
                    <div className="featured outfit">Featured Project</div>
                    <div className="title">
                      Outfit of Tomorrow
                    </div>
                    <div className="links">
                      <a href="https://outfit-of-tomorrow.com" target={'_blank'}>
                        Website 
                        <RxOpenInNewWindow></RxOpenInNewWindow>
                        
                      </a>
                      {/* <a href="">Code  <FiGithub></FiGithub>
                
                      </a> */}
                    </div>
                    <div className="line"></div>
                    <div className="description">
                      Freelance website built for the company 'Outfit-of-Tomorrow'. 
                      Contains an interactive design desk allowing users to build their 
                      possible outfits with a selection of sustainable products. Uses 
                      the Sanity CMS to store product and blog data, making it easy
                      to maintain. The frontend is built using vanilla HTML, CSS and
                      JS. 

                    </div>
                    <div className="techStack">
                      <FaHtml5 title='HTML'></FaHtml5>
                      <FaCss3Alt></FaCss3Alt>
                      <FaJs></FaJs>
                      <SiFirebase></SiFirebase>
                      <img src="./sanity-logo.png" alt="" />
                    </div>
                    
                    <div className="display">
                      <img src="./desk.PNG" alt="" />
                      <div className="border">
                      </div>
                    </div>
                  </div>
                </div>
                    
              </div>

              <div className="item">
                <div className="pointer observe fade delay-0"></div>
                <div className="info observe fade delay-8">
                  <div className="project">
                    <div className="featured tsp">Featured Project</div>
                    <div className="title">
                      TSP Visualizer
                    </div>
                    <div className="links">
                      <a href="https://tspvisualiser.dev" target={'_blank'}>
                        Website 
                        <RxOpenInNewWindow></RxOpenInNewWindow>
                        
                      </a>
                      <a href="https://github.com/Morgs27/pathfinding-visualizer" target={'_blank'} >Code  <FiGithub></FiGithub>
                     
                      </a>
                    </div>
                    <div className="line"></div>
                    <div className="description">
                      An interactive visualisation of a group of the algorithms 
                      that can be used to solve 'The Traveling Salesman Problem'. 
                      The TSP problem is a well known mathematical optimization problem where the aim 
                      is to find the shortest distance between a set of points. 
                    </div>
                    <div className="techStack">
                      <FaReact></FaReact>
                      <SiTypescript></SiTypescript>
                      <SiVite></SiVite>
                    </div>
                    
                    <div className="display">
                      <img src="./map.PNG" alt="" />
                      {/* <img src="tsp.gif" alt="" /> */}
                      <div className="border">
                      </div>
                    </div>
                  </div>
                </div>
                    
              </div>

              <div className="item">
                <div className="pointer observe fade delay-0"></div>
                <div className="info observe fade delay-8">
                  <div className="project">
                    <div className="featured game">Featured Project</div>
                    <div className="title">
                      Boids Simulation
                    </div>
                    <div className="links">
                      <a href="https://boids.dev" target={'_blank'}>
                        Website 
                        <RxOpenInNewWindow></RxOpenInNewWindow>
                        
                      </a>
                      <a href="https://github.com/Morgs27/boid-simulations" target={'_blank'}>Code  <FiGithub></FiGithub>
                     
                      </a>
                    </div>
                    <div className="line"></div>
                    <div className="description">
                      Interactive visualisation of  a group of boids simulated to behave like animals in flocks or swarms.
                      Play around with the boids's settings to create some stunning visuals.
                    </div>
                    <div className="techStack">
                      {/* <FaReact></FaReact>
                      <SiTypescript></SiTypescript>
                      <FaNodeJs></FaNodeJs>
                      <FaSass></FaSass>
                      <SiVite></SiVite> */}
                      <FaReact></FaReact>
                      <SiTypescript></SiTypescript>
                      <SiVite></SiVite>
                    </div>
                    
                    <div className="display">
                      {/* <video  autoPlay loop src="./boids-short.mp4"></video> */}
                      <img src="./boids-short.gif" alt="" />  
                      <div className="border">
                      </div>
                    </div>
                  </div>
                </div>
                    
            </div>

            </div>

           


      

          </div>

      </Element>

      <Footer delay={0}></Footer>

      <Element className="contact-page page" id = 'about' name = 'contact'>
          
          <div className="pageTitle">
            
          <div className="pointer observe continous delay-5">
              <div className="inner"></div>
              <div className="outer"></div>
            </div>
            <div className="number observe fade down delay-10">03.</div>
            <div className="title  observe fade down delay-10">CONTACT</div>
            <div className="line  observe fade down delay-10"></div>
          </div>

          <div className="content">

            <div className="verticalLine observe fade delay-15"></div>

            <div className="container">

              <div className="item">

                <div className="pointer observe fade delay-17"></div>

                <div className="info observe fade delay-22">
                    <ContactForm></ContactForm>
                </div>
              </div>


            </div>


          </div>

          
          
      {/* <Footer></Footer> */}

      </Element>

      <Footer delay={0}></Footer>
      

    </div>

  )
}

export default App

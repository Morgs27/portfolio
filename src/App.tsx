import { useEffect } from 'react'
import './assets/styles/App.scss'

import Lottie from 'react-lottie-player';
import frame from './assets/animations/frame.json';

import { Link, Element } from 'react-scroll'

import { FaCss3Alt, FaGithub, FaHtml5, FaJs, FaLinkedin, FaNodeJs, FaPhp, FaReact, FaSass} from 'react-icons/fa';
import {GrMail} from 'react-icons/gr'
import {SiFirebase, SiMysql, SiSqlite, SiThreedotjs, SiTypescript, SiVite} from 'react-icons/si'

import initCube from './assets/components/Cube/Cube';

import addObservers from './assets/scripts/intersection-observers';
import fixVh from './assets/scripts/fixVh';
import ambientBackground from './assets/scripts/ambientBackground';
import initTrailer from './assets/scripts/mouseTrailer';
import pageBreak from './assets/components/Footer';
import PageBreak from './assets/components/Footer';
import Footer from './assets/components/Footer';
import Seperator from './assets/components/Seperator';

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

    let loader = document.querySelector('.loader');
    // @ts-ignore
    loader.style.display = 'none';
   
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
            </div>
          </div>

        </div>

        <div className="footer">

          <div className="scrollHint observe fade up delay-25 duration-10">
              <div className="text">SCROLL</div>
              {/* <div className="line"></div> */}
          </div>

          {/* <Seperator number = {1}></Seperator> */}
          <Footer></Footer>
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

                    <div className="pair">
                      <FaHtml5></FaHtml5>
                      <FaReact></FaReact>
                    </div>

                    <div className="pair">
                      <FaJs></FaJs>
                      <SiTypescript></SiTypescript>
                    </div>

                    <div className="pair">
                      <FaCss3Alt></FaCss3Alt>
                      <FaSass></FaSass>
                    </div>

                    <div className="pair">
                      <FaPhp></FaPhp>
                      <FaNodeJs></FaNodeJs>
                    </div>

                    <div className="pair">
                      <SiMysql></SiMysql>
                      <SiFirebase></SiFirebase>
                    </div>

                    <div className="pair">
                      <SiThreedotjs></SiThreedotjs>
                      <SiVite></SiVite>
                    </div>
                    
                  </div>
                  
                </div>
              </div>

            </div>


          </div>

      </Element>

      <Footer></Footer>

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
                    <div className="description">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus alias explicabo, adipisci assumenda rerum beatae eius odit a est dolore quis cumque molestias reiciendis, illum obcaecati! Perspiciatis praesentium nemo vitae.
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
                <div className="info observe fade delay-12">
                  <div className="project">
                    <div className="featured outfit">Featured Project</div>
                    <div className="title">
                      Outfit of Tomorrow
                    </div>
                    <div className="description">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus alias explicabo, adipisci assumenda rerum beatae eius odit a est dolore quis cumque molestias reiciendis, illum obcaecati! Perspiciatis praesentium nemo vitae.
                    </div>
                    <div className="techStack">
                      <FaHtml5></FaHtml5>
                      <FaCss3Alt></FaCss3Alt>
                      <FaJs></FaJs>
                      <SiFirebase></SiFirebase>
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
                    <div className="description">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus alias explicabo, adipisci assumenda rerum beatae eius odit a est dolore quis cumque molestias reiciendis, illum obcaecati! Perspiciatis praesentium nemo vitae.
                    </div>
                    <div className="techStack">
                      <FaReact></FaReact>
                      <SiTypescript></SiTypescript>
                      <SiVite></SiVite>
                    </div>
                    
                    <div className="display">
                      <img src="./map.PNG" alt="" />
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
                      Idle Fish
                    </div>
                    <div className="description">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus alias explicabo, adipisci assumenda rerum beatae eius odit a est dolore quis cumque molestias reiciendis, illum obcaecati! Perspiciatis praesentium nemo vitae.
                    </div>
                    <div className="techStack">
                      <FaReact></FaReact>
                      <SiTypescript></SiTypescript>
                      <FaNodeJs></FaNodeJs>
                      <FaSass></FaSass>
                      <SiVite></SiVite>
                    </div>
                    
                    <div className="display">
                      <img src="./fish.PNG" alt="" />
                      <div className="border">
                      </div>
                    </div>
                  </div>
                </div>
                    
            </div>

            </div>

           


      

          </div>

      </Element>

      <Footer></Footer>

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


            </div>


          </div>

          
          
      {/* <Footer></Footer> */}

      </Element>

      <Footer></Footer>
      

    </div>

  )
}

export default App

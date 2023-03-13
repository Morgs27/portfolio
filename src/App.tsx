import { useState } from 'react'
import './styles/App.scss'

import Lottie from 'react-lottie-player'
import scroll from './scroll.json';

import { FaGithub, FaLinkedin} from 'react-icons/fa';
import {GrMail} from 'react-icons/gr'
import {GiAbstract030} from 'react-icons/gi'

function App() {

  return (
    <div className="App">
      
      <div className="landing-page">

        <div className="header">
          <div className="icon spin-hover">
            <GiAbstract030></GiAbstract030>
          </div>
          <div className="navigation">

            <a href="" className="nav-link strike-hover">
              About
            </a>
            <a href="" className="nav-link strike-hover">
              Projects
            </a>
            <a href="" className="nav-link strike-hover">
              Contact
            </a>

          </div>
        </div>

        <div className="content">

          <div className="text">
            <div className="title">Morgan Daniel</div>
            <div className="sub-title">FULL-STACK DEVELOPER</div>
            <div className="buttons">

              <a href="" className="button float-hover">
                <FaGithub></FaGithub>
              </a>
              <a href="" className="button float-hover">
                <FaLinkedin></FaLinkedin>
              </a>
              <a href="" className="button float-hover">
               <GrMail></GrMail>
              </a>


            </div>
          </div>

          <div className="cube-container">
            <div className="cube"></div>
          </div>

        </div>

        <div className="footer">

          <Lottie 
          animationData = {scroll}
          loop
          play
          className='footer-animation'
          />

        </div>

      </div>
    </div>
  )
}

export default App

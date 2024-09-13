import { useEffect } from "react";
import "./assets/styles/App.scss";
import info from "./config/info";
import { Link, Element } from "react-scroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import initCube from "./assets/components/Cube/Cube";
import addObservers from "./assets/hooks/useIntersectionObservers";
import fixVh from "./assets/hooks/useFixVh";
import ambientBackground from "./assets/hooks/useAmbientBackground";
import Footer from "./assets/components/Footer";
import ContactForm from "./assets/components/ContactForm/ContactForm";
import Project, { ProjectProps } from "./assets/components/Project/Project";
import projects from "./config/projects";
import TechStack from "./assets/components/TechStack/TechStack";

function App() {
  useEffect(() => {
    // Add a `--vh` variable to account for mobile browsers
    fixVh();

    // Initialise Cube
    let cubeContainer = document.getElementById("cube-container");
    initCube(cubeContainer);

    // Add Mouse Trailer
    // const trailer = document.getElementById("trailer");
    // initTrailer(trailer);

    // Initialize Particle Background
    let backgroundCanvas = document.querySelector(
      ".background"
    ) as HTMLCanvasElement;
    backgroundCanvas.width = window.innerWidth;
    backgroundCanvas.height =
      document.getElementsByTagName("body")[0].offsetHeight;
    ambientBackground({ canvas: backgroundCanvas, numberParticles: 100 });

    // Hide Scroll Hint on scroll
    let footer = document.querySelector(".footer");
    let footerText = footer?.querySelector(".text");
    let footerCube = footer?.querySelector(".line") as HTMLElement;
    window.onscroll = (e) => {
      if (window.pageYOffset == 0) {
        footerText?.classList.remove("hide");
      } else {
        footerText?.classList.add("hide");
      }

      if (footerCube) {
        footerCube.style.opacity = "0.6";
        footerCube.style.transform = `rotate(${
          45 + window.pageYOffset / 2
        }deg)`;
      }
    };

    let loader = document.getElementById("myVideo");
    setTimeout(() => {
      // Add Intersection Observers to elements
      addObservers();

      loader?.classList.add("fade");
      loader?.classList.add("down");

      setTimeout(() => {
        (loader as HTMLElement).style.display = "none";
      }, 300);

      document.documentElement.style.background = "transparent";
    }, 2000);
  }, []);

  return (
    <div className="App">
      <canvas className="background"></canvas>

      <div id="trailer">
        <div className="inner"></div>
        <div className="outer"></div>
      </div>

      <div className="landing-page">
        <div className="header">
          <a
            href={info.resume}
            target="_blank"
            className="resume observe fade down delay-12"
          >
            <div className="icon">
              <div className="square1"></div>
              <div className="square2"></div>
            </div>
            <div className="text">RESUME</div>
          </a>

          <div className="navigation">
            <Link
              to="about"
              offset={-40}
              spy={false}
              smooth={true}
              duration={500}
              className="nav-link interactive-surround strike-hover observe fade down delay-12 duration-10"
            >
              ABOUT
            </Link>
            <Link
              to="projects"
              offset={-40}
              spy={false}
              smooth={true}
              duration={500}
              className="nav-link interactive-surround strike-hover observe fade down delay-15 duration-10"
            >
              PROJECTS
            </Link>
            <Link
              to="contact"
              offset={-40}
              spy={false}
              smooth={true}
              duration={500}
              className="nav-link interactive-surround strike-hover observe fade down delay-18 duration-10"
            >
              CONTACT
            </Link>
          </div>
        </div>

        <div className="content">
          <div className="text">
            <div className="title observe fade">{info.name}</div>
            <div className="sub-title observe fade delay-2">{info.title}</div>
            <div className="buttons">
              <a
                href={info.github}
                target="_blank"
                className="button float-hover interactive-surround observe fade delay-6 duration-11"
              >
                <FaGithub></FaGithub>
              </a>
              <a
                href={info.linkedin}
                target="_blank"
                className="button float-hover interactive-surround observe fade delay-7 duration-10"
              >
                <FaLinkedin></FaLinkedin>
              </a>
              <a
                href={`mailto:${info.email}`}
                className="button float-hover interactive-surround observe fade delay-8 duration-9"
              >
                <GrMail></GrMail>
              </a>
            </div>
          </div>

          <div className="cube-container">
            <div
              className="cube observe fade down delay-20 duration-10"
              id="cube-container"
            ></div>
          </div>
        </div>

        <div className="footer">
          <div className="scrollHint observe fade up delay-25 duration-10">
            <div className="text">SCROLL</div>
          </div>

          <Footer delay={30}></Footer>
        </div>
      </div>

      <Element className="about-us-page page" id="about" name="about">
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
                <div className="title">Some information about me...</div>
                <br></br>
                <div dangerouslySetInnerHTML={{ __html: info.description }} />
              </div>
            </div>

            <TechStack></TechStack>
          </div>
        </div>
      </Element>

      <Footer delay={0}></Footer>

      <Element className="projects-page page" id="about" name="projects">
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
            {projects.map((project: ProjectProps) => (
              <Project key={project.name} {...project}></Project>
            ))}
          </div>
        </div>
      </Element>

      <Footer delay={0}></Footer>

      <Element className="contact-page page" id="about" name="contact">
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
  );
}

export default App;

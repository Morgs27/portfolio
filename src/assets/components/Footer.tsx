import { useEffect } from "react"


export default function Footer(){

    useEffect(() => {
      
      const cubes = document.querySelectorAll('.spin-cube');

      let scale = 1;
      let timeout: any;
      let lastScrollY = window.pageYOffset;

      window.addEventListener('scroll', () => {

        const scrollY = window.pageYOffset || document.documentElement.scrollTop;
        const scrollDelta = Math.abs(scrollY - lastScrollY);
        lastScrollY = scrollY;

        // Increase the cube scale based on the scroll speed
        scale += scrollDelta * 0.001;

        if (scale < 1) scale = 1;
        if (scale > 1.3) scale = 1.3;

        cubes.forEach((cube) => {
          // @ts-ignore 
          cube.style.rotate = `${45 + window.pageYOffset / 2}deg`;
          // @ts-ignore 
          // cube.style.boxShadow = `0px 0px ${scale * 2}px 0px rgba(255,255,255,0.05)`;
          // @ts-ignore 
          cube.style.transform = `scale(${scale})`;
        })
            
        clearTimeout(timeout)
        
        timeout = setTimeout(() => {

            scale = 1;

            cubes.forEach((cube) => {
              // @ts-ignore 
              cube.style.transform = `scale(${scale})`;
              // @ts-ignore 
              cube.style.boxShadow = `none`;
            })

        }, 600);


      });

    }, [])
    
  
    return (

      <div className="footer-component observe">
        <div className="spin-cube">
          {/* <div className="cube-outer"></div> */}
        </div>
        <div className="load-covers">
          <div className="load-cover"></div>
          <div className="load-cover right"></div>
        </div>
        <div className="cover"></div>
        <div className="grid"></div>
      </div>
    )
}
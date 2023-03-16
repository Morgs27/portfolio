export default function initTrailer(trailer: HTMLElement | null){

    if(trailer) trailer.style.opacity = '1';

    window.onmousemove = e => {

        if (trailer){
  
          const x = e.clientX - trailer.offsetWidth / 2,
                y = e.clientY - trailer.offsetHeight / 2;
  
          const keyframes = {
            transform : `translate(${x}px, ${y}px)`
          }
  
          trailer.animate(keyframes, {
            duration: 800,
            fill: 'forwards'
          })
  
  
        }
      }
}
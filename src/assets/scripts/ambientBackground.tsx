
type ambientBackgroundProps = {
    canvas: HTMLCanvasElement,
    numberParticles: number
}

type particle = {
    size: number,
    x: number, 
    y: number,
    dx: number, 
    dy: number
}

export default function ambientBackground({canvas, numberParticles} : ambientBackgroundProps){
    
    let ctx = canvas.getContext('2d');

    let height = window.innerHeight;
    let width = window.innerWidth;

    let particles : particle[] | undefined;

    particles = Array(numberParticles).fill(undefined).map(() => {
        return {
            size: 2,
            x: Math.floor(Math.random() * width),
            y: Math.floor(Math.random() * height),
            dx: Math.random() > 0.5? Math.random() * 0.6  : Math.random() * -0.6,
            dy: Math.random() > 0.5? Math.random() * 0.6 : Math.random() * -0.6
 
        }
    })

    function updatePositions(){
        
        particles = particles?.map((particle) => {
            let newX = particle.x + particle.dx;
            let newY = particle.y + particle.dy;

            let newDx = particle.dx;
            let newDy = particle.dy

            if (newX > width || newX < 0){
                newDx = Math.random() > 0.5? Math.random()  : Math.random() * -1;
            }
            if (newY > height || newY < 0){
                newDy = Math.random() > 0.5? Math.random()  : Math.random() * -1;
            }

            return {...particle, x: newX, y: newY, dx: newDx, dy: newDy}
        })


    }


    function plotParticles(){

        particles?.forEach((particle) => {

            if(ctx){

                var grd = ctx.createRadialGradient(particle.x, particle.y, particle.size * 0.2, particle.x, particle.y, particle.size * 2);
                grd.addColorStop(0, "rgba(255,255,255,0.3");
                grd.addColorStop(0.8,"rgba(255,255,255,0.2")
                grd.addColorStop(1, "rgba(255,255,255,0.1");

                ctx.fillStyle = grd;

                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size * 2, 0, 2 * Math.PI);
                ctx.fill();



            }

        })
    }

    console.log(particles);

    function animate(){


        updatePositions()

        ctx?.clearRect(0, 0, width,height);

        plotParticles()

        window.requestAnimationFrame(animate);
    }

    animate()


}
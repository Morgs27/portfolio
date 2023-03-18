
type ambientBackgroundProps = {
    canvas: HTMLCanvasElement,
    numberParticles: number
}

type particle = {
    size: number,
    x: number, 
    y: number,
    dx: number, 
    dy: number,
    history: number[],
    opacity: number
}

export default function ambientBackground({canvas, numberParticles} : ambientBackgroundProps){
    
    let ctx = canvas.getContext('2d');
    let body = document.getElementsByTagName('body')[0]
    let height = body.offsetHeight;
    let width = body.offsetHeight;

    console.log(height);

    let particles : particle[] | undefined;

    particles = Array(numberParticles).fill(undefined).map(() => {
        return {
            size: 1,
            x: Math.floor(Math.random() * width),
            y: window.innerHeight + (Math.random() * height) ,
            dx: 0,
            dy: (-1 * Math.random()) - 0.3,
            history: [],
            opacity: Math.floor(Math.random() * 0.5)
        }
    })

    function updatePositions(){
        
        particles = particles?.map((particle) => {
            let newX = particle.x + particle.dx;
            let newY = particle.y + particle.dy;

            let newDx = particle.dx;
            let newDy = particle.dy

            if (newY < 0){
                newY = height;
            }

            let history = particle.history;
            if (history.length > 20){
                history.shift();
            }
            history.push(particle.x, particle.y)

            return {...particle, x: newX, y: newY, dx: newDx, dy: newDy, history: history}
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
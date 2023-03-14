
export function spCode(){

  let n = noise(getRayDirection() * 2.5 - (time * -0.09));

  function moddy(p, f) {
    let s = p*f
    return (s - floor(s))/f
  }
  
  let seed = shape(() => {

    displace(0, 0, 0)
    sphere(.0075)
    
  })
  
  n = n * .5;
  
  displace(0.09)
  let s = getSpace() + n *.75
  let scale = 0.05
  setSpace(moddy(s, 1/scale) - 0.5*scale)

  // Main Colour
  color(vec3(1, 1, 1));
  
  // Draw Seed
  seed()

}
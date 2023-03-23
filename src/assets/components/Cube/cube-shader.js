
export function spCode(){

  // Noise Function
  let n = noise(getRayDirection() * 2.5 - (time * -0.09))  * .375;

  // Moddy Function
  function moddy(p, f) {
    let s = p*f
    return (s - floor(s))/f
  }
  
  // Rotate with time
  rotateZ(time * 0.1)
  rotateX(time * 0.1)
  rotateY(time * 0.1)

  let s = getSpace() + n 
  let scale = 0.06
  setSpace(moddy(s, 1/scale) - 0.5*scale)

  // Main Colour
  color(vec3(1, 1, 1));
  
  // Draw Sphere
  displace(0, 0, 0)
  sphere(.0075)


}
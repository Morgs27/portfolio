
import { useEffect } from 'react';

export default function Footer({number} : any){

  useEffect(() => {
    console.log(number);
    const wrapper = document.getElementById("tiles" + number);
  
    let columns = 0,
        rows = 0
  
    const createTile = (index:number) => {
      const tile = document.createElement("div");
      
      tile.classList.add("tile");
  
      return tile;
    }
  
    const createTiles = (quantity:number) => {
      Array.from(Array(quantity)).map((tile, index) => {
        wrapper?.appendChild(createTile(index));
      });
    }
  
    const createGrid = () => {
      if (wrapper){
        wrapper.innerHTML = "";
        
        const size = document.body.clientWidth > 800 ? 10 : 10;
        
        columns = Math.floor(document.body.clientWidth / size);
        rows = Math.floor(document.body.clientHeight / size);
        
        wrapper.parentElement?.style.setProperty("--size", size + 'px')
        wrapper.style.setProperty("--columns", columns.toString());
        wrapper.style.setProperty("--rows", rows.toString());
        
        createTiles(columns * rows);
      }
    }
  
    createGrid();
  
    window.onresize = () => createGrid();

  },[])
  
    return (
        <div className="page-break observe fade up seperator">

          <div className="footer-background">
            <div className="cover left"></div>
            <div className="cover right"></div>
            <div className="grid" id = {'tiles' + number}>
              
              
            </div>
          </div>

          <div className="cube-background">
            <div className="top-cover"></div>
          </div>

         
      </div>
    )
}
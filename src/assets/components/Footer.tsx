
import { useEffect } from 'react';

export default function Footer(){

  useEffect(() => {

    const wrapper = document.getElementById("tiles");
  
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
        
        const size = document.body.clientWidth > 800 ? 12 : 10;
        
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
        <div className="page-break observe">

          <div className="footer-background">
            <div className="cover left"></div>
            <div className="cover right"></div>
            <div className="grid" id = 'tiles'>
              
              
            </div>
          </div>

          <div className="cube-background">
            <div className="top-cover"></div>
          </div>

          <div className="inner-cube">
            <span></span>
            <span></span>
          </div>

          <div className="small-cube left outer">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="small-cube left">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="small-cube right">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="small-cube right outer">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>

      </div>
    )
}
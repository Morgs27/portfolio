// Import THREE.js
import * as THREE from 'three';
// @ts-ignore  
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// Import Shader Park
// @ts-ignore  
import { createSculpture } from 'https://unpkg.com/shader-park-core/dist/shader-park-core.esm.js';

// Import Shader Park Code
// @ts-ignore  
import { spCode } from './cube-shader';

export default function initCube(canvasHolder:HTMLElement | null){

    let width = canvasHolder?.offsetWidth;
    let height = canvasHolder?.offsetHeight;

    let scene = new THREE.Scene();
    let params = { time: 0 };

    let camera = new THREE.OrthographicCamera(-2, 2, 2, -2, 0.1, 1000)
    camera.position.z = 0.1;

    let renderer = new THREE.WebGLRenderer({ 
        antialias: true
    });

    renderer.setSize( width?width:0 , height?height:0 );
    renderer.setPixelRatio( 1 );
    renderer.setClearColor( new THREE.Color(1, 1, 1), 0 );

    let canvas = renderer.domElement;

    canvasHolder && (canvasHolder.innerHTML = "");
    canvasHolder?.appendChild( canvas );

    //Shader Park setup
    let mesh = createSculpture(spCode, () => ( {
        time: params.time,
    } ));
    scene.add(mesh);

    // Add orbit controls
    let controls = new OrbitControls( camera, renderer.domElement, {
        enableDamping : true,
        dampingFactor : 0.25,
        zoomSpeed : 0.5,
        rotateSpeed : 0.5
    } );

    // Resize Canvas on window resize
    let onWindowResize = () => {
        renderer.setSize( canvasHolder?.offsetWidth?canvasHolder.offsetWidth:0 , canvasHolder?.offsetHeight?canvasHolder.offsetHeight:0 );
    }
    window.addEventListener( 'resize', onWindowResize );

    // Animation Loop
    let render = () => {
        requestAnimationFrame( render );
        params.time += 0.02;
        controls.update();
        renderer.render( scene, camera );
    };

    render();
}


import logo from './logo.svg';
import './App.css';
import Globe from 'react-globe.gl'
import incon from './incon.json'
import consolas from './consolas.json'
import { useEffect, useRef, useState } from 'react';
import {Link} from 'react-router-dom'

let g = [41.372108, -73.921120, 0]
let h = [29.717394, -95.401833, 0]
let sf = [37.484928, -122.148201, 0]

let labels = [
  {
    lat : 41.372108,
    long :-73.921120,
    label : "NEW YORK",
    color: 'rgba(255, 255, 255, 1)'
  },
  {
    lat : 29.717394,
    long :-95.401833,
    label : "RICE UNIVERSITY",
    color: 'rgba(255, 255, 255, 1)'
  },
  {
    lat : 37.484928,
    long : -122.148201,
    label : "META",
    color: 'rgba(255, 255, 255, 1)'
  }
]

let path = [g,h,sf]

function App() {


  useEffect(() => {
    let header = document.querySelector('#intro');
    let anim = [
        { t: "", ms: 300 },
        { t: "_", ms: 300 },
        { t: "", ms: 300 },
        { t: "_", ms: 300 },
        { t: "K_", ms: 100 },
        { t: "KE_", ms: 100 },
        { t: "KEI_", ms: 100 },
        { t: "KEIF_", ms: 100 },
        { t: "KEIFE_", ms: 100 },
        { t: "KEIFER_", ms: 100 },
        { t: "KEIFER _", ms: 100 },
        { t: "KEIFER C_", ms: 100 },
        { t: "KEIFER CO_", ms: 100 },
        { t: "KEIFER CON_", ms: 100 },
        { t: "KEIFER CONV_", ms: 100 },
        { t: "KEIFER CONVE_", ms: 100 },
        { t: "KEIFER CONVER_", ms: 100 },
        { t: "KEIFER CONVERT_", ms: 100 },
        { t: "KEIFER CONVERTI_", ms: 100 },
        { t: "KEIFER CONVERTIN_", ms: 100 },
        { t: "KEIFER CONVERTINO", ms: 200 },
        { t: "KEIFER CONVERTINO", ms: 200 },
        { t: "KEIFER CONVERTINO", ms: 200 }
    ];
    let stepDenominator = 1;
    if (window.localStorage.stepDenominator)
        stepDenominator = window.localStorage.stepDenominator;

    let i = 0;
    let update = () => {
        let step = anim[i];
        header.innerText = step.t;
        i++;

        if (i < anim.length)
            setTimeout(update, step.ms / stepDenominator);
        else {
            header.classList.add('top');
            setTimeout(() => {
                document.getElementById('main').style.opacity = 1;
            }, 500);
            window.localStorage.stepDenominator = 1.5;
        }
    }
    update();
  }, [])

  const globeEl = useRef();

  useEffect(() => {
    globeEl.current.controls().autoRotate = true;
    globeEl.current.controls().autoRotateSpeed = 1;
    // globeEl.current.controls().enabled = false;
    globeEl.current.controls().object.position.x = -200;
    globeEl.current.controls().object.position.y = 150;
    globeEl.current.controls().object.position.z = 100;
    globeEl.current.controls().enableZoom = false;
  })


  return (
    <div className="App">
      
        <h1 className='intro' id="intro">

        </h1>
        
        <div className='main' id= 'main'>
          <h3>
            Hello! I am a 22 year old developer currently working for Meta in San Francisco.<br></br> 
            Check out my <Link to='/experience' className='experience'>Experience<span style= {{backgroundColor:"rgb(90, 90, 90)"}}className='underline'></span> </Link> or even my <Link  to='/photos' className='photos'>Photography <span style= {{backgroundColor:"rgb(90, 90, 90)"}}className='underline'></span> </Link>!
            {/*, <Link  to='/projects' className='projects'>Projects <span style= {{backgroundColor:"rgb(0, 126, 158)"}}className='underline'></span> </Link>,  */}
          </h3>
          <h4 className='contact'>
            <a className= 'info' href="mailto: keiferconvertino@gmail.com">Email</a>, <a className= 'info' href="https://www.linkedin.com/in/keifer-convertino/">Linkedin</a>, <a className= 'info' href = "https://github.com/keiferconvertino">GitHub</a>
            </h4>
          <div className = "globe">
            <Globe
              ref={globeEl}
              height={window.innerHeight/2}
              backgroundColor="rgba(0,0,0,0)"
              showAtmosphere={false}
              globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
              bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
              pointsData={labels}
              pointLat={d => d.lat}
              pointLng={d => d.long}
              pointAltitude={d=>.05}
              pointRadius={0.225}
              pointColor={d => d.color}
              labelsData={labels}
              labelLat={d => d.lat}
              labelLng={d => d.long}
              labelText={d => d.label}
              labelSize={d => 2.0}
              labelDotRadius={d => 0}
              labelColor={d => d.color}
              labelResolution={2}
              labelTypeFace={consolas}
              labelAltitude={d => .05}
              pathsData= {[path]}
              pathStroke={2.5}
              pathColor={() => ['rgba(255, 255, 255, 0.2)', 'rgba(255, 255, 255, 0.2)']}
              pathDashLength={0.02}
              pathDashGap={0.03}
              pathDashAnimateTime={25000}
              >
              </Globe>
          </div>
         
          
        </div>
    </div>
  );
}

export default App;

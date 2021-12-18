
import { useEffect, useRef, useState } from 'react';

function Photos() {

    useEffect(() => {
        let header = document.querySelector('#top-p');
        // header.classList.add('topPhoto');
        let anim = [
            { t: "", ms: 300 },
            { t: "_", ms: 300 },
            { t: "", ms: 300 },
            { t: "_", ms: 300 },
            { t: "P_", ms: 100 },
            { t: "PH_", ms: 100 },
            { t: "PHO_", ms: 100 },
            { t: "PHOT_", ms: 100 },
            { t: "PHOTO_", ms: 100 },
            { t: "PHOTOG_", ms: 100 },
            { t: "PHOTOGR_", ms: 100 },
            { t: "PHOTOGRA_", ms: 100 },
            { t: "PHOTOGRAP_", ms: 100 },
            { t: "PHOTOGRAPH_", ms: 100 },
            { t: "PHOTOGRAPHY_", ms: 200 },
            { t: "PHOTOGRAPHY", ms: 200 },
            { t: "PHOTOGRAPHY_", ms: 300 },
            { t: "PHOTOGRAPHY", ms: 300 },
        ];
        let stepDenominator = 1.75;
        let i = 0;
        let update = () => {
            let step = anim[i];
            header.innerText = step.t;
            i++;
    
            if (i < anim.length)
                setTimeout(update, step.ms / stepDenominator);
            else {
                
                setTimeout(() => {
                    document.getElementById('main').style.opacity = 1;
                }, 500);
            }
        }
        update();
      })



    return (
        <div>
            <h1 className='top-p' id="top-p">
            </h1>
            <div className='main' id= 'main'>
                
          </div>
        </div>
    )

}

export default Photos;

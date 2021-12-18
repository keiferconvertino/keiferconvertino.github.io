import {Link} from 'react-router-dom'
import { useEffect, useRef, useState } from 'react';


const images = ['soccer', 'zach2',  'scratches', 'jn3', 'andy', 'angel', 'bike', 'blur', 'blur2', 'door', 'eth', 'jackson',
'jn', 'jn2',  'kite', 'pond', 'ross2', 'ross1',  'skyspace', 
'snow', 'streetLight', 'trees', 'zach']
const photo_path = '/images/'


function Photos() {

    const [imgIndex, setImgIndex] = useState(0)



    function changeImg() {
        document.getElementById('imgContainer').classList.remove('loaded')

        document.getElementById('imgCarousel').classList.add('fadeOut')
        setTimeout(() => {
            setImgIndex((imgIndex + 1) % images.length)
            document.getElementById('imgCarousel').classList.remove('fadeOut')
             document.getElementById('imgContainer').classList.add('loaded')

        }, 500)

        
    }

    function changeImgKey(e) {
        if (e.repeat ) {
            return
        }
        let change = 0
        if (e.key == "ArrowLeft") {
            change = -1
        } else if (e.key == "ArrowRight") {
            change = 1
        } else {
            return
        }
        document.getElementById('imgContainer').classList.remove('loaded')

        document.getElementById('imgCarousel').classList.add('fadeOut')
        let imIndex = parseInt(document.getElementById('carouselText').innerText.split(' ')[0]) - 1
        setTimeout(() => {
            let newIndex = imIndex + change
            if (newIndex == -1) {
                newIndex = images.length - 1
            }
            console.log(newIndex % images.length)
            setImgIndex(newIndex % images.length)
            document.getElementById('imgCarousel').classList.remove('fadeOut')
             document.getElementById('imgContainer').classList.add('loaded')

        }, 500)
    }

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
                document.addEventListener('keydown', changeImgKey)
                
                setTimeout(() => {
                    document.getElementById('main-pic').style.opacity = 1;
                    document.getElementById('imgContainer').classList.add('loaded')

                }, 500);
            }
        }
        update();
    }, [])


    

    return (
        <div>
            <Link className = "back" to='/'>back</Link>
            <h1 className='top-p' id="top-p">
            </h1>
            <div className='main-pic' id= 'main-pic'>
                <div id = "carousel" onClick = {changeImg}  className = "carousel">
                    <div id = "imgContainer"className = 'imgContainer'>
                        <img id = "imgCarousel" className = 'imgCarousel' src = {photo_path + images[imgIndex] + '.jpg'}></img>
                    </div>
                    <div id = "carouselText" className = "carouselText">{imgIndex+1} / {images.length}</div>
                </div>
          </div>
        </div>
    )

}

export default Photos;
  
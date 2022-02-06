import {Link} from 'react-router-dom'
import { useEffect, useRef, useState } from 'react';


const images = ['soccer', 'zach2',  'scratches', 'jn3', 'andy', 'angel', 'bike', 'blur', 'blur2', 'door', 'eth', 'jackson',
'jn', 'jn2',  'kite', 'pond', 'ross2',  'skyspace', 
'snow', 'streetLight', 'trees', 'zach']
const images2 = ['1', '2',  '3', '5', '6', '7', '8', '9', '10', '11', '12','13','14','15','16','17','18']
const photo_path = '/images/'


function Photos() {

    const [imgIndex, setImgIndex] = useState(0)
    const [imgs, setImgs] = useState(images)
    const [imgYear, setImgYear] = useState(2021)

    function changeImgYear(year) {
        document.getElementById('imgCarousel').classList.add('fadeOut')
        document.getElementById('imgContainer').classList.remove('loaded')
        if (year == 0) {
            setImgs(images)
        } else {
            setImgs(images2)
        }
        setImgIndex(0)
        document.getElementById('imgCarousel').classList.remove('fadeOut')
            setTimeout(() => {
                document.getElementById('imgContainer').classList.add('loaded')
                
            }, 300);
    }

    function changeImg(dir) {
        document.getElementById('imgContainer').classList.remove('loaded')

        document.getElementById('imgCarousel').classList.add('fadeOut')
        setTimeout(() => {
            let imIndex = parseInt(document.getElementById('carouselText').innerText.split(' ')[1]) - 1
            let imLength = parseInt(document.getElementById('carouselText').innerText.split(' ')[3])
            
            let newIndex = imIndex + dir
            if (newIndex == -1) {
                newIndex = imLength
            }
            setImgIndex(newIndex % imLength)
            document.getElementById('imgCarousel').classList.remove('fadeOut')
            setTimeout(() => {
                document.getElementById('imgContainer').classList.add('loaded')
                
            }, 300);
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

        document.getElementById('imgCarousel').classList.add('fadeOut')
        document.getElementById('imgContainer').classList.remove('loaded')
        let imIndex = parseInt(document.getElementById('carouselText').innerText.split(' ')[1]) - 1
        setTimeout(() => {
            let newIndex = imIndex + change
            let imLength = parseInt(document.getElementById('carouselText').innerText.split(' ')[3])

            if (newIndex == -1) {
                newIndex = imLength - 1
            }
            setImgIndex(newIndex % imLength)
            document.getElementById('imgCarousel').classList.remove('fadeOut')
            setTimeout(() => {
                document.getElementById('imgContainer').classList.add('loaded')
            }, 300);
            console.log(newIndex % imLength)

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
            { t: "PHOTOGRAPHY", ms: 200 }
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

                    setTimeout(() => {
                        document.getElementById('imgContainer').classList.add('loaded')
                    }, 400);

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
            <div className = "photoSelect">
                {imgYear == 2021 && (
                    <div style = {{display:'flex'}}>
                        <div className='photoYear2021' style ={{fontWeight: 'bold'}} onClick = {()=>changeImgYear(0)}>2021</div>
                        <div className = "photoYear2022" onClick = {()=>changeImgYear(1)}>2022</div>
                    </div>
                    )
                }
                {imgYear == 2022 && (
                    <div style = {{display:'flex'}}>
                        <div className='photoYear2021'  onClick = {()=>changeImgYear(0)}>2021</div>
                        <div className = "photoYear2022" style ={{fontWeight: 'bold'}} onClick = {()=>changeImgYear(1)}>2022</div>
                    </div>
                    )
                }
                
            </div>
                <div id = "carousel"  className = "carousel">
                    <div id = "imgContainer" onClick = {()=>changeImg(1)}className = 'imgContainer'>
                        <img id = "imgCarousel" className = 'imgCarousel' src = {photo_path + imgs[imgIndex] + '.jpg'}></img>
                    </div>
                    <div id = "carouselText" className = "carouselText"><span onClick = {() => changeImg(-1)} id ="leftArrow">{'< '}</span> {imgIndex+1} / {imgs.length} <span onClick = {() => changeImg(1)} id ="rightArrow">{' >'}</span></div>
                </div>
          </div>
        </div>
    )

}

export default Photos;
  
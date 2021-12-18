import {Link} from 'react-router-dom'
import { useEffect, useRef, useState } from 'react';




function Experience() {

    function animateWords(string, id, next) {
        let target = document.querySelector('#' +id);
        let i = 0;
        let update = () => {
            let step = string.substring(0,i);
            target.innerText = step + '_';
            i++;
    
            if (i < string.length + 1)
                setTimeout(update, 10);
            else {
                target.innerText = step;
                if (next != null) {
                    next()
                }
            }
        }
        update();

    }

    useEffect(() => {
        let header = document.querySelector('#top-p');
        // header.classList.add('topPhoto');
        let anim = [
            { t: "", ms: 300 },
            { t: "_", ms: 300 },
            { t: "", ms: 300 },
            { t: "_", ms: 300 },
            { t: "E_", ms: 100 },
            { t: "EX_", ms: 100 },
            { t: "EXP_", ms: 100 },
            { t: "EXPE_", ms: 100 },
            { t: "EXPER_", ms: 100 },
            { t: "EXPERI_", ms: 100 },
            { t: "EXPERIE_", ms: 100 },
            { t: "EXPERIEN_", ms: 100 },
            { t: "EXPERIENC_", ms: 100 },
            { t: "EXPERIENCE_", ms: 100 },
            { t: "EXPERIENCE", ms: 200 },
            { t: "EXPERIENCE_", ms: 300 },
            { t: "EXPERIENCE", ms: 300 },
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
                    document.getElementById('main-exp').style.opacity = 1;
                    animateWords('Rice University', 'educationHeader', () =>
                    animateWords('Houston, TX', 'htx',() => 
                    animateWords('B.A. in Computer Science', 'major', () => 
                    animateWords('2018 - 2022', 'eduYear', () => 
                    animateWords('3.91 GPA', 'gpa', () =>
                    animateWords('Meta', 'metaHeader', () =>
                    animateWords('Menlo Park, CA', 'metaLoc', () =>
                    animateWords('Software Engineer (EC3)', 'metaTitle', () =>
                    animateWords('August 2022 - Current', 'metaYear', () =>
                    animateWords('Incoming', 'metaInfo1', () =>
                    animateWords('Indeed', 'indeedHeader', () =>
                    animateWords('Austin, TX', 'indeedLoc', () =>
                    animateWords('Software Developer Intern', 'indeedTitle', () =>
                    animateWords('May 2021 - August 2021', 'indeedYear', () =>
                    animateWords('Leveraged Apache Kafka in Java to develop a service for consuming, processing, and publishing application outcome logs in real time.', 'indeedInfo1', () =>
                    animateWords('Designed a pipeline on top of this service that reduced the latency of internal datasets from 3 hours to 10-30 minutes.', 'indeedInfo2', () =>
                    animateWords('Tightrope Interactive', 'tightropeHeader', () =>
                    animateWords('Cold Spring, NY', 'tightropeLoc', () =>
                    animateWords('Software Engineer Intern', 'tightropeTitle', () =>
                    animateWords('May 2019 - August 2020', 'tightropeYear', () =>
                    animateWords('Researched and implemented a Thompson Sampling algorithm in Python that automated the distribution of web traffic towards landing pages for company products, entirely freeing the hours spent each week manually adjusting traffic rates.', 'tightropeInfo1', () =>
                    animateWords('Developed a REST API with Flask responsible for servicing this algorithm across company systems.', 'tightropeInfo2', () =>
                    animateWords('Increased the accuracy of revenue projections by over 20% by replacing old predictive models with a machine learning solution using XGBoost models on AWS Sagemaker.', 'tightropeInfo3', () =>
                    animateWords('Overhauled content management system with a Git-based static site generator workflow using Gatsby & React, allowing the creation of fast static sites that can use shared modular components.', 'tightropeInfo4', )))))))))))))))))
                    )))))))
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
            <div className='main-exp' id= 'main-exp'>
                <div className = 'experienceContent'>
                    <div className='education' id = 'education'>
                        <h3 id = 'educationHeader'>Education</h3>
                        <ul className='dashed'>
                            <li style ={{fontWeight:'bold'}}id='htx'></li>
                            <li style ={{fontWeight:'bold'}}id='major'></li>
                            <li style ={{fontWeight:'bold'}}id='eduYear'></li>
                            <li style ={{fontWeight:'bold'}}id='gpa'></li>
                        </ul>
                    </div>
                    <div className='meta' id = 'meta'>
                        <h3 id = 'metaHeader'>Current Job</h3>
                        <ul className='dashed'>
                            <li style ={{fontWeight:'bold'}}id='metaLoc'></li>
                            <li style ={{fontWeight:'bold'}}id='metaTitle'></li>
                            <li style ={{fontWeight:'bold'}}id='metaYear'></li>
                            <li id='metaInfo1'></li>
                        </ul>
                    </div>

                    <div className='indeed' id = 'indeed'>
                        <h3 id = 'indeedHeader'>Previous Job</h3>
                        <ul className='dashed'>
                            <li style ={{fontWeight:'bold'}}id='indeedLoc'></li>
                            <li style ={{fontWeight:'bold'}}id='indeedTitle'></li>
                            <li style ={{fontWeight:'bold'}}id='indeedYear'></li>
                            <li id='indeedInfo1'></li>
                            <li id='indeedInfo2'></li>
                        </ul>
                    </div>

                    <div className='tightrope' id = 'tightrope'>
                        <h3 id = 'tightropeHeader'>Previous Job</h3>
                        <ul className='dashed'>
                            <li style ={{fontWeight:'bold'}}id='tightropeLoc'></li>
                            <li style ={{fontWeight:'bold'}}id='tightropeTitle'></li>
                            <li style ={{fontWeight:'bold'}}id='tightropeYear'></li>
                            <li id='tightropeInfo1'></li>
                            <li id='tightropeInfo2'></li>
                            <li id='tightropeInfo3'></li>
                            <li id='tightropeInfo4'></li>

                        </ul>
                    </div>
                </div>
                
                
            </div>
        </div>
    )

}

export default Experience;
  
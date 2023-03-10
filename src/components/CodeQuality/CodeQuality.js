import React from 'react'
import Header from '../Header/Header';
import './CodeQuality.css';
const CodeQuality = () => {
    return (
        <div  >
            <Header />
            <div className='EntireContainer' >
                <div className='CodeContainer'>
                    <div className='svgHolder'>
                        <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' width={300} />
                    </div>
                    <div className='detailsHolder'>
                        <div className='CodeEnhance' >Enhance Your Workflow with Continous Code Quality & Code Security </div>
                        <div className='CodeEnjoy' > Our mission is to empower developers first, and grow an open commuinity around code quality and code security</div>
                        <div><button  >View Reports</button></div>
                    </div>

                </div>
                <div className='CodeStandards' >
                    <div className='codeDetails'>
                        <div>Find all the Code Standards here</div>
                        <div className='bold' >Learn & Grow</div>
                    </div>
                    <div className='cardHolder'>
                        <div>
                            <img src='./python.png' />
                            <span>Python</span>
                        </div>
                        <div>
                            <img src='./java.png' />
                            <span>Java</span>
                        </div><div>
                            <img src='./node.png' />
                            <span>Node Js</span>
                        </div><div>
                            <img src='./flutter.png' />
                            <span>Flutter</span>
                        </div><div>
                            <img src='./react.png' />
                            <span>ReactJS</span>
                        </div>
                        <div>
                            <img src='./angular.png' />
                            <span>Angular</span>
                        </div>
                    </div>
                </div>
                <div className='box3'>
                    <div>
                        <div className='Enhance' >Trouble Setting Up ? </div>
                        <div className='Enjoy' > Boot a fresh environment in milliseconds</div>
                    </div>
                    <div>
                        <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' width={400} />
                    </div>
                </div>
                <div className='CodeStandards' >
                    <div className='codeDetails'>
                        <div>Get your YAMYL files here</div>
                        <div className='bold' >Learn & Grow</div>
                    </div>
                    <div className='cardHolder'>
                        <div>
                            <img src='./python.png' />
                            <span>Python</span>
                        </div>
                        <div>
                            <img src='./java.png' />
                            <span>Java</span>
                        </div><div>
                            <img src='./node.png' />
                            <span>Node Js</span>
                        </div><div>
                            <img src='./flutter.png' />
                            <span>Flutter</span>
                        </div><div>
                            <img src='./react.png' />
                            <span>ReactJS</span>
                        </div>
                        <div>
                            <img src='./angular.png' />
                            <span>Angular</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CodeQuality

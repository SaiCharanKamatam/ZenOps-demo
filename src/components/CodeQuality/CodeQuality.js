import React from 'react'
import Header from '../Header/Header';
import styles from './CodeQuality.module.css';
const CodeQuality = () => {
    return (
        <div  >
            <Header />
            <div className={styles.EntireContainer} >
                <div className={styles.CodeContainer}>
                    <div className={styles.svgHolder}>
                        <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' width={300} />
                    </div>
                    <div className={styles.detailsHolder}>
                        <div className={styles.CodeEnhance} >Enhance Your Workflow with Continous Code Quality & Code Security </div>
                        <div className={styles.CodeEnjoy} > Our mission is to empower developers first, and grow an open commuinity around code quality and code security</div>
                        <div><button  >View Reports</button></div>
                    </div>

                </div>
                <div className={styles.CodeStandards} >
                    <div className={styles.codeDetails}>
                        <div>Find all the Code Standards here</div>
                        <div className={styles.bold} >Learn & Grow</div>
                    </div>
                    <div className={styles.cardHolder}>
                        <div>
                           <a href='a.txt'  download={true}>
                             <img src='./python.png' />
                            <span>Python</span>
                           </a>
                        </div>
                        <div>
                           <a href='a.txt'  download={true}>
                            <img src='./java.png' />
                            <span>Java</span>
                           </a>

                        </div><div>
                           <a href='a.txt'  download={true}>

                            <img src='./node.png' />
                            <span>Node Js</span>
                           </a>

                        </div><div>
                           <a href='a.txt'  download={true}>

                            <img src='./flutter.png' />
                            <span>Flutter</span>
                           </a>

                        </div><div>
                           <a href='a.txt'  download={true}>

                            <img src='./react.png' />
                            <span>ReactJS</span>
                           </a>

                        </div>
                        <div>
                           <a href='a.txt'  download={true}>

                            <img src='./angular.png' />
                            <span>Angular</span>
                           </a>

                        </div>
                    </div>
                </div>
                <div className={styles.box3}>
                    <div>
                        <div className={styles.Enhance} >Trouble Setting Up ? </div>
                        <div className={styles.Enjoy} > Boot a fresh environment in milliseconds</div>
                    </div>
                    <div>
                        <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' width={400} />
                    </div>
                </div>
                <div className={styles.CodeStandards} >
                    <div className={styles.codeDetails}>
                        <div>Get your YAMYL files here</div>
                        <div className={styles.bold} >Learn & Grow</div>
                    </div>
                    <div className={styles.cardHolder}>
                        <div>
                           <a href='a.txt'  download={true}>
                             <img src='./python.png' />
                            <span>Python</span>
                           </a>
                        </div>
                        <div>
                           <a href='a.txt'  download={true}>
                            <img src='./java.png' />
                            <span>Java</span>
                           </a>

                        </div><div>
                           <a href='a.txt'  download={true}>

                            <img src='./node.png' />
                            <span>Node Js</span>
                           </a>

                        </div><div>
                           <a href='a.txt'  download={true}>

                            <img src='./flutter.png' />
                            <span>Flutter</span>
                           </a>

                        </div><div>
                           <a href='a.txt'  download={true}>

                            <img src='./react.png' />
                            <span>ReactJS</span>
                           </a>

                        </div>
                        <div>
                           <a href='a.txt'  download={true}>

                            <img src='./angular.png' />
                            <span>Angular</span>
                           </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CodeQuality

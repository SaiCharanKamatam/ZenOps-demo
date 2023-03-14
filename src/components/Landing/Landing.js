import React from 'react'
import Header from "../Header/Header"
import styles from "./Landing.module.css";
import { register } from 'swiper/element/bundle';
import 'swiper/element/css/autoplay'
// register Swiper custom elements
register();
const Landing = () => {
    return (
        <div className={styles.box1}>
            <Header />
            <div className={styles.LandingContainer}>
                <swiper-container loop={true} slides-per-view="1" speed={500}
                    scrollbar="true" autoplay="true" observer= "true"
                >
                    <swiper-slide>
                        <div>
                            <div className={styles.Enhance} >Enhance Your Application's Scalability and Security </div>
                            <div className={styles.Enjoy} >Enjoy our range of tools and services to help you quickly deploy. configure, and manage your applications. Enjoy enhanced scalability, cost savings, and customer success stories when you use our service</div>
                        </div>
                        <div>
                            <iframe src="./animation.svg" width="400" height="400"
                                frameBorder="0"
                            ></iframe>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div>
                            <div className={styles.Enhance} >Enhance Your Application's Scalability and Security </div>
                            <div className={styles.Enjoy} >Enjoy our range of tools and services to help you quickly deploy. configure, and manage your applications. Enjoy enhanced scalability, cost savings, and customer success stories when you use our service</div>
                        </div>
                        <div>
                            <iframe src="./animation.svg" width="400" height="400"
                                frameBorder="0"
                            ></iframe>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div>
                            <div className={styles.Enhance} >Enhance Your Application's Scalability and Security </div>
                            <div className={styles.Enjoy} >Enjoy our range of tools and services to help you quickly deploy. configure, and manage your applications. Enjoy enhanced scalability, cost savings, and customer success stories when you use our service</div>
                        </div>
                        <div>
                            <iframe src="./animation.svg" width="400" height="400"
                                frameBorder="0"
                            ></iframe>
                        </div>
                    </swiper-slide>
                </swiper-container>

            </div>
        </div>
    )
}

export default Landing

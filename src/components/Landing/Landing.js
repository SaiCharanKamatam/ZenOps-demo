import React from 'react'
import Header from "../Header/Header"
import "./Landing.css"
const Landing = () => {
    return (
        <div className='c'>
            <Header />
            <div className='LandingContainer'>
                <div>
                    <div className='Enhance' >Enhance Your Application's Scalability and Security </div>
                    <div className='Enjoy' >Enjoy our range of tools and services to help you quickly deploy. configure, and manage your applications. Enjoy enhanced scalability, cost savings, and customer success stories when you use our service</div>
                </div>
                <div>
                    <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' width={400}/>
                    {/* <svg xmlns='illustratuion.svg' /> */}
                </div>
            </div>
        </div>
    )
}

export default Landing

import React from 'react'
import "./Content.css"
const Content = () => {
  return (
    <div className='ContentConatiner'>
         <div className='title' >ZenX-The place to manage all your projects</div>
         <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?Lorem, ipsum dolor sit amet consectetur adipisicing elit.
         </div>
         <div className='detailsContainer' >
            <div className='details1'>
              <span>Project Status</span>
              <span>Operating System</span>
              <span>Application</span>
              <span>Database</span>
            </div>
            <div className='details2'>
              <span>Ongoing</span>
             <span className='flex_space'> <span>Ubuntu</span><span className='bg_green'>Good</span></span>
             <span className='flex_space'> <span >Health API</span> <span className='bg_green' >Good</span></span>
              <span>Azure</span>
            </div> 
         </div>

    </div>
  )
}

export default Content

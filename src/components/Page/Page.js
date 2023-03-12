import React from 'react'
import CardComp from "../Card-Comp/CardComp"
import Content from "../Content/Content.js"
import Chart from "../Chart/Chart"
import "./Page.css"
const Page = () => {
  return (
    <div className='PageContainer'>
       <div className='upperContainer'>
           <Content/>
           <Chart/>
       </div>
       <div className='lowerContainer'>
            <CardComp/>
       </div>
    </div>
  )
}

export default Page

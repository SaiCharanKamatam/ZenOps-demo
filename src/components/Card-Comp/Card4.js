import React from 'react'
import "./Card1.css"
import {Line} from "react-chartjs-2"
import 'chart.js/auto';
const Card4 = () => {
  return (
    <div className='Container'>
        <Line 
        data={
          {
            
            labels : ["Jan","Feb","Mar","April","May","June"],
            datasets : [
              
              {
                backgroundColor: 'rgba(44,217,197)',
                fill: true,
                label : "details",
                data : [43,19,93,16,66,22]
              }
            ]
          }
        }
        options = {
        
          {
            maintainAspectRatio : false
          }
        }
        height={200} 
        width={200}
        />
    </div>
  )
}

export default Card4


import React from 'react'
import "./Card1.css"
import {Bar} from "react-chartjs-2"
import 'chart.js/auto';

const Card1 = () => {
  return (
    <div className='Container2'>
        <Bar 
        data={
          {
            
            labels : ["Jan","Feb","Mar","April","May"],
            datasets : [
              {
                label : "details",
                borderRadius : 14,
                barThickness : 18,
                inflateAmount : -1,
                data : [22,34,67,43,72]
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

export default Card1

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
            
            labels : ["Jan","Feb","Mar","April","June"],
            datasets : [
              {
                backgroundColor : "rgba(130,106,249)",
                borderRadius : 13,
                inflateAmount : -1,
                barThickness : 18,
                label : "details",
                data : [22,34,11,26,42]
              }
            ]
          }
        }
        options = {
        
          {
            indexAxis: 'y' ,
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

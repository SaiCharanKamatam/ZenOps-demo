import React from 'react'
import CardComp from "../Card-Comp/CardComp"
import Content from "../Content/Content.js"
import Chart from "../Chart/Chart"
import styles from  "./Page.module.css"
import Header from "../Header/Header"
const Page = () => {
  return (
    <div>
      <Header />
      <div className={styles.PageContainer}>
       <div className={styles.upperContainer}>
           <Content/>
           <Chart/>
       </div>
       <div className={styles.lowerContainer}>
            <CardComp/>
       </div>
    </div>
    </div>
  )
}

export default Page

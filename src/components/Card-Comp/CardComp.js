import React from 'react'
import Card1 from "../Card-Comp/Card1"
import Card2 from "../Card-Comp/Card2"
import Card4 from "../Card-Comp/Card4"
import styles from "./CardComp.module.css"
const CardComp = () => {
  return (
    <div className={styles.CardContainer}>
      <Card1/>
      <Card2/> 
      <Card4/>
      <Card2/> 
    </div>
  )
}

export default CardComp

import React from 'react'
import styles from "./Content.module.css"
const Content = () => {
  return (
    <div className={styles.ContentConatiner}>
      <div className={styles.title} ><span>Zensight </span> <span className={styles.arrow} >&#8250;</span>   
      <span>SonarQube</span>
       </div>
      <div className={styles.bold}> SonarQube </div>
      <div className={styles.detailsContainer} >
        <div className={styles.details1}>
          <span>Operating System</span>
          <span>Application</span>
          <span>Database</span>
        </div>
        <div className={styles.details2}>
          <span className={styles.flex_space}> <span>Ubuntu</span><span className={styles.bg_green}>Good</span></span>
          <span className={styles.flex_space}> <span >Health API</span> <span className={styles.bg_green} >Good</span></span>
          <span>Azure</span>
        </div>
      </div>

    </div>
  )
}

export default Content

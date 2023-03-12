import React from 'react'
import 'react-circular-progressbar/dist/styles.css';
import styles from "../Chart/Chart.module.css"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { Link } from 'react-router-dom';

const Chart = () => {
  const percentage = 80;
  let color = "#6fa700"
  if(percentage>70){
      color = "red"
  }

  return (
    <div className={styles.ContainerLeft}>
      <div className={styles.links}>
        <Link to='//www.google.com'  target={"_blank"}>GitHub</Link>
        <Link to='//www.google.com'  target={"_blank"}>Grafana</Link>

      </div>
    <div className={styles.ChartContainer}>
      <div className={styles.chart1}>
      <span className={styles.a}>CPU Busy</span>
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          styles={buildStyles({
            rotation: 0,
            strokeLinecap: 'round',
            textSize: '18px',
            pathTransitionDuration: 0.8,
            pathColor:  color,
            textColor: '#6fa700',
            trailColor: '#d6d6d6',
            backgroundColor: '#3e98c7',
          })}
        />
      </div>
      <div className={styles.chart1}>
        <span className={styles.a}>RAM Used</span>
        <CircularProgressbar
          value={percentage-41}
          text={`${percentage-41}%`}
          styles={buildStyles({
            rotation: 0,
            strokeLinecap: 'round',
            textSize: '18px',
            pathTransitionDuration: 0.8,
            pathColor: "#6fa700",
            textColor: '#6fa700',
            trailColor: '#d6d6d6',
            backgroundColor: '#3e98c7',
          })}
        />
      </div>
      <div className={styles.chart1}>
      <span className={styles.a}>Root FS Used</span>
        <CircularProgressbar
          value={10}
          text={`${"NaN"}`}
          styles={buildStyles({
            rotation: 0,
            strokeLinecap: 'round',
            textSize: '18px',
            pathTransitionDuration: 0.8,
            pathColor: "#f58219",
            textColor: '#f58219',
            trailColor: '#d6d6d6',
            backgroundColor: '#3e98c7',
          })}
        />
      </div>
    </div>
    </div>
  )
}

export default Chart

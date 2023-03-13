import React from 'react'
import styles from "./Zensight.module.css"
import Header from '../Header/Header'
import Page from '../Page/Page'

const Zensight = () => {
    return (
        <div>
            {true ?
             <>
            <Header />
            <div className={styles.EntireContainer2} >
                <div className={styles.CodeContainer2}>
                    <div className={styles.svgHolder2}>
                    <iframe src="./animation4.svg" width="450" height="450"  
                      frameBorder="0"
                    ></iframe>
                    </div>
                    <div className={styles.detailsHolder2}>
                        <div className={styles.monitoring} >Get Ahead With Automated Monitoring and Alerting</div>
                        <div className={styles.metric} >  Monitor your applications in real time with Prometheus and Grafana for keeping an eye on performance metrics and take immediate action </div>
                    </div>
                </div>
                <div className={styles.tablebg} >
                    <div className={styles.bold}>Find all the applications and servers here</div>
                    <div>
                        <table>
                            <thead>
                                <tr  >
                                    <th>S.No:</th>
                                    <th colSpan={2}>Server</th>
                                    <th>Health</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td  colSpan={2} >SonarCube</td>
                                    <td>Passed</td>
                                    <td>Running</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td colSpan={2} >Zenx</td>
                                    <td>Passed</td>
                                    <td>Running</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td colSpan={2} >SonarCube</td>
                                    <td>Failed</td>
                                    <td>Running</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td colSpan={2}>Kube</td>
                                    <td>Passed</td>
                                    <td>Stopped</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td colSpan={2}>Fernandez</td>
                                    <td>Passed</td>
                                    <td>Running</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td colSpan={2}>SonarCube</td>
                                    <td>Passed</td>
                                    <td>Running</td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td colSpan={2}>Zenx</td>
                                    <td>Passed</td>
                                    <td>Running</td>
                                </tr><tr>
                                    <td>8</td>
                                    <td colSpan={2}>SonarCube</td>
                                    <td>Failed</td>
                                    <td>Running</td>
                                </tr>
                                <tr>
                                    <td>9</td>
                                    <td colSpan={2}>Zenx</td>
                                    <td>Passed</td>
                                    <td>Running</td>
                                </tr>
                                <tr>
                                    <td>10</td>
                                    <td colSpan={2}>SonarCube</td>
                                    <td>Failed</td>
                                    <td>Running</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            </>: <Page/>}
        </div>
    )
}

export default Zensight

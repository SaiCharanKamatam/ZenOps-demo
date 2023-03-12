import React from 'react'
import "./Zensight.css"
import Header from '../Header/Header'
const Zensight = () => {
    return (
        <div>
            <Header />
            <div className='EntireContainer2' >
                <div className='CodeContainer2'>
                    <div className='svgHolder2'>
                        <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' />
                    </div>
                    <div className='detailsHolder2'>
                        <div className='monitoring' >Get Ahead With Automated Monitoring and Alerting</div>
                        <div className='metric' >  Monitor your applications in real time with Prometheus and Grafana for keeping an eye on performance metrics and take immediate action </div>
                    </div>
                </div>
                <div className='tablebg' >
                    <div className='bold'>Find all the applications and servers here</div>
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
        </div>
    )
}

export default Zensight

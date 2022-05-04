import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import DateCountdown from 'react-date-countdown-timer';
import Squirrel from './squirrel.png'
import Heart from './heart.png'
import Chick from './chick.png'

// function App() {
//   return (
//       <div className="App">
//         <h1>London flight countdown</h1>
//         {/*<DateCountdown dateTo='February 23, 2022 07:10:00 GMT+02:00' callback={()=>alert('im flying lol')}  />;*/}
//         <p>lol</p>
//         <div>
//           <img src={Chick} style={{"width":"200px"}}/>
//           <img src={Heart} style={{"width":"200px"}}/>
//           <img src={Squirrel} style={{"width":"200px"}}/>
//         </div>
//       </div>
//   )
// }
//
// export default App

import {Component} from 'react';
import Clock from "./Clock";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { deadline: "May, 11, 2022 07:00" };
    }
    render() {
        return (
            <div className="App">
                <h1>London flight countdown</h1>
                <div className="container">
                    <Clock deadline={this.state.deadline} />
                </div>


                <div>
                     <img src={Chick} style={{"width":"30vw"}}/>
                     <img src={Heart} style={{"width":"30vw"}}/>
                     <img src={Squirrel} style={{"width":"30vw"}}/>
                </div>
            </div>
        );
    }
}
export default App;

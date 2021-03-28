import React from 'react'
import './App.css';
import SUP from './superman.png'

function App() {
  return (
    <div id="main">
        <div id='box1'>

        </div>
        <div id='box2'>
            <div id="text">
                  HOPE<br/>
                  NEVER<br/>
                  DIES .
            </div>
        </div>
        <div id="box3">
             <div id="container">
                  <div id="logo">
                     <img src={SUP} alt="logo"></img>
                  </div>
                  <div id="menu">
                     <ul>
                       <li>HOME</li>
                       <li>SYNOPSIS</li>
                       <li>CASTS</li>
                       <li>GALLERY</li>
                       <li>SHOP</li>
                     </ul>
                  </div>
             </div>
        </div>
    </div>
  )
}

export default App;

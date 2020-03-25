import React, { Component } from 'react';
import './loader.css';

export default class Loader extends Component {
 render() { 
     return (
         <div className="container">
             <div className="loader loader-3">
                 <div className="dot dot1"></div>
                 <div className="dot dot2"></div>
                 <div className="dot dot3"></div>
             </div>
             </div>
     )
  }
 }
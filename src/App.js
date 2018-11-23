import React, { Component } from 'react';
import DataPiece from './components/datapiece';
import DataPiece2 from './components/DataPiece2';
import DataPiece3 from './components/DataPiece3';
import DataPiece4 from './components/DataPiece4';

import MapContainer from './components/MapContainer';
import './App.css';

class App extends Component {

  
  
  state = {
    number: 0,
    dataisShown: false
  }


incrementButton = () => {
  let currentValue = this.state.number;
  currentValue++;
  this.setState(prevState=>({
    number: currentValue,
    dataisShown: !prevState.dataisShown
  }))
}

  render() {
    return (
   
    <div className="container">
    <h1 className="text-center margin-bottom">Title of App </h1>
    <div class="control-group">
          <div className="container">
          <div className="row">  
          <div className="col">        
          <DataPiece2/>
          </div>
          <div className="col">        
          <DataPiece3/>
          </div>
          <div className="col">        
          <DataPiece4/>
          </div>
          <div className="col">        
          <MapContainer/>
          </div>
            </div>
            </div>
            </div>
            </div>
    );
 
  }
 
}

export default App;

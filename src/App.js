import React, { Component } from 'react';
import TextNode from './components/TextNode';
import DataPiece2 from './components/DataPiece2';
import SmileyForm from './components/SmileyForm';
import Analysis from './components/Analysis';
import axios from 'axios';

import './App.css';

class App extends Component {

  
  
  state = {
    number: 0,
    dataisShown: false,
    formHasBeenSubmitted: false
  }


incrementButton = () => {
  let currentValue = this.state.number;
  currentValue++;
  this.setState(prevState=>({
    number: currentValue,
    dataisShown: !prevState.dataisShown
  }))
}
  incrementButton = () => {
    let isnumber = this.state.number;
    isnumber++;
    this.setState({
      number: isnumber
    })
  }

  onComplete = () =>{
    this.setState({
      formHasBeenSubmitted: true
    })
  }

 

  render() {
    return (
   
    <div className="container">
    <h1 className="text-center margin-bottom">Mechelininkatu</h1>
    <div className="custom">
    <div class="control-group">
    {!this.state.formHasBeenSubmitted ? (
      <div>
       <SmileyForm onComplete={this.onComplete}/>
       </div>
    ):( <Analysis/>)}
            </div>
            </div>
            </div>
          
    );

  }
 
}

export default App;

import React, { Component } from 'react';
import SmileyForm from './components/SmileyForm';
import Analysis from './components/Analysis';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import axios from 'axios';
import CurrentSituation from './components/currentSituation'

import './App.css';

class App extends Component {

  
  
  state = {
    number: 0,
    dataisShown: false,
    formHasBeenSubmitted: false,
    selectHasBeenMade: false,
    feedBackClicked: false
  }




  onComplete = () =>{
    this.setState({
      formHasBeenSubmitted: true
    })
  }

  handleSelect = (event) =>{
    console.log(event.target.value)
  }
 
feedBack = () => {
  this.setState({
    feedBackClicked: true
  })
}

  render() {
    return (
   
    <div className="container">
    <div className="custom">
      
    <div className="text-center">
      <h1 className="text-center margin-bottom">Mechelininkatu</h1>
    {!this.state.feedBackClicked ? (
      <div>
        <h2 className="text-center margin-bottom margin-top">Projektin tila nyt</h2>
            <CurrentSituation />
        <h3 className="text-center margin-bottom margin-top"> Miten meillä menee? Anna palautetta! </h3>
  <img onClick={this.feedBack}className="commentImage" src="/comment.jpg"></img></div>):(
    null
  )}
  </div>
    {this.state.feedBackClicked ? (
      <div>
    {!this.state.formHasBeenSubmitted ? (
      <div>
       <SmileyForm onComplete={this.onComplete}/>
       </div>
    ):( <Analysis/>)} </div>):( null) }
            </div>
            </div>
            
          
    );

  }
 
}

export default App;

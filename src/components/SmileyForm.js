import React, { Component } from 'react'
import {POST_REVIEW} from '../env/amazonurls'
import axios from 'axios';

export default class SmileyForm extends Component {
    state = {
        question1: 0,
        question2: 0,
        question3: 0,
        question4: "",
        value: "",
        question1answered: false,
        question2answered: false
    }

    handleQuestion1 = (value) => {
        this.setState({
            question1: value,
            question1answered: true
        })
    }

    handleQuestion2  = (value) => {
    
        this.setState({
            question2: value,
            question2answered: true
        })
    }

    handleQuestion3  = (value) => {
      
        this.setState({
            question3: value,
            question3answered: true
        })
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    sendForm = () => {
        axios.post(POST_REVIEW, {
            question1: this.state.question1,
            question2: this.state.question2,
            question3: this.state.question3,
            question4: this.state.value}).then(
            this.props.onComplete())
        }
    

  render() {
    return (
      <div class="text-center">
       {!this.state.question1answered ? (
           <div>
           <h3>Liikenteestä?</h3>
          <div className="row">
          <div className="col">
          <img src="/angryface.jpg" onClick={() => {this.handleQuestion1(0)}}></img>
          </div>
          <div className="col">
          <img src="/mediumface.jpg"  onClick={() => {this.handleQuestion1(1)}}></img>
          </div>
          <div className="col">
          <img src="/happyface.jpg"  onClick={() => {this.handleQuestion1(2)}}></img>
         </div>
          </div>
       </div> ):(null)}
        {this.state.question1answered && !this.state.question2answered? (
            <div>
             <h3>Melusta?</h3>
         <div className="row">
         <div className="col">
          <img src="/angryface.jpg" onClick={() => {this.handleQuestion2(0)}}></img>
          </div>
          <div className="col">
          <img src="/mediumface.jpg"onClick={() => {this.handleQuestion2(1)}}></img>
          </div>
          <div className="col">
          <img src="/happyface.jpg" onClick={() => {this.handleQuestion2(2)}}></img>
         </div>
          </div>
          </div>
    ):(null)}
     {this.state.question2answered && !this.state.question3answered? (
            <div>
             <h3>Turvallisuudesta</h3>
         <div className="row">
         <div className="col">
          <img src="/angryface.jpg" onClick={() => {this.handleQuestion3(0)}}></img>
          </div>
          <div className="col">
          <img src="/mediumface.jpg" onClick={() => {this.handleQuestion3(1)}}></img>
          </div>
          <div className="col">
          <img src="/happyface.jpg" onClick={() => {this.handleQuestion3(2)}}></img>
         </div>
          </div>
          </div>
    ):(null)}
      {this.state.question3answered ? (
            <div>
             <h3>Tarkka osoite, johon palaute liittyy</h3>
             <div className="text-center">
             <div className="form-group">
             <form>
                <input type="text" value={this.state.value} onChange={this.handleChange.bind(this)} className="form-control" id="exampleTextarea" rows="3"></input>
             </form>
             <div className="text-center">
             <button className="btn btn-primary" onClick={this.sendForm}>Send</button>
             </div>
    </div>
    </div>
          </div>
    ):(null)}
    </div>
    )}
}

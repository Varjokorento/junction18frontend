import React, { Component } from 'react'

export default class DataPiece4 extends Component {
    state={
        isExtraInfoShown:false
    }

  showExtraInfo = () =>{
      this.setState(prevState=>({
          isExtraInfoShown: !prevState.isExtraInfoShown
      }))
  }  
  render() {
    return (
      <div>
        <h1>View3</h1>
        <p>Stuff is happeniiing!</p>
        <button className="btn btn-primary" onClick={this.showExtraInfo}>Click me</button>
        {this.state.isExtraInfoShown ? (
            <p>Extra info</p>
        ):(null)}
      </div>
    )
  }
}

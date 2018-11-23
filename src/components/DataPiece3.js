import React, { Component } from 'react'

export default class DataPiece3 extends Component {

    state= {
        isExtraInfoShown: false
    }
    
  showExtraInfo = () =>{
      this.setState(prevState=>({
          isExtraInfoShown: !prevState.isExtraInfoShown
      }))
  }  



  render() {
    return (
      <div>
        <h1>View2</h1>
        <hr/>
        <p>You know stuff</p>
        <button className="btn btn-primary" onClick={this.showExtraInfo}>Click me</button>
        {this.state.isExtraInfoShown ? (
            <p>Extra info</p>
        ):(null)}
      </div>
    )
  }
}

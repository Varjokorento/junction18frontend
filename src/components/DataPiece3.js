import React, { Component } from 'react'
import RenderComponent from './rendercomponent';

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
        <button className="btn btn-primary" onClick={this.showExtraInfo}>Click me</button>
        {this.state.isExtraInfoShown ? (
           <RenderComponent/>
        ):(null)}
      </div>
    )
  }
}

import React, { Component } from 'react'
import axios from 'axios'

export default class DataPiece2 extends Component {

state= {
        isExtraInfoShown: false,
        userId: null
}

  showExtraInfo = () =>{
      this.setState(prevState=>({
          isExtraInfoShown: !prevState.isExtraInfoShown
      }))
  }
  
  fetchData = () => {
    var randomNumberBetween0and19 = Math.floor(Math.random() * 20);
      try {
          return axios.get('https://jsonplaceholder.typicode.com/todos/' + randomNumberBetween0and19)
      } catch(error) {
          console.log(error);
      }
  }

  fetchInfo = () => {
      this.fetchData().then(
          res => {
              this.setState({
                  userId: res.data.id
              })
          }
      )
  }

  render() {
    return (
      <div>
        <h1>View1</h1>
        <p>{this.state.userId}</p>
        <button className="btn btn-primary" onClick={this.fetchInfo}>Click me</button>
          {this.state.isExtraInfoShown ? (
            <p>Extra info</p>
        ):(null)}
      </div>
    )
  }
}

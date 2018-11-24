import React, { Component } from 'react'
import {GET_NEWS} from '../env/amazonurls'
import axios from 'axios'

export default class DataPiece2 extends Component {

state= {
        isExtraInfoShown: false,
        userId: null,
        newsArticles: []
}

  showExtraInfo = () =>{
      this.setState(prevState=>({
          isExtraInfoShown: !prevState.isExtraInfoShown
      }))
  }

  componentDidMount() {
      this.fetchInfo();
  }
  
  fetchData = () => {
    var randomNumberBetween0and19 = Math.floor(Math.random() * 20);
      try {
          return axios.get(GET_NEWS)
      } catch(error) {
          console.log(error);
      }
  }



  fetchInfo = () => {
      this.fetchData().then(
          res => {
              this.setState({
                  newsArticles: res.data
              })
          }
      )
  }

  render() {

    
    const listItems = this.state.newsArticles.map(function(data, idx) {
        return ([
            <h3 className="text-center" key={idx}>{data.title}</h3>,
            <p className="text-center" key={idx}>{data.text}</p>,
            <p className="text-center" key={idx}>{data.url}</p>
        ]);
    });

    return (
      <div>
        <h2 className="text-center">Mitä media kirjottaa</h2>
        <p>{this.state.userId}</p>
        <div className="container">
        {listItems}
        </div>
        <div className="text-center">
        <h2 className="text-center">Mitä kansa on mieltä</h2>
        </div>
          {this.state.isExtraInfoShown ? (
            <p>Extra info</p>
        ):(null)}
      </div>
    )
  }
}

import React, { Component } from 'react'
import {GET_AVERAGE1, GET_AVERAGE2, GET_AVERAGE3} from '../env/amazonurls';
import axios from 'axios'

export default class Analysis extends Component {

    state = {
        customerReviews: [],
        averageQuestio1: 0,
        averageQuestion2: 0,
        averageQuestion3: 0,
        questionOneLoaded: false,
        questionTwoLoaded: false,
        questionThreeLoaded: false
    }

  componentDidMount() { 

    this.getAverage();
    this.getAverage2();
    this.getAverage3();
  }  

 /* fetchData = () => {
    var randomNumberBetween0and19 = Math.floor(Math.random() * 20);
      try {
          return axios.get('https://flwcpxjoxc.execute-api.us-east-1.amazonaws.com/dev/getAverage1')
      } catch(error) {
          console.log(error);
      }
  }*/



  getAverage = () => {
      this.fetchData().then(
          res => {
              console.log(res.data[0].average)
            this.setState({
                averageQuestio1: res.data[0].average,
                questionOneLoaded: true
            })
          }
      )
  }

    
  fetchData = () => {
      try {
          return axios.get(GET_AVERAGE1)
      } catch(error) {
          console.log(error);
      }
  }

    
  fetchData2 = () => {
    try {
        return axios.get(GET_AVERAGE2)
    } catch(error) {
        console.log(error);
    }
}

fetchData3 = () => {
    try {
        return axios.get(GET_AVERAGE3)
    } catch(error) {
        console.log(error);
    }
}

getAverage3 = () => {
    this.fetchData3().then(
        res => {
            console.log(res.data[0].average)
          this.setState({
              averageQuestion3: res.data[0].average,
              questionThreeLoaded: true
          })
        }
    )
}


  getAverage2 = () => {
      this.fetchData2().then(
          res => {
              console.log(res.data[0].average)
            this.setState({
                averageQuestion2: res.data[0].average,
                questionTwoLoaded: true
            })
          }
      )
  }

  getBack = () =>{
      window.location.reload();
  }

  render() {
    const analysisNode = this.state.customerReviews.map(function(data, idx) {
        return ([
            <div className="card">
            <div className="card-body">
            <h5 className="card-title">Arvostelu</h5>
            <p className="card-text" key={idx}> {data.question1} </p>
            <p className="card-text" key={idx}> {data.question2} </p>
            <p className="card-text" key={idx}> {data.question3} </p>
            <p className="card-text" key={idx}> {data.question4} </p>
            </div>
            </div>
        ]);
    });

    return (
      <div className="text-center">
         <h1 className="text-center">Analysis</h1>
      {this.state.questionOneLoaded && this.state.questionTwoLoaded && this.state.questionThreeLoaded ? (
    <div>
        <p>Liikenteestä?</p>
        <p>{this.state.averageQuestio1}</p>
        <p>Melusta?</p>
        <p>{this.state.averageQuestion2}</p>
        <p>Turvallisuudesta?</p>
        <p>{this.state.averageQuestion3}</p>
        <h2>Kiitos palautteesta!</h2>
        <div className="text-center">
        <img className="staraImg" src="/starat.jpg" onClick={() => {this.getBack()}}></img>
        </div>
        <div className="text-center">
        <img src="https://www.sttinfo.fi/data/images/00001/8ea409dc-a4cb-493d-9217-3997706d0cfd.jpg"></img>
        </div>
        </div>):(<div className="text-center"><div className="loader"></div></div>)}
      </div> 
    )
  }
}

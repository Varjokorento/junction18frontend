import React, { Component } from 'react'
import {GET_AVERAGE1, GET_AVERAGE2, GET_AVERAGE3} from '../env/amazonurls';
import BarChart from './barChart';
import MyBarChart from './MyBarChart';
import axios from 'axios'

export default class Analysis extends Component {

    state = {
        customerReviews: [],
        averageQuestio1: 0,
        averageQuestion2: 0,
        averageQuestion3: 0,
        questionOneLoaded: false,
        questionTwoLoaded: false,
        questionThreeLoaded: false,
        amountOfZerosInQuestion1: 0,
        amountOfOnesInQuestion1: 0,
        amountOfTwosInQuestion1: 0,
        amountOfZerosInQuestion2: 0,
        amountOfOnesInQuestion2: 0,
        amountOfTwosInQuestion2: 0,
        amountOfZerosInQuestion3: 0,
        amountOfOnesInQuestion3: 0,
        amountOfTwosInQuestion3: 0

    }

  componentDidMount() { 
    this.getAverage();
    this.getAverage2();
    this.getAverage3();
    this.visualiseIt();
  }  



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

  mapTheValues = (data) => {
      let zeroesInQuestion1 = 0;
      let onesInQuestion1 = 0;
      let twosInQuestion1 = 0;

      let zeroesInQuestion2 = 0;
      let onesInQuestion2 = 0;
      let twosInQuestion2 = 0;

      let zeroesInQuestion3 = 0;
      let onesInQuestion3 = 0;
      let twosInQuestion3 = 0;


    for(var i =0; i < data.length; i++) {

        switch(data[i].question1) {
            case 0:
                zeroesInQuestion1++;
                break;
            case 1:
                onesInQuestion1++;
                break;
            default:
                twosInQuestion1++;
                break;

        }
    }

    
    for(var i =0; i < data.length; i++) {

        switch(data[i].question2) {
            case 0:
                zeroesInQuestion2++;
                break;
            case 1:
                onesInQuestion2++;
                break;
            default:
                twosInQuestion2++;
                break;

        }
    }

    
    for(var i =0; i < data.length; i++) {

        switch(data[i].question3) {
            case 0:
                zeroesInQuestion3++;
                break;
            case 1:
                onesInQuestion3++;
                break;
            default:
                twosInQuestion3++;
                break;

        }
    }
        this.setState({
            amountOfZerosInQuestion1: zeroesInQuestion1,
            amountOfOnesInQuestion1: onesInQuestion1,
            amountOfTwosInQuestion1: twosInQuestion1,

            amountOfZerosInQuestion2: zeroesInQuestion2,
            amountOfOnesInQuestion2: onesInQuestion2,
            amountOfTwosInQuestion2: twosInQuestion2,

            amountOfZerosInQuestion3: zeroesInQuestion3,
            amountOfOnesInQuestion3: onesInQuestion3,
            amountOfTwosInQuestion3: twosInQuestion3
        })
        
    }
  
  visualiseIt = () => {
      this.getReviews().then(res => {
         this.mapTheValues(res.data);
      })
  }

  getReviews = () => {
      try {
   return  axios.get("https://flwcpxjoxc.execute-api.us-east-1.amazonaws.com/dev/getReview")
    } catch(error) {
    }
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
        <div className="text-center">
        <MyBarChart amountOfZeros={this.state.amountOfZerosInQuestion1} amountOfOnes={this.state.amountOfOnesInQuestion1} amountOfTwos={this.state.amountOfTwosInQuestion1}/>
        </div>
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

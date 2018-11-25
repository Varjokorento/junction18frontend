import React, { Component } from 'react'
import {GET_AVERAGE1, GET_AVERAGE2, GET_AVERAGE3} from '../env2/amazonurls';
import BarChart from './barChart';
import MyBarChart from './MyBarChart';
import NewBarChart from './NewBarChart';
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


    let liikenneFiilikset;
    if(this.state.averageQuestio1 < 0.5) {
    liikenneFiilikset = <img className="carImg" src="/angryCar.jpg"></img>}
    else if(this.state.averageQuestio1 >= 0.5 && this.state.averageQuestio1 < 1.1) {
        liikenneFiilikset = <img className="carImg2" src="/mediumCar.jpg"></img>
    } else {
        liikenneFiilikset = <img className="carImg2" src="/happyCar.jpg"></img>
    }

    
    let liikenneTeksti;
    if(this.state.averageQuestio1 < 0.5) {
        liikenneTeksti = <p>Asukkaiden mielestä liikenne on aivan tukossa!</p>
      }
    else if(this.state.averageQuestio1 >= 0.5 && this.state.averageQuestio1 < 1.1) {
        liikenneTeksti = <p>Asukkaiden mielestä liikenne sujuu jotenkuten</p>
    } else {
        liikenneTeksti =  <p>Asukkaiden mielestä järjestelyt eivät haittaa liikennettä</p>
    }


    let polyFiilikset;
    if(this.state.averageQuestion2 < 0.5) {
    polyFiilikset = <img className="staraImg4" src="/unHappyPollution.jpg"></img>} 
    else if(this.state.averageQuestion2 >= 0.5 && this.state.averageQuestion2 < 1.1) {
        polyFiilikset = <img className="staraImg4" src="/mediumPollution.jpg"></img>
    } else {
        polyFiilikset = <img className="staraImg4" src="/happyPeople.jpg"></img>
    }


    
    let polyTeksti;
    if(this.state.averageQuestion2 < 0.5) {
        polyTeksti = <p>Asukkaiden mielestä ilmanlaatu on surkea!</p>
      }
    else if(this.state.averageQuestion2 >= 0.5 && this.state.averageQuestion2 < 1.1) {
        polyTeksti = <p>Asukkaiden mielestä ilmanlaatu on kohtalainen</p>
    } else {
       polyTeksti =  <p>Asukkaiden mielestä ilmanlaatu on hyvä</p>
    }

    
    let meluFiilikset;
    if(this.state.averageQuestion3 < 0.5) {
    meluFiilikset = <img className="staraImg4" src="/unhappyNoise.jpg"></img>} 
    else if(this.state.averageQuestion3 >= 0.5 && this.state.averageQuestion3 < 1.1) {
        meluFiilikset = <img className="staraImg4" src="/mediumNoise.jpg"></img>
    } else {
        meluFiilikset = <img className="staraImg4" src="/happyPeople.jpg"></img>
    }

    let meluTeksti;
    if(this.state.averageQuestion3 < 0.5) {
        meluTeksti = <p>Asukkaiden mielestä meteli on kauhea!</p>
      }
    else if(this.state.averageQuestion3 >= 0.5 && this.state.averageQuestion3 < 1.1) {
        meluTeksti = <p>Asukkaiden mielestä melu on siedettävä</p>
    } else {
       meluTeksti =  <p>Asukkaiden mielestä melua ei ole juuri lainkaan</p>
    }


    let averageQuestion =<h4> {Number((this.state.averageQuestio1).toFixed(1))} </h4>;
    
    let averageQuestion2 = <h4>{Number((this.state.averageQuestion2).toFixed(1))}</h4>;
    
    let averageQuestion3 =<h4> {Number((this.state.averageQuestion3).toFixed(1))}</h4>;

    return (
      <div className="text-center">
         <h1 className="text-center">Yleinen mielipide</h1>
      {this.state.questionOneLoaded && this.state.questionTwoLoaded && this.state.questionThreeLoaded ? (
    <div>
        <h4>Liikenteestä?</h4>
        {liikenneFiilikset}
        {liikenneTeksti}
        <p> Keskiarvo vastauksista (asteikko 0 -2) </p>
        {averageQuestion}
        <h4>Melusta?</h4>
        {meluFiilikset}
        {meluTeksti}
        <p> Keskiarvo vastauksista (asteikko 0 -2) </p>
        {averageQuestion2}
        <h4>Ilmanlaadusta?</h4>
        {polyFiilikset}
        {polyTeksti}
        <p> Keskiarvo vastauksista (asteikko 0 -2) </p>
       {averageQuestion3}
        <div className="text-center">

        <NewBarChart 
        amountOfZeros={this.state.amountOfZerosInQuestion1} 
        amountOfOnes={this.state.amountOfOnesInQuestion1} 
        amountOfTwos={this.state.amountOfTwosInQuestion1}
        
        amountOfZeros2={this.state.amountOfZerosInQuestion2} 
        amountOfOnes2={this.state.amountOfOnesInQuestion2} 
        amountOfTwos2={this.state.amountOfTwosInQuestion2}

        amountOfZeros3={this.state.amountOfZerosInQuestion3} 
        amountOfOnes3={this.state.amountOfOnesInQuestion3} 
        amountOfTwos3={this.state.amountOfTwosInQuestion3}
        />

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

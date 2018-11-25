import React from 'react';
import BarChart from 'react-bar-chart';


const data = [
  {text: 'Man', value: 500}, 
  {text: 'Woman', value: 300} 
];
 
const margin = {top: 20, right: 20, bottom: 30, left: 40};


export default class NewBarChart extends React.Component {

    state = {
        width: 300 
    }
     

  render() {


    let amountOfZeros = this.props.amountOfZeros
    let amountOfOnes = this.props.amountOfOnes
    let amountOfTwos = this.props.amountOfTwos;
 

    let amountOfZeros2 = this.props.amountOfZeros2
    let amountOfOnes2 = this.props.amountOfOnes2
    let amountOfTwos2 = this.props.amountOfTwos2;

    let amountOfZeros3 = this.props.amountOfZeros3
    let amountOfOnes3 = this.props.amountOfOnes3
    let amountOfTwos3 = this.props.amountOfTwos3;

    const data = [
        {text: 'Unhappy', value: amountOfZeros}, 
        {text: 'Medium', value: amountOfOnes},
        {text: 'Happy', value: amountOfTwos} 
      ];

    const data2 = [
        {text: 'Unhappy', value: amountOfZeros2}, 
        {text: 'Medium', value: amountOfOnes2},
        {text: 'Happy', value: amountOfTwos2} 
    ]

    const data3 = [
        {text: 'Unhappy', value: amountOfZeros3}, 
        {text: 'Medium', value: amountOfOnes3},
        {text: 'Happy', value: amountOfTwos3} 
    ]



    
       
    return (
      <div className="text-center">
      <div className="row">
      <div className="col">
            <div style={{width: '50%'}}> 
                <BarChart ylabel='Vastauksia'
                  width={this.state.width}
                  height={500}
                  margin={margin}
                  data={data}
                  onBarClick={this.handleBarClick}/>
                  <p>Melu</p>
            </div>
            </div>
            <div className="col">
            <div style={{width: '50%'}}> 
                <BarChart ylabel='Vastauksia'
                  width={this.state.width}
                  height={500}
                  margin={margin}
                  data={data2}
                  onBarClick={this.handleBarClick}/>
                  <p>Liikenne</p> 
            </div>
            </div>
            <div className="col">
            <div style={{width: '50%'}}> 
                <BarChart ylabel='Vastauksia'
                  width={this.state.width}
                  height={500}
                  margin={margin}
                  data={data3}
                  onBarClick={this.handleBarClick}/>
                <p>Turvallisuus</p> 
            </div>
            </div>
            </div>
      </div>
    )
  }
}



 

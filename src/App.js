import React, { Component } from 'react';
import DataPiece from './components/datapiece';
import './App.css';

class App extends Component {

  
  
  state = {
    number: 0,
    dataisShown: false
  }


incrementButton = () => {
  let currentValue = this.state.number;
  currentValue++;
  this.setState(prevState=>({
    number: currentValue,
    dataisShown: !prevState.dataisShown
  }))
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
         <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p>Hello world!></p>
          <ul>
            <p>{this.state.number}</p>
            <li>Here data1</li>
            <li>Here data2</li>
            {this.state.dataisShown ? (
              <DataPiece/>
            ):(
              null
            )}
            <button onClick={this.incrementButton}>Click me</button>
          </ul>
        </header>
      </div>
    );
  }
}

export default App;

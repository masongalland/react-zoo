import React, { Component } from 'react';
import Species from './components/Species'
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      species: [
        'Grizzly Bear',
        'Humpback Whale',
        'Elephant',
        'Bald Eagle'
      ]
    };
    
  }
  


  render() {

    const speciesArray = this.state.species.map((name, i) => {
      return <Species key={i} name = {name} />
    })



    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        {speciesArray}


        <div>
          <input />
          <button>Add Species</button>
        </div>


      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Species from './components/Species'
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      species: [
        {
          name: 'Grizzly Bear',
          status: 'Hungry'
        },
        {
          name: 'Humpback Whale',
          status: 'Hungry'
        },
        {
          name: 'Elephant',
          status: 'Hungry'
        },
        {
          name: 'Bald Eagle',
          status: 'Hungry'
        }
      ],
      newSpecies: {
          name: '',
          status: 'Hungry'
        }
    };

    this.handleChange = this.handleChange.bind(this);
    this.addSpecies = this.addSpecies.bind(this);
    this.feedSpecies = this.feedSpecies.bind(this);
    
  }

  handleChange(event) {
    this.setState( { newSpecies: { name: event.target.value} } );
  }

  addSpecies() {
    const newSpecies = {
          name: this.state.newSpecies.name,
          status: 'Hungry'
        }

    this.setState({ species: [...this.state.species, newSpecies] });
    // this.setState({ newSpecies: '' });
  }
  feedSpecies(name){
    const species = this.state.species;

    for(let i = 0; i < species.length; i++){
      if(species[i].name === name) {
        species[i].status = 'Happy';
      }
    }
    this.setState({
      species: species
    });
  }
  


  render() {

    const speciesArray = this.state.species.map((species, i) => {
      return <Species 
                key={i} 
                name = {species.name} 
                status = {species.status} 
                action={this.feedSpecies}
              />
    })



    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

        {speciesArray}

        <div>
          <input onChange={ this.handleChange } value={this.state.newSpecies.name}/>
          <button onClick={ this.addSpecies }>Add Species</button>
        </div>


      </div>
    );
  }
}

export default App;

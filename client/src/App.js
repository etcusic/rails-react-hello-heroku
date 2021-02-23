
import React, { Component } from 'react';
import './App.css';
import ListContainer from './components/ListContainer'
import listItem from './components/listItem'

class App extends Component {
  constructor(){
    super()
    this.state = {
      plants: []
    }
  }

  componentDidMount(){
    fetch("http://localhost:3001/api/v1/plants")
    .then(response => response.json())
    .then(plants => {
      console.log(plants)
      this.setState({
        plants: plants
      })
    })
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1>Hello, Heroku!</h1>
          <h2>{ this.state.plants.map(plant => plant.name).join(' ') }</h2>
        </header>
      </div>
    );
  }
  
}

export default App;

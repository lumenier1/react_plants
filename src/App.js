import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/layout/Header';
import Plants from './components/Plants';
import axios from 'axios';

import './App.scss';

class App extends Component {
  
  state = {
    plants: [
      
    ],
    saved: [
      
    ],
    filterOption: 'all'
  }
  
  componentDidMount() {
    axios.get('http://react_test.djiggo.ru/')
      .then(res => this.setState({ plants: res.data.plants }));
  }
  
  componentDidUpdate() {
    // console.log( this.state.plants );
  }
  
  // Filter plant list
  filterChange = (e) => {
    this.setState({ filterOption: e.target.value });
  }
  
  // Save Plant
  savePlant = (id) => {
    /*const copiedPlant = {
      id: id,
      title: title
    }
    this.setState({ saved: [...this.state.todos, copiedPlant] });*/
  }
  
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header filterChange={this.filterChange} />
            <div className="row">
              <Plants plants={this.state.plants} saved={this.state.saved} filterOption={this.state.filterOption} savePlant={this.savePlant} />
            </div>
          </div>
        </div>
      </Router>
    )
  }
}

export default App;

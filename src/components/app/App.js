import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

import './App.css';


export default class App extends Component {

  state = {
    selectedItem : 5
  }

  onItemSelected = (id) => {
    this.setState({
      selectedItem : id,
    })
  }
  render(){
    return (
      <div className='container'>
        <Header />
        <RandomPlanet />
        <div className='row mb2'>
            <div className='col-md-6'>
              <ItemList onItemSelected={ this.onItemSelected } />  
            </div>
            <div className='col-md-6'>
              <PersonDetails itemID={this.state.selectedItem} />
            </div>
        </div>
      </div>
    )
  }
}

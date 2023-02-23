import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
// import ItemList from '../item-list';
// import PersonDetails from '../person-details';
import ErrorIndicator from '../error-indicator';
import ErrorButton from '../error-button';

import './App.css';
import PeoplePage from '../people-page';




export default class App extends Component {

  state = {
    hasError: false
  }

  componentDidCatch(){
    this.setState({hasError:true});
  }


  onErrorButtonClick = () => {
    console.log('error click');
    this.setState({hasError: true});
  }

  render(){

    if(this.state.hasError){
      return <ErrorIndicator />
    }

    return (
      <div className='container'>
        <Header />
        <RandomPlanet />
        <ErrorButton onErrorButtonClick={ this.onErrorButtonClick } />
        <PeoplePage />
        <PeoplePage />
        <PeoplePage />
      </div>
    )
  }
}

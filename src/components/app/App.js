import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorIndicator from '../error-indicator';
import ErrorButton from '../error-button';
import { PeoplePage, StarshipPage, PlanetPage } from '../pages';
import swapiService from '../../services/swapi-service';
import { SwapiServiceProvider } from '../swapi-service-context';
import './App.css';

export default class App extends Component {

  state = {
    hasError: false
  }

  swapiService = new swapiService();

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
        <SwapiServiceProvider value={this.swapiService}>
          <div className='stardb-app'>
            <Header />
            <RandomPlanet />
            <PeoplePage />
            <StarshipPage />
            <PlanetPage />
            <ErrorButton onErrorButtonClick={ this.onErrorButtonClick } />
          </div>
        </SwapiServiceProvider>
      </div>
    )
  }
}

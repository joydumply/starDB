import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
// import ItemDetails, { Record } from '../item-details';
import ItemDetails, { Record } from '../item-details'
import ErrorIndicator from '../error-indicator';
import ErrorButton from '../error-button';
import swapiService from '../../services/swapi-service';
import Row from '../row';

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


    const {getPerson, getStarship, getPersonImage, getStarshipImage} = this.swapiService;

    const personDetails = (
      <ItemDetails itemID={11} 
      getData={getPerson}
      getImageUrl={getPersonImage}>
        <Record field="gender" label="Gender" />
        <Record field="birthYear" label="Birth Year" />
        <Record field="eyeColor" label="Eye Color" />
      </ItemDetails>
    );

    const starshipDetails = (
      <ItemDetails itemID={5} 
      getData={getStarship}
      getImageUrl={getStarshipImage}>
        <Record field="model" label="Model" />  
        <Record field="length" label="Length" />  
        <Record field="costInCredits" label="Cost" />  
      </ItemDetails>
    )

    return (
      <div className='container'>
        <Header />
        <RandomPlanet />
        <ErrorButton onErrorButtonClick={ this.onErrorButtonClick } />
        <Row 
          left={personDetails}
          right={starshipDetails}
        />
      </div>
    )
  }
}

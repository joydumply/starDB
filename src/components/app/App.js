import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorIndicator from '../error-indicator';
import ErrorButton from '../error-button';
import { PeoplePage, StarshipPage, PlanetPage, LoginPage,SecretPage, Page404  } from '../pages';
import swapiService from '../../services/swapi-service';
import { SwapiServiceProvider } from '../swapi-service-context';
import './App.css';

import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import { StarshipDetails } from '../sw-components';


const ElementWrapper = () => { // создан HOC (High Order Component) чтобы корректно вызвать нужный элемент. В будущем переделать под элементы всех страниц, а не только Кораблей
  const {id} = useParams(); // ловит параметры которые переданы урлом

  return <StarshipDetails itemID={id} />;
}
export default class App extends Component {

  state = {
    hasError: false,
    isLoggedIn: false
  }

  swapiService = new swapiService();

  componentDidCatch(){
    this.setState({hasError:true});
  }


  onErrorButtonClick = () => {
    console.log('error click');
    this.setState({hasError: true});
  }

  onLogin = () => {
    this.setState({
      isLoggedIn : true
    })
  }

  render(){

    const { isLoggedIn } = this.state;

    if(this.state.hasError){
      return <ErrorIndicator />
    }


    return (
      <div className='container'>
        <SwapiServiceProvider value={this.swapiService}>
          <Router>
            <div className='stardb-app'>
              <Header />
              <RandomPlanet />

              <Routes>
                <Route path="/" element={<h2>Welcome to StarDB</h2>} />
                <Route path="/people/:id?" element={<PeoplePage/>} />
                <Route path="/planets" element={<PlanetPage/>} />
                <Route path="/starships" element={<StarshipPage/>} />
                <Route path="/starships/:id" element={<ElementWrapper test="test"/>} />
                <Route path="/login" element={<LoginPage isLoggedIn={isLoggedIn} onLogin={this.onLogin}/>} />
                <Route path="/secret" element={<SecretPage isLoggedIn={isLoggedIn}/>} />

                <Route path="*" element={<Page404 />} />
              </Routes>
              <ErrorButton onErrorButtonClick={ this.onErrorButtonClick } />
            </div>
          </Router>
        </SwapiServiceProvider>
      </div>
    )
  }
}



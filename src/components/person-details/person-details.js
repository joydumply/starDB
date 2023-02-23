import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';

import './person-details.css';

export default class PersonDetails extends Component {


  swapiService = new SwapiService();

  state = {
    item: null,
    isLoading : false
  };

  componentDidMount(){
    this.updateItem();
  }

  componentDidUpdate(prevProps){
    if(this.props.itemID !== prevProps.itemID){
      this.updateItem();
    }
  }

  updateItem(){
    const { itemID } = this.props;
    if( !itemID ){
      return;
    }

    this.setState({isLoading: true});

    this.swapiService
    .getPerson(itemID)
    .then((item) => {
      this.setState({item, isLoading:false});
    })
  }

  render() {
    if(!this.state.item) {
      return <span>Select an item from a list</span>
    }

    if(this.state.isLoading){
      return <Spinner />
    }

    const {id, name, gender, birthYear, eyeColor} = this.state.item;

    return (
      <div className="person-details card">
        <img className="person-image"
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} 
          alt="item-img"
          />

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span>{gender}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span>{birthYear}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color</span>
              <span>{eyeColor}</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
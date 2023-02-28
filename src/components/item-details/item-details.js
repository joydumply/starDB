import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';

import './item-details.css';


const Record = ( {item, field, label} ) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}:</span>
      <span>{item[field]}</span>
    </li>
  )
}
export { Record } 

export default class ItemDetails extends Component {


  swapiService = new SwapiService();

  state = {
    item: null,
    isLoading : false,
    image: null,
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
    const { itemID, getData, getImageUrl } = this.props;
    if( !itemID ){
      return;
    }

    this.setState({isLoading: true});

    getData(itemID)
    .then((item) => {
      this.setState({
          item,
          image: getImageUrl(item),
          isLoading:false,
        });
    })
  }

  render() {
    if(!this.state.item) {
      return <span>Select an item from a list</span>
    }

    if(this.state.isLoading){
      return <Spinner />
    }

    const {name} = this.state.item;
    const item = this.state.item;
    const {image} = this.state;

    return (
      <div className="person-details card">
        <img className="person-image"
          src={image} 
          alt="item-img"
          />

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            { 
              React.Children.map(this.props.children, (child) => {
                return React.cloneElement(child, { item });
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}
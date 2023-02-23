import React, { Component } from "react";
import ErrorButton from "../error-button";
import ErrorIndicator from "../error-indicator";
import ItemList from "../item-list";
import PersonDetails from "../person-details";

import './people-page.css';

export default class PeoplePage extends Component{

    state = {
        selectedItem: null,
        hasError: false,
    }

    componentDidCatch() {
        this.setState({hasError: true});
    }

    onErrorButtonClick = () => {
        console.log('error click');
        this.setState({hasError: true});
      }

    onItemSelected = (id) => {
        this.setState({
          selectedItem : id,
        })
      }
    render(){

        if(this.state.hasError){
            return <ErrorIndicator />
        }

        return(
            <div className='row mb2'>
                <div className='col-md-6'>
                    <ItemList onItemSelected={ this.onItemSelected } />  
                </div>
                <div className='col-md-6'>
                    <PersonDetails itemID={this.state.selectedItem} />
                </div>

                <div className="col-md-12">
                    <ErrorButton onErrorButtonClick={ this.onErrorButtonClick } />
                </div>

            </div>
        )
    }
}
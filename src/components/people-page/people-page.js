import React, { Component } from "react";
import ErrorIndicator from "../error-indicator";
import ItemList from "../item-list";
import ItemDetails from "../item-details";
import SwapiService from "../../services/swapi-service";
import Row from "../row";
import ErrorBoundry from "../error-boundry";

import './people-page.css';





export default class PeoplePage extends Component{

    state = {
        selectedItem: null,
    }
    
    swapiService = new SwapiService();

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


        const itemList = (
            <ItemList 
                getData={ this.swapiService.getAllPeople } 
                onItemSelected={ this.onItemSelected }>
                    {(i) => (
                        `${i.name} (${i.birthYear})`
                    )}
            </ItemList>
        );

        const itemDetails = (
            <ItemDetails itemID={this.state.selectedItem} />
        );

        return(
            <ErrorBoundry>
                <Row left={itemList} right={itemDetails} />
            </ErrorBoundry>
            
        )
    }
}
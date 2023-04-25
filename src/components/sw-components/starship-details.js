import React  from "react"

import ItemDetails, {Record} from "../item-details"

import { SwapiServiceConsumer } from "../swapi-service-context";


const StarshipDetails = ({itemId}) => {
    return (
        <SwapiServiceConsumer>
            {
                ({getStarship, getStarshipImage}) => {
                    return( 
                        <ItemDetails 
                            itemID={itemId} 
                            getData={getStarship}
                            getImageUrl={getStarshipImage}>
                            <Record field="model" label="Model" />  
                            <Record field="length" label="Length" />  
                            <Record field="costInCredits" label="Cost" />  
                        </ItemDetails>
                    )
                }
            }
        </SwapiServiceConsumer>
    )
}

export default StarshipDetails;
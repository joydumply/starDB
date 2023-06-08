import React from "react";
import { StarshipList } from "../sw-components";
import { useNavigate } from 'react-router-dom';


const StarshipPage = () => {
    const navigate = useNavigate();
    return (
        <StarshipList onItemSelected={(itemID) =>{
            // const newPath = `itemID`;
            navigate(itemID)
        }} />
    )
}

export default StarshipPage
import React from "react";
import { StarshipList } from "../sw-components";
import { useNavigate } from 'react-router-dom';


const StarshipPage = () => {
    const navigate = useNavigate();
    return (
        <StarshipList onItemSelected={(itemID) =>{
            const newPath = `/starships/${itemID}/`;
            navigate(newPath)
        }} />
    )
}

export default StarshipPage
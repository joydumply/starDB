import React from "react";
import { Navigate } from "react-router-dom";

const SecretPage = ({isLoggedIn}) => {

    if (!isLoggedIn) {
        return <Navigate to="/login" />;
    }

    return (
        <div className="jumbotron text-center">
            <h3>This page is full of secrets!!!</h3>
        </div>
    )

}

export default SecretPage;
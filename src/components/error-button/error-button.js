import React, { Component } from "react";

import './error-button.css';

export default class ErrorButton extends Component{
    render() {
        return(
            <div className="btn btn-danger errorButton"
            onClick={ this.props.onErrorButtonClick }
            >
                Init Error
            </div>
        )
    }
}
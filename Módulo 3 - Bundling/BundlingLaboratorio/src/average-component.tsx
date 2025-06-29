import React from "react";
import "./mystyles.scss";
import logo from './content/logo.png';

export const AverageComponent = () => {
    return (
        <div>
            <span className="red-background arc">
                Hola Mundo!
            </span>
            <div>
                <img src={logo}></img>
            </div>
        </div>
    )
}
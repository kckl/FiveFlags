import React from "react";
import {useState} from 'react';
import './GuestView.css';

import GetShop from "./components/GetShop";

const GuestView = () => {
    const [isShown, setIsShown] = useState(false);
    const handleClick = event => {
        setIsShown(current => !current);
      };

    return (
        <>
            <div className="page-container">
                <h1>Welcome to the Five Flags Guest Experience Dashboard!</h1>
                <div>
                <button onClick={handleClick}>Browse Shops</button>
                    {isShown && (
                        <div>
                        <h3>Here are our shops:</h3>
                        </div>
                    )}
                    {isShown &&  <GetShop />}           
                </div>
            </div>
        </>
    );
};

export default GuestView;
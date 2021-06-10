import React from 'react';
import TextIndecator from '../text-indicator-progress';
import "./header.css";

const Header = ({...howMach}) => {
    return(
    <div className="headerWrapper">
        <h1 className="headerWrapper--title">To do list:</h1>
        <div className="headerWrapper--textIndicators">
            <TextIndecator {...howMach} />
        </div>
    </div>
    );
}

export default Header;
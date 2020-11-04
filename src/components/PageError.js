import React from 'react';
import error500 from '../img/error500.svg';

import './styles/PageError.css';

function PageError (props) {
    return <div className="PageError">{props.error.message} 
        <img className="Badges__error404" src={error500} alt="Error 404"/>
    </div>;
}

export default PageError;
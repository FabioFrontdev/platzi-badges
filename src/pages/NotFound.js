import React from 'react';
import error404 from '../img/error404.svg';

import '../components/styles/Badges.css';

function NotFound() {
    return (
        <div className="Badges__container">
            <img className="Badges__error404" src={error404} alt="Error 404"/>
        </div>
    )
}

export default NotFound;
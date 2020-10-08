import React from 'react';

import '../components/styles/BadgeNew.css';
import header from '../img/badge-header.svg';
import Navbar from '../components/Navbar';
import Badge from '../components/Badge';

class BadgeNew extends React.Component {
    render() {
        return ( 
            <div>
                <Navbar />
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="Logo"/>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col"> 
                            <Badge 
                                firstName="Leonardo" 
                                lastName="Fuentes" 
                                twitter="Fabioleon.fuentes" 
                                jobTitle="Frontend Developer" 
                                avatarUrl="https://s.gravatar.com/avatar/51bdbb518921ff8dfdc754aeb3bc1414?s=80" 
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BadgeNew;
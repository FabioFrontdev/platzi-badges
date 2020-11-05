import React from 'react';
import icon from '../img/twitter.svg';
import { Link } from 'react-router-dom';
import Gravatar from '../components/Gravatar';
import './styles/Badges.css'
class BadgesList extends React.Component{
    render () {
        if(this.props.badges.length === 0) {
            return (
                <div>
                    <h3>Ups! No badges were found!</h3>
                    <Link className="btn btn-primary" to='/badges/new'>
                        Create new badge
                    </Link>
                </div>
            )
        }
        return (
            <ul className="list-unstyled">
                {this.props.badges.map((badge) => {
                    return (
                        <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}`}>
                            <div className="Badges__content-list"> 
                                <Gravatar 
                                    className="Badges__avatar" 
                                    email={badge.email} 
                                    alt="Avatar" 
                                /> 
                                
                                <li key={badge.id} >
                                    <h2>{badge.firstName} {badge.lastName}</h2>
                                    <div className="Badges__twitter">
                                        <img className="Badges__twitter--icon" src={icon} alt="Icono Twitter"/>
                                        <p className="Badges__twitter--link">@{badge.twitter}</p>
                                    </div>
                                    <h3 className="Badges__jobTitle">{badge.jobTitle}</h3>
                                </li> 
                            </div>
                        </Link>
                    )
                })}
            </ul>
        )
    }
}

export default BadgesList; 
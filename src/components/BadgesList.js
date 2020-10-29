import React from 'react';
import icon from '../img/twitter.svg'

class BadgesList extends React.Component{
    render () {
        return (
            <ul className="list-unstyled">
                {this.props.badges.map((badge) => {
                    return (
                        <div className="Badges__content-list">
                           <img className="Badges__avatar" src={badge.avatarUrl} alt="Avatar"/>    
                            <li key={badge.id} >
                                <h2>{badge.firstName} {badge.lastName}</h2>
                                <div className="Badges__twitter">
                                    <img className="Badges__twitter--icon" src={icon} alt="Icono Twitter"/>
                                    <p className="Badges__twitter--link">@{badge.twitter}</p>
                                </div>
                                <h3 className="Badges__jobTitle">{badge.jobTitle}</h3>
                            </li> 
                        </div>
                    )
                })}
            </ul>
        )
    }
}

export default BadgesList; 
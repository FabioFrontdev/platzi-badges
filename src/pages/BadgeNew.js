import React from 'react';

import '../components/styles/BadgeNew.css';
import header from '../img/badge-header.svg';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import Navbar from '../components/Navbar';


class BadgeNew extends React.Component {
    state = { form: {} };

    handleChange = e => {
        const nextForm = this.state.form
        nextForm[e.target.name] = e.target.value;

        this.setState({
            form: nextForm,
        });
    };

    render() {
        return ( 
            <div>
                <Navbar />
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="Logo"/>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-6"> 
                            <Badge 
                                firstName="Fabio" 
                                lastName="Fuentes" 
                                twitter="Fabioleon.fuentes" 
                                jobTitle="Frontend Developer" 
                                avatarUrl="https://s.gravatar.com/avatar/51bdbb518921ff8dfdc754aeb3bc1414?s=80" 
                            />
                        </div>

                        <div className="col-6">
                            <BadgeForm onChange={this.handleChange}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BadgeNew;
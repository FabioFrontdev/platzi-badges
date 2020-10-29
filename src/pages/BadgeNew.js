import React from 'react';

import '../components/styles/BadgeNew.css';
import header from '../img/badge-header.svg';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';


class BadgeNew extends React.Component {
    state = 
        { form: {
            firstName: '',
            lasttName: '',
            email: '',
            jobTitle: '',
            twitter: '',
        } 
    };

    handleChange = e => {

        //SOLUCION 1 PARA EL PROBLEMA DE SOBREESCRIBIR DATOS DEL FORMULARIO
        /* const nextForm = this.state.form
        nextForm[e.target.name] = e.target.value; */


        //SOLUCION 2 PARA EL PROBLEMA DE SOBREESCRIBIR DATOS DEL FORMULARIO
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            },
        });
    };

    render() {
        return ( 
            <React.Fragment>
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="Logo"/>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-6"> 
                            <Badge 
                                firstName={this.state.form.firstName} 
                                lastName={this.state.form.lasttName} 
                                twitter={this.state.form.twitter} 
                                jobTitle={this.state.form.jobTitle}
                                email={this.state.form.email}
                                avatarUrl="https://s.gravatar.com/avatar/51bdbb518921ff8dfdc754aeb3bc1414?s=80" 
                            />
                        </div>

                        <div className="col-6">
                            <BadgeForm onChange={this.handleChange} formValues={this.state.form}/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default BadgeNew;
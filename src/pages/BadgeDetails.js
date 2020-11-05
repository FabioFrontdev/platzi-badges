import React from 'react';
import { Link } from 'react-router-dom';

import '../components/styles/BadgeDetails.css';
import confLogo from '../img/platziconf-logo.svg'
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import Badge from '../components/Badge';
import api from '../api';

class BadgeDetails extends React.Component{
    state = {
        loading: true,
        errror: null,
        data: undefined
    };

    componentDidMount() {
        this.fetchData()
    }

    fetchData = async () => {
        this.setState({ loading: true, error: null });

        try {
            const data = await api.badges.read(
                this.props.match.params.badgeId
            );
            this.setState({ loading: false, data: data });
        } catch (error) {
            this.setState({ loading: false, error: error });
        }
    };

    render() {
        if (this.state.loading) {
            return <PageLoading />
        };

        if (this.state.error) {
            return <PageError error = {this.state.error} />
        };

        const badge = this.state.data 

        return (
            <div>
                <div className="BadgeDetails__hero">
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                                <img className="image-fluid" src={confLogo} alt="Logo de la Conferencia"/>
                            </div>
                            <div className="col-6 BadgeDetails__hero-attendant-name">
                                <h1> 
                                    {badge.firstName} {badge.lastName} 
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge 
                                firstName={badge.firstName} 
                                lastName={badge.lastName} 
                                email={badge.email} 
                                jobTitle={badge.jobtilte} 
                                twitter={badge.twitter}
                            />
                        </div>
                        <div className="col">
                            <h2>Actions</h2>
                            <div className="mb-4">
                                <Link className="btn btn-primary" to={`/badges${badge.id}/edit`}>Edit</Link>
                            </div>
                            <div>
                                <button className="btn btn-danger">Delete</button>  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BadgeDetails;
import React from 'react';
import { Link } from 'react-router-dom';

import '../components/styles/Home.css';
import platziconf from '../img/platziconf-logo.svg';
import astronauts from '../img/astronauts.svg';

class Home extends React.Component {

    render (){
        return (
            <div className="Home">
                <div className="container">
                    <div className="row">
                        <div className="Home__col col-12 col-md-4">
                            <img
                                className="img-fluid mb-2"
                                src={platziconf}
                                alt="Platzi Conf logo"
                            />
                            <h1>Badge management System</h1>
                            <Link className="btn btn-primary" to="/Badges">
                                Start
                            </Link>
                        </div>

                        <div className="Home__col d-none d-md-block col-md-8">
                            <img
                                className="img-fluid p-4"
                                src={astronauts}
                                alt="Astronauts"
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
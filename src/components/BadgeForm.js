import React from 'react';

class BadgeForm extends React.Component {
    state = {
        jobTitle: 'Designer',
    };
    handleChange = e => {
       // console.log({
       //     name: e.target.value,
       //     value: e.target.value,
       // });

       this.setState({
           [e.target.name]: e.target.value,
       })
    };

    handleClick = e => {
        console.log('Button was Clicked');
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log ('Form was Submitted');
        console.log (this.state);
    };

    render (){
        return (
            <div>
                <h1>New Attendant</h1>

                <form onSubmit = {this.handleSubmit}>
                    <div className="fromgroup">
                        <label>First Name</label>
                        <input 
                         onChange={this.props.onChange}
                         className="form-control" 
                         type="text" 
                         name="firstName"
                         value={this.state.firstName}
                         />
                    </div>
                    <div className="fromgroup">
                        <label>Last Name</label>
                        <input 
                        onChange={this.props.onChange} 
                        className="form-control" 
                        type="text" 
                        name="lasttName" 
                        value={this.state.lastName}
                        />
                    </div>
                    <div className="fromgroup">
                        <label>Email</label>
                        <input onChange={this.props.onChange} 
                        className="form-control" 
                        type="email" 
                        name="email" 
                        value={this.state.email}
                        />
                    </div>
                    <div className="fromgroup">
                        <label>Job title</label>
                        <input onChange={this.props.onChange} 
                        className="form-control" 
                        type="text" 
                        name="jobTitle"
                        value={this.state.jobTitle} 
                        />
                    </div>
                    <div className="fromgroup">
                        <label>Twitter</label>
                        <input onChange={this.props.onChange} 
                        className="form-control" 
                        type="text" 
                        name="twitter" 
                        value={this.state.twitter}
                        />
                    </div>
                    <button onClick={this.handleClick} className="btn btn-primary">
                        Save
                    </button>
                </form>
            </div>
        )
    }
}

export default BadgeForm;
import React, { Component } from 'react';

class fillForm extends Component {
    state = {
        date: null,
        fname: null,
        lname: null,
        district: null,
        rseries: null,
        email: null,
        doctype: null,
        person: null,
        alt: null,
        dob: null,
        tdate: null,
        gdate: null,
        wdate: null,
    }
handleChange = (e) => {
    this.setState({
        [e.target.id]: e.target.value
    });
}
handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
}
render(){
    return(
        <div>
            <form onSubmit={this.handleSubmit}>
            <label htmlFor="date">Date</label>
            <input type="date" id="date" onChange={this.handleChange} />

            </form>
        </div>
    )
}
}



export default fillForm
import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import fillform from './fillform';
import Info from './Info';

class App extends Component {
  state = {
    info: [
      {date: '', fname: '', lname: '', district: '', rseries: '', email: '', doctype: '', person: '', altname: '', dob: '', tdate: '', gdate: '', wdate: ''}
    ]
  }
  render() {
    return (
        <div className="banner">
          <img src={logo} className="App-logo" alt="logo"/>
          
          <div>
          <h3>Record Request Form</h3>
          <Info info={this.state.info} />
          <console className="log">{this.state}</console>
      <ul>
      <li>Student Records</li>
      <li>SPED Records</li>
      <li>HR Records</li>
      <li>AR Records</li>
      </ul>
          <fillform />
          </div>
        </div>  
    );
      }
      
    }

export default App;

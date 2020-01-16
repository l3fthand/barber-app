import React, {Component} from 'react';
// import {api, server} from './API';
import './App.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser, faUserClock} from '@fortawesome/fontawesome-free-solid';

class Barbershop extends Component {

  render(){
    var {name, cutting, waiting, km} = this.props;
    return (
        <div className="barbershop">
          {/* <img src={server+photo} alt="barbershop"/> */}
          <div className="info">
            <h3>{name}</h3>
            <div className="people">
              <FontAwesomeIcon icon={faUser}/>
              <p>{cutting}</p>
            </div>
            <div className="people">
            <FontAwesomeIcon icon={faUserClock}/>
              <p>{waiting}</p>
            </div>
            <div className="distance">
              <p>{km}</p>
            </div>
          </div>
        </div>
    );
  }
}

export default Barbershop;

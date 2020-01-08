import React, {Component} from 'react';
import './App.css';

class Landing extends Component {
  constructor(props){
    super(props);
  }

  render(){
    var {name, location, cutting, waiting, distance} = this.props;
    return (
        <div className="barbershop">
          <img src="" alt="barbershop"/>
          <div className="info">
            <h3>{name}</h3>
            <div className="people">
              <i className="far fa-user"></i>
              <p>{cutting}</p>
            </div>
            <div className="people">
              <i className="far fa-user"></i>
              <p>{waiting}</p>
            </div>
            <div className="distance">
              <p>{distance}</p>
            </div>
          </div>
        </div>
    );
  }
}

export default Landing;

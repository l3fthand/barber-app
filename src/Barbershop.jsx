import React, {Component} from 'react';
import {server} from './API';
import './App.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser, faUserClock} from '@fortawesome/fontawesome-free-solid';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {connect} from 'react-redux';
import barberFactory from './redux/barberFactory';
import {Link} from 'react-router-dom';

class Barbershop extends Component {
  constructor(props){
    super(props);
  }

  render(){
    var {name, cutting, waiting, distance, user, id, km, photo} = this.props;
    return (
        <div className="barbershop">
          <Card.Img src={server+photo} alt="barbershop" style={{width: '30%'}}/>
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
            {
              user != null ?
              <Link to={`/editbarber/${this.props.id}`}><Button variant="danger" className="barbershopEdit">Edit Barber</Button></Link>
              : null
            }
          </div>
        </div>
    );
  }
}

function mapStateToProps(state){
	return {
		barbershops: state.barbershops
	}
}

function mapDispatchToProps(dispatch){
	return {
		getBarber : (barbershop) => {
			dispatch(barberFactory.loadID(barbershop))
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Barbershop);

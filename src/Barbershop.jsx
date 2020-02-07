import React, {Component} from 'react';
import {server} from './API';
import './App.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser, faUserClock} from '@fortawesome/fontawesome-free-solid';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {connect} from 'react-redux';
import barberFactory from './redux/barberFactory';
import waitingFactory from './redux/waitingFactory';
import cuttingFactory from './redux/cuttingFactory';
import {Link} from 'react-router-dom';

class Barbershop extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.loadWaiting();
    this.props.loadCutting();
  }

  render(){
    // cutting, waiting,
    let {name, user, km, photo} = this.props;
    let waiting = this.props.waiting.length;
    let cutting = this.props.cutting.length;
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
    barbershops: state.barbershops,
    waiting : state.waiting,
    cutting : state.cutting,
	}
}

function mapDispatchToProps(dispatch){
	return {
		getBarber : (barbershop) => {
			dispatch(barberFactory.load(barbershop))
    },
    loadWaiting : () => {
      dispatch(waitingFactory.load())
    },
    loadCutting : () => {
      dispatch(cuttingFactory.load())
    },
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Barbershop);

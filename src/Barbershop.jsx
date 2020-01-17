import React, {Component} from 'react';
// import {api, server} from './API';
import './App.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser, faUserClock} from '@fortawesome/fontawesome-free-solid';
import Button from 'react-bootstrap/Button';
import {connect} from 'react-redux';
import barberFactory from './redux/barberFactory';
import {Link} from 'react-router-dom';

class Barbershop extends Component {
  constructor(props){
    super(props);
  }

  // componentDidMount(){
  //   this.props.loadID()
  // }

  render(){
    var {name, cutting, waiting, distance, user, id,km} = this.props;
    return (
        <div className="barbershop">
          <img src="img" alt="barbershop"/>
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
              // <Button onClick={this.EditBarberNavigate(id)} variant="danger" className="barbershopEdit" variant="danger" size="md">Edit Barber</Button>
              user != null ?
              <Button variant="danger" className="barbershopEdit"><Link to='/editbarber/'>Edit Barber</Link></Button> 
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

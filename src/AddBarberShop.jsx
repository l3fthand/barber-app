import React, {Component} from 'react';
import './App.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {api, server} from './API';
import {connect} from 'react-redux';
import barberFactory from './redux/barberFactory';
import {Redirect} from 'react-router-dom';

class AddBarberShop extends Component {
  constructor(props){
    super(props);
    this.state = {
      redirect: false,
    }
  }

  submitForm = (e) => {
		e.preventDefault();
		let form = new FormData(this.form);
    let data = {
			name: form.get('name-input'),
			location: form.get('address-input'),
			username: form.get('username-input'),
      password: form.get('password-input'),
      pin: form.get('pin-input'),
      distance: 0,
    }
    this.props.addBarber(data)
    this.props.history.push({
      pathname: '/admin',
    })
  }

  render(){
    return (
      <div className="main">
          <div className="form">
            <h1>Add Barbershop</h1>
            <Form className="barberForm" onSubmit={this.submitForm} ref={(el) => {this.form = el}}>

              <Form.Group>
                <Form.Control type="text" className="form-control" id="name-input" name="name-input" placeholder="Enter Your Shop's Name"/>
              </Form.Group>

              <Form.Group>
                <Form.Control type="text" className="form-control" name="address-input" id="address-input" placeholder="Enter Your Shop's Address"/>
              </Form.Group>

              <Form.Group>
                <Form.Control type="file" className="form-control" name="photo-input" id="photo-input" placeholder="Add photo"/>
              </Form.Group>

              <Form.Group>
                <Form.Control type="text" className="form-control" name="username-input" id="username-input" placeholder="Enter Your Username"/>
              </Form.Group>

              <Form.Group>
                <Form.Control type="text" className="form-control" name="password-input" id="password-input"placeholder="Enter Your Password" minLength="5"/>
              </Form.Group>

              <Form.Group>
                <Form.Control type="text" className="form-control" name="pin-input" id="pin-input"placeholder="Enter Your Pin Number" minLength="4" maxLength="4"/>
              </Form.Group>

              <Button variant="danger" type="submit">Add Barber</Button>
            </Form>
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
		addBarber : (barbershop) => {
			dispatch(barberFactory.add(barbershop))
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(AddBarberShop);

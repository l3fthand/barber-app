import React, {Component} from 'react';
import './App.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {api, server} from './API';

class AddBarberShop extends Component {
  // constructor(props){
  //   super(props);
  // }

  submitForm = (e) => {
		e.preventDefault();

		var form = new FormData(this.form);

		api.uploadPhoto(form).then(res => {
			var files = res.data

			var data = {
				name: form.get('name-input'),
				location: form.get('address-input'),
				username: form.get('username-input'),
        password: form.get('password-input'),
        pin: form.get('pin-input'),
				photos: files,
			}
			api.addShop(data)
			// .then(()=>{
			// 	this.props.refreshCurrentUser()
			// 	navigate('/products')
			// })
		})
	}
  
  render(){
    return (
      <div className="App">
        <div className="container">
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
      </div>
    );
  }
}

export default AddBarberShop;

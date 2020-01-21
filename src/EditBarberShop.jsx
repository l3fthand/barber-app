import React, {Component} from 'react';
import './App.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {api} from './API';
import {connect} from 'react-redux';
import barberFactory from './redux/barberFactory';

class EditBarberShop extends Component {
  constructor(props){
    super(props);
    this.state = {
      shop: {},
    }
  }

  componentDidMount(){
    let {id} = this.props.match.params;
    api.getShop(id).then(res => {
      this.setState({shop: res.data})
    })
  }

  deleteBarber = () => {
    let {id} = this.state.shop;
    let {history} = this.props;

    this.props.deleteBarber(id);
    history.push({
      pathname: '/admin',
    })
  }

  submitForm = (e) => {
    e.preventDefault();
    let form = new FormData(this.form);
    // api.uploadPhoto(form).then(res => {
      // let file = res.data;
      let data = {
        name: form.get('name-input'),
        location: form.get('address-input'),
        photo: this.state.shop,
        username: form.get('username-input'),
        password: form.get('password-input'),
        pin: form.get('pin-input'),
      }
      let {id} = this.state.shop;
      api.updateShop(id, data)
      .then(() => {
        let {history} = this.props;
        history.push({
          pathname: '/admin',
        })
      })
    // })
  }

  render(){
    let {location, name, username, password, pin, photo} = this.state.shop;
    console.log(photo)
    return (
      <div className="main">
        <div className="form">
          <h1>Edit Barbershop</h1>

            <Form className="barberForm" onSubmit={this.submitForm} ref={(el) => {this.form = el}}>

              <Form.Group>
                <Form.Control type="text" className="form-control" id="name-input" name="name-input" defaultValue={name}/>
              </Form.Group>
              <Form.Group>
                <Form.Control type="text" className="form-control" name="address-input" id="address-input" placeholder="Enter Your Shop's Address" defaultValue={location}/>
              </Form.Group>
              {/* <Form.Group>
                <Form.Control type="file" className="form-control" name="photo-input" id="photo-input" placeholder="Add photo"/>
              </Form.Group> */}
              <Form.Group>
                <Form.Control type="text" className="form-control" name="username-input" id="username-input" placeholder="Enter Your Username" defaultValue={username}/>
              </Form.Group>
              <Form.Group>
                <Form.Control type="text" className="form-control" name="password-input" id="password-input"placeholder="Enter Your Password" minLength="5" defaultValue={password}/>
              </Form.Group>
              <Form.Group>
                <Form.Control type="text" className="form-control" name="pin-input" id="pin-input"placeholder="Enter Your Pin Number" minLength="4" maxLength="4" defaultValue={pin}/>
              </Form.Group>

              <div className="buttons">
                <Button variant="danger" type="submit">Save Changes</Button>
                <Button onClick={this.deleteBarber} className="deleteButton" variant="danger">Delete BarberShop</Button>
              </div>
              
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
		deleteBarber : (barbershop) => {
			dispatch(barberFactory.remove(barbershop))
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(EditBarberShop);
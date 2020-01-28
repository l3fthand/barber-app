import React, {Component} from 'react';
import './App.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import ReactModal from 'react-modal';
import {api, server} from './API';
import {connect} from 'react-redux';
import barberFactory from './redux/barberFactory';

class EditBarberShop extends Component {
  constructor(props){
    super(props);
    this.state = {
      shop: {},
      modalIsOpen: false,
    }
  }

  componentDidMount(){
    let {id} = this.props.match.params;
    api.getShop(id).then(res => {
      this.setState({shop: res.data})
    })
  }

  openModal = () => {
    this.setState({modalIsOpen: true})
  }

  closeModal = () => {
    this.setState({modalIsOpen: false})
  }

  deleteBarber = () => {
    let {id} = this.state.shop;
    let {history} = this.props;

    this.props.deleteBarber(id);
    history.push({
      pathname: '/admin',
    })
  }

  handlePhotoChange = (e) => {
    e.preventDefault()
    const file = new FormData(this.photo)
    api.uploadPhoto(file).then(res => {
      let file = res.data;
      this.setState(prevState => ({
        shop: {
          ...prevState.shop,
          photo: file,
        }
      }))
    })
  }

  submitForm = (e) => {
    e.preventDefault();
    const form = new FormData(this.form);
    let data = {
      name: form.get('name-input'),
      location: form.get('address-input'),
      photo: this.state.shop.photo,
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
  }

  render(){
    let {location, name, username, password, pin, photo} = this.state.shop;
    return (
      <div className="main">
        <div className="form">
          <h1>Edit Barbershop</h1>

            <div className="barberImage">
              <Image src={server+photo} alt="barbershop image" className="image" thumbnail/>
              <Form className="upload-btn-wrapper" onSubmit={this.handlePhotoChange} ref={(el) => {this.photo = el}}>
                <Button type="submit">Change Photo</Button>
                <Form.Control type="file" className="form-control" name="photo-input" id="photo-input"/>
              </Form>
            </div>

            <Form className="barberForm" onSubmit={this.submitForm} ref={(el) => {this.form = el}}>

              <Form.Group>
                <Form.Control type="text" className="form-control" id="name-input" name="name-input" defaultValue={name}/>
              </Form.Group>
              <Form.Group>
                <Form.Control type="text" className="form-control" name="address-input" id="address-input" placeholder="Enter Your Shop's Address" defaultValue={location}/>
              </Form.Group>
              <Form.Group>
                <Form.Control type="text" className="form-control" name="username-input" id="username-input" placeholder="Enter Your Username" defaultValue={username}/>
              </Form.Group>
              <Form.Group>
                <Form.Control type="text" className="form-control" name="password-input" id="password-input"placeholder="Enter Your Password" minLength="5" defaultValue={password}/>
              </Form.Group>
              <Form.Group>
                <Form.Control type="text" className="form-control" name="pin-input" id="pin-input" placeholder="Enter Your Pin Number" minLength="4" maxLength="4" defaultValue={pin}/>
              </Form.Group>

              <div className="buttons">
                <Button variant="danger" type="submit">Save Changes</Button>
                <Button onClick={this.openModal} className="deleteButton" variant="danger">Delete BarberShop</Button>
              </div>
              
            </Form>

        </div>

        <ReactModal isOpen={this.state.modalIsOpen} ariaHideApp={false} className="deleteModal">
          <h4>Are You Sure You Want To Delete This Barbershop</h4>
          <div className="buttons">
            <Button onClick={this.deleteBarber} variant="danger" type="submit">Delete</Button>
            <Button onClick={this.closeModal} className="deleteButton" variant="danger">Cancel</Button>
          </div>
        </ReactModal>
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
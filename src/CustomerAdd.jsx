import React, {Component} from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {api, server} from './API';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser, faUserClock} from '@fortawesome/fontawesome-free-solid';
import {connect} from 'react-redux';
import barberFactory from './redux/barberFactory';
import Form from 'react-bootstrap/Form';

class CustomerAdd extends Component {
  constructor(props){
    super(props);
    this.state = {
      waiting: [
        {
          id: 1,
          name: 'David',
        },
        {
          id: 2,
          name: 'John',
        },
        {
          id: 3,
          name: 'Mike',
        },
        {
          id: 4,
          name: 'Geoff',
        },
        {
          id: 5,
          name: 'Liam',
        }
      ],
      cutting: [
        {
          id: 1,
          name: 'Harry',
        },
        {
          id: 2,
          name: 'Tom',
        },
      ],
    }
  }

  // addCustomer = () => {

  // }

  // updateCustomer = () => {

  // }

  // removeCustomer = () => {

  // }

  render(){
    let {waiting, cutting} = this.state;
    return (
      <div className="main">
        <Form className="addCustomer" onSubmit={this.addCustomer} ref={(el) => {this.photo = el}}>
          <Form.Group>
            <Form.Control type="text" className="form-control" name="name-input" id="name-input" placeholder="Name"/>
          </Form.Group>
          <Button type="submit">Okay</Button>
        </Form>

        <div className="barberCustomers">
          <hr/>
          <div className="waiting">
            <h3>Waiting</h3>
            <Row className="currentCustomers row row-cols-4">
              {waiting.map((waiting) => {
                let {id, name} = waiting;
                  return(
                    <Col key={id}>
                      <div className="customer">
                        <FontAwesomeIcon icon={faUserClock}/>
                        <p>{name}</p>
                      </div>
                    </Col>
                  )
                })}
            </Row>
          </div>
          <hr/>
          <div className="cutting">
            <h3>Cutting</h3>
            <Row className="currentCustomers row row-cols-4">
              {cutting.map((cutting) => {
                let {id, name} = cutting;
                  return(
                    <Col key={id}>
                      <div className="customer">
                        <FontAwesomeIcon icon={faUser}/>
                        <p>{name}</p>
                      </div>
                    </Col>
                  )
                })}
            </Row>
          </div>
        </div>
        
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    barbershops : state.barbershops,
  }
}

function mapDispatchToProps(dispatch){
  return {
    loadBarber : () => {
      dispatch(barberFactory.load())
    },
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CustomerAdd);

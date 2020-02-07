import React, {Component} from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import ReactModal from 'react-modal';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser, faUserClock} from '@fortawesome/fontawesome-free-solid';
import {connect} from 'react-redux';
import waitingFactory from './redux/waitingFactory';
import cuttingFactory from './redux/cuttingFactory';

class CustomerAdd extends Component {
  constructor(props){
    super(props);
    this.state = {
      cuttingModelIsOpen: false,
      finishedModelIsOpen: false,
      name: '',
      id: '',
    }
  }

  addCustomer = (e) => {
    e.preventDefault()
    let formData = new FormData(this.form);
    let data = {
      name: formData.get('name-input'),
    }
    this.props.addWaiting(data);
    e.target.reset();
  }

  updateCustomer = (id,name) => {
    id = this.state.id;
    name = this.state.name;
    this.props.deleteWaiting(id)
    let data = {name}
    this.props.addCutting(data)
    this.closeCuttingModal()
  }

  removeCustomer = (id) => {
    id = this.state.id;
    this.props.deleteCutting(id)
    this.closeFinishedModal()
  }

  openCuttingModal = (id,name) => {
    this.setState({cuttingModelIsOpen: true, name, id})
  }

  openFinishedModal = (id) => {
    this.setState({finishedModelIsOpen: true, id})
  }

  closeCuttingModal = () => {
    this.setState({cuttingModelIsOpen: false})
  }

  closeFinishedModal = () => {
    this.setState({finishedModelIsOpen: false})
  }

  componentDidMount(){
    this.props.loadWaiting()
    this.props.loadCutting()
  }

  render(){
    let {waiting, cutting} = this.props;
    return (
      <div className="main">
        <Form className="addCustomer" onSubmit={this.addCustomer} ref={(el) => {this.form = el}}>
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
                      <div className="customer" onClick={this.openCuttingModal.bind(this,id,name)}>
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
                      <div className="customer" onClick={this.openFinishedModal.bind(this,id)}>
                        <FontAwesomeIcon icon={faUser}/>
                        <p>{name}</p>
                      </div>
                    </Col>
                  )
                })}
            </Row>
          </div>
        </div>

        <ReactModal isOpen={this.state.cuttingModelIsOpen} ariaHideApp={false} className="deleteModal">
          <h4>Is it {this.state.name}'s turn to cut?</h4>
          <div className="buttons">
            <Button onClick={this.updateCustomer} variant="danger" type="submit">Yes</Button>
            <Button onClick={this.closeCuttingModal} className="deleteButton" variant="danger">No</Button>
          </div>
        </ReactModal>

        <ReactModal isOpen={this.state.finishedModelIsOpen} ariaHideApp={false} className="deleteModal">
          <h4>Finished?</h4>
          <div className="buttons">
            <Button onClick={this.removeCustomer} variant="danger" type="submit">Yes</Button>
            <Button onClick={this.closeFinishedModal} className="deleteButton" variant="danger">No</Button>
          </div>
        </ReactModal>
        
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    waiting : state.waiting,
    cutting : state.cutting,
  }
}

function mapDispatchToProps(dispatch){
  return {
    loadWaiting : () => {
      dispatch(waitingFactory.load())
    },
    addWaiting : (waiting) => {
			dispatch(waitingFactory.add(waiting))
    },
    deleteWaiting : (waiting) => {
      dispatch(waitingFactory.remove(waiting))
    },
    loadCutting : () => {
      dispatch(cuttingFactory.load())
    },
    addCutting : (cutting) => {
			dispatch(cuttingFactory.add(cutting))
    },
    deleteCutting : (cutting) => {
      dispatch(cuttingFactory.remove(cutting))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CustomerAdd);

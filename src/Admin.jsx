import React, {Component} from 'react';
import Barbershop from './Barbershop';
import './App.css';
import {api, server} from './API';
import Button from 'react-bootstrap/Button';
import {connect} from 'react-redux';
import barberFactory from './redux/barberFactory';

class Admin extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: 'admin'
    }
  }

  AddBarberNavigate(){
    this.props.history.push({
      pathname: '/addbarber',
    })
  }

  EditBarberNavigate(){
    this.props.history.push({
      // pathname: '/editbarber/:id',
      pathname: '/editbarber',
    })
  }

  componentDidMount(){
    this.props.loadBarber()
  }

  render(){
    let {barbershops} = this.props;
    let {user} = this.state;
    return (
      <div className="main">     
        <Button onClick={this.AddBarberNavigate.bind(this)} className="barbershopAdd" variant="danger" size="lg" block>Add New Barber</Button>
          {
            barbershops.map((i) => {
              let props = {
                ...i,
                key: i.id,
                user,
                // EditBarberNavigate: this.props.EditBarberNavigate,
              }
            return <Barbershop {...props}/>
            })
          }
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

export default connect(mapStateToProps,mapDispatchToProps)(Admin);

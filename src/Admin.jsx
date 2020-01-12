import React, {Component} from 'react';
import Barbershop from './Barbershop';
import Navigation from './Navigation';
import './App.css';
import {api, server} from './API';
import Button from 'react-bootstrap/Button';
import {connect} from 'react-redux';
import barberFactory from './redux/barberFactory';

class Admin extends Component {
  constructor(props){
    super(props);
    this.state = {
      barbershops: [],
      // redirect: false,
    }
  }

  navigatePage(){
    let {history} = this.props;
    history.push({
      pathname: '/addbarber',
    })
  }

  // getShops = () => {
  //   api.getShops()
  //   .then(res => {
  //     this.setState({barbershops: res.data})
  //   })
  // }

  componentDidMount(){
    // this.getShops()
    this.props.loadBarber()
    // this.setState({barbershops})
  }

  render(){
    // var {barbershops,redirect} = this.props;
    var {barbershops,redirect} = this.state;
    return (
      <div className="App">
        <div className="container">

          <Navigation/>

          <div className="main">     
            {/* <form>
              <div className="searchbar">
                <input type="text" name="search" placeholder="search..."></input>
              </div>
            </form> */}
              <Button onClick={this.navigatePage.bind(this)} className="barbershopAdd" variant="danger" size="lg" block>Add New Barber</Button>

            {
              barbershops.map((i) => {
                var props = {
                  ...i,
                  key: i.id,
                }
                return <Barbershop {...props}/>
              })
            }

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
      dispatch(barberFactory.load)
    },
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Admin);

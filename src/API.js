import axios from 'axios';

var url = 'http://localhost:4000/api';
var server = 'http://localhost:4000/';

var api = {

  getShops : () => {
    return axios.get(url+'/shops')
  },

  addShop : (data) => {
    return axios.post(url+'/shops',data)
  },


  uploadPhoto : (data) => {
    return axios.post(url+'/upload',data)
  },

}

export {server,api}
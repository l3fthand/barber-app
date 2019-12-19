import axios from 'axios';

var url = 'http://localhost:4000/api';
var server = 'http://localhost:4000/';

var api = {

  getShops : () => {
    return axios.get(url+'/shops')
  },

}

export {server,api}
import axios from 'axios';

const url = 'http://localhost:4000/api';
const server = 'http://localhost:4000/';

const api = {

  getShops : () => {
    return axios.get(url+'/shops')
  },

  addShop : (data) => {
    return axios.post(url+'/shops',data)
  },

  // uploadPhoto : (data) => {
  //   return axios.post(url+'/upload',data)
  // },

}

export default api
export {server, api}
import axios from 'axios';

const url = 'http://localhost:4000/api';
const server = 'http://localhost:4000/';

const api = {

  getShops : () => {
    return axios.get(url+'/shops')
  },

  getShop : (id) => {
    return axios.get(url+'/shops/'+id)
  },

  addShop : (data) => {
    return axios.post(url+'/shops',data)
  },

  deleteShop : (id) => {
    return axios.delete(url+'/shops/'+id)
  },

  updateShop : (id,data) => {
    return axios.put(url+'/shops/'+id,data)
  },

  uploadPhoto : (data) => {
    return axios.post(url+'/upload',data)
  },

  getWaiting : () => {
    return axios.get(url+'/waiting')
  },

  addWaiting : (data) => {
    return axios.post(url+'/waiting',data)
  },

  deleteWaiting : (id) => {
    return axios.delete(url+'/waiting/'+id)
  },

  getCutting : () => {
    return axios.get(url+'/cutting')
  },

  addCutting : (data) => {
    return axios.post(url+'/cutting',data)
  },

  deleteCutting : (id) => {
    return axios.delete(url+'/cutting/'+id)
  }

  // getAdmin : (data) => {
  //   return axios.get(url+'/admin',data)
  // },
}

export default api
export {server, api}
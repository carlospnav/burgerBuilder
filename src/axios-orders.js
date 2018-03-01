import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burgerbuilder-d684c.firebaseio.com/'
});

export default instance;
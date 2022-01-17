import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const APP_COOKIE_TOKEN = process.env.REACT_APP_COOKIE_TOKEN;
const token = cookies.get(APP_COOKIE_TOKEN);

console.log('Cookie with auth token: ', APP_COOKIE_TOKEN, token);


// Set config defaults when creating the instance
const instance = axios.create({
    baseURL: 'http://192.168.40.32:6800',
    withCredentials: true
});

if (token) {
  instance.defaults.headers.common.authorization = `Bearer ${token}`;
}

export default instance;
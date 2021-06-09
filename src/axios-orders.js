import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://myburger-c65c7-default-rtdb.firebaseio.com/'
});

export default instance;
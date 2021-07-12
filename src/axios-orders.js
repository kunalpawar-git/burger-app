import axios from 'axios';

const instance = axios.create({
    baseURL:'https://myburger-builder-f33a9-default-rtdb.firebaseio.com/'
});

export default instance;
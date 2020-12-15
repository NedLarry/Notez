import axios from 'axios';

const instance = axios.create ({
    baseURL: 'https://notez-8d80d.firebaseio.com/'
})

export default instance;
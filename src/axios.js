import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://tinder-clone-be-lakshan.herokuapp.com'
})

export default instance;
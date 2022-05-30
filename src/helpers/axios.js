import axios from 'axios';
export default axios.create({
    baseURL:'https://temp-app-windowshop.herokuapp.com/'
});

const token = JSON.parse(localStorage.getItem('token'));
export const WithTokenApi = axios.create({
    baseURL:'https://temp-app-windowshop.herokuapp.com/',
     headers: {"Authorization" : `Bearer ${token}`} 
});


//usage:
// api.post('/products',{...formValues,userId});
// api.get('/products');
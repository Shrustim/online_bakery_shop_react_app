import axios from 'axios';
export default axios.create({
    baseURL:'https://temp-app-windowshop.herokuapp.com/'
});


//usage:
// api.post('/products',{...formValues,userId});
// api.get('/products');
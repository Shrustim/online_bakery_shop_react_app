import axios from 'axios';
export default axios.create({
    baseURL:'http://localhost:3001'
});


//usage:
// api.post('/products',{...formValues,userId});
// api.get('/products');
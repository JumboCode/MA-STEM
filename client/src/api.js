// const url = (process.env.NODE_ENV === 'development') 
// ? 'http://localhost:3001/'
// : 'https://mass-stem-backend.herokuapp.com/';
const url = 'https://mass-stem-backend.herokuapp.com/';

// console.log(process.env.NODE_ENV);

export const options = {
    get: {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    },
    post: {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        }
    }
};

const api = {url, options};

export default api;
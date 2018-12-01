const url = (process.env.NODE_ENV === 'development') 
? 'http://localhost:3001/'
: 'https://mass-stem-backend.herokuapp.com/';

export const options = {
    get: {
        method: 'GET',
        mode: "no-cors",
        headers: {
            'content-type': 'application/json'
        }
    },
    post: {
        method: 'POST',
        mode: "no-cors",
        headers: {
            'content-type': 'application/json'
        }
    }
};

const api = {url, options};

export default api;
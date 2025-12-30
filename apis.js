import axios from 'axios';
import { url, port } from './constants'

const api = async (router, responseType = 'json') => {
    let res;
    try {

        res = await axios.get(`${url}${router}`, {
            responseType: responseType
        });

        // const apiClient = axios.create({
        //     baseURL: '',
        //     withCredentials: true, // If the API requires cookies or credentials

        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        // });


    } catch (err) {
        if (err.response) {
            if ([404, 401, 403, 500, 503].includes(err.response.status)) {
                res = err;
            }
        }
    }
    return res;
}

export default api;
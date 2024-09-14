import axios from 'axios';

const axiosConfig = {
    header: {
        'Content-Type': 'application/json'
    }
};

const axiosClient = axios.create(axiosConfig);

export default axiosClient;
import axios from "axios";

axios.interceptors.request.use(function (config) {
    config.headers = {
        ...config.headers,
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    };
    return config;
}, function (error) {
    return Promise.reject(error);
});


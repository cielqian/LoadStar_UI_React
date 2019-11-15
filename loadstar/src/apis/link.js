import axios from 'axios';

export const analysisLink = (url) => {
    return new Promise((resolve, reject) => {
        axios.post('/link-service/open/link/analysis', {url: url}).then(res => {
            resolve(res);
        }).catch(error => {
            reject(error)
        });
    });
};
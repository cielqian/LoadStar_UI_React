import ComponentConfgs from '../components/combine_config';
import PageConfgs from '../pages/combine_config';

import axios from 'axios';
import _ from 'lodash'

function configAxios() {
    axios.defaults.baseURL = "http://localhost:9080";

    axios.interceptors.request.use(
        function (config) {
            if (config.url.indexOf('/auth-service/oauth/token') < 0) {
                let token = localStorage.getItem('TOKEN');
                if (!!token) {
                    config.headers.Authorization = 'Bearer ' + token;
                }
            }
            return config;
        },
        function (err) {
            return Promise.reject(err);
        }
    );

    axios.interceptors.response.use(
        function (response) {
            var res = response;
            if (res.status === 200) {
                return Promise.resolve(res.data);
            } else {
                return Promise.reject(res);
            }
        },
        function (error) {
            return Promise.reject(error);
        }
    );
}

function combineConfig() {
    return _.concat(ComponentConfgs, PageConfgs);
}

function buildActions() {
    _.forEach(combineConfig(), cfg => {
        
    });
}

export function buildReducers() {
    return combineConfig();
}

export function launch() {
    configAxios();
    buildActions();
    buildReducers();

}
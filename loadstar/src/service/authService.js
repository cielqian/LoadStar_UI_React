import axios from "axios";

const apis = {
    login: function(payload) {
        var form = new FormData();
        form.append("scope", "ui");
        form.append("grant_type", "password");
        form.append("username", payload.username);
        form.append("password", payload.password);

        return new Promise((resolve, reject) => {
            axios.post('/auth-service/oauth/token', form, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': 'Basic YnJvd3Nlcjo='
                }
            }).then(res => {
                resolve(res);
            }).catch(error => {
                reject(error)
            });
        });
    },
    register: function (payload) {
        return new Promise((resolve, reject) => {
            axios.post('/user-service/api/account', {
                username: payload.account,
                password: payload.password,
                nickname: '123'
            }).then(res => {
                resolve(res);
            })
        })
    }
}

export default apis;
import axios from 'axios';

export const fetchLogin = (account, password) => {
    var form = new FormData();
    form.append("scope", "ui");
    form.append("grant_type", "password");
    form.append("username", account);
    form.append("password", password);

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
};
export const fetchRegister = (account, password) => {
    axios.post('/user-service/api/account', {
        username: account,
        password: password,
        nickname: '123'
    })
};
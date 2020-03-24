import authService from '@apiService/authService';

export const actions = {
    login: function (payload) {
        return (dispatch) => {
            authService.login(payload)
            .then(res => {
                
                localStorage.setItem("TOKEN", res.value)
                window.location = '/home/dash';
                return Promise.resolve();    
            })
        }
    }
}
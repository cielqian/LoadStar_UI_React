import axios from "axios";

const apis = {
    fetchUserInfo: function (payload) {
        return new Promise((resolve, reject) => {
            axios.get('/user-service/api/account/current', { params: payload })
                .then(res => {
                    resolve(res);
                });
        });
    },
}

export default apis;

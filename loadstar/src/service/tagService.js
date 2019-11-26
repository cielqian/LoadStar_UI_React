import axios from "axios";

const apis = {
    fetchTags: function(payload) {
        return new Promise((resolve, reject) => {
            axios.get('/link-service/api/tag/current')
            .then(res => {
                resolve(res);
            })
        })
    }
}

export default apis;
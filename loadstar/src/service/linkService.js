import axios from "axios";

const apis = {
    saveLink: function (payload) {
        return new Promise((resolve, reject) => {
            axios.post('/link-service/api/link', {
                "folderId": 0,
                "icon": "",
                "name": payload.name,
                "often": false,
                "tags": payload.tags,
                "title": payload.name,
                "url": payload.url
            })
                .then(res => {
                    resolve(res);
                });
        });
    },
    removeLink: function (payload) {
        return new Promise((resolve, reject) => {
            axios.delete('/link-service/api/link/' + payload.id)
                .then(res => {
                    resolve(res);
                });
        })
    },
    fetchLinks: function (payload) {
        return new Promise((resolve, reject) => {
            axios.get('/link-service/api/link/page', { params: payload })
                .then(res => {
                    resolve(res);
                    // dispatch(actions.setValue('pageData', res.data.items));
                    // dispatch(receiveRecentLink(res.data.items));
                }).catch(res => {
                    // dispatch(receiveRecentLink([]));
                    resolve({data:{total:0,items:[]}});
                });
        });
    },
    fetchDashLinks: function (payload) {
        return new Promise((resolve, reject) => {
            axios.get('/link-service/api/link/loadstar', { params: payload })
                .then(res => {
                    resolve(res);
                });
        });
    },
    addLinkToDash: function (payload) {
        return new Promise((resolve, reject) => {
            axios.put('/link-service/api/link/'+ payload.id +'/addToDash')
                .then(res => {
                    resolve(res);
                });
        });
    }
}

export default apis;
import genericReducer from '../../redux/reducers/genericReducer'
import axios from 'axios';

export const actions = {
    fullTextSearch: function(payload) {
        return (dispatch, getState) => {
            axios.get('/link-service/api/link/search',{params:{keyword:payload}})
            .then(res => {
            })
            .catch(res => {});
        }
    }
}

export const reducerConfig = {
    pageId: 'homePage',
    reducers: [
    ]
};

export default genericReducer(reducerConfig);
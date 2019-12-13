import genericReducer from '../../redux/reducers/genericReducer'
import axios from 'axios';

export const actions = {
    fullTextSearch: function(payload) {
        return (dispatch, getState) => {
            axios.get('/link-service/api/link/search',{params:{keyword:payload}})
            .then(res => {
                dispatch({type:'searchPage.pageData' ,payload: res.data.items});
            })
            .catch(res => {});
        }
    },
    setValue: function (field, payload) {
        return (dispatch, getState) => {
            dispatch({type:reducerConfig.pageId + '.' + field ,payload: payload});
        }
    }
}

export const reducerConfig = {
    pageId: 'searchResultPage',
    reducers: [
        {
            name: 'pageData',
            initialState: []
        },
        {
            name: 'loading',
            initialState: true
        }
    ]
};

export default genericReducer(reducerConfig);
import genericReducer from '../../redux/reducers/genericReducer'
import axios from 'axios';

export const actions = {
    setValue: function(field, payload){
        return (dispatch, getState) => {
            dispatch({type: reducerConfig.pageId + '.' + field,payload:payload})
        }
    },
    fetchTags: function(payload) {
        return (dispatch, getState) => {
            axios.get('/link-service/api/tag/current')
            .then(res => {
                dispatch({type:'tagPage.pageData',payload:res.data});
            })
            .catch(res => {});
        }
    },
    saveTag: function(payload){
        return (dispatch, getState) => {
            axios.post('/link-service/api/tag',  {
                "name": payload
            })
            .then(res => {
                dispatch(actions.fetchTags());
            })
            .catch(res => {});
        }
    },
    removeTag: function(payload){
        return (dispatch, getState) => {
            axios.delete('/link-service/api/tag/' + payload)
            .then(res => {
                dispatch(actions.fetchTags());
            })
            .catch(res => {});
        }
    }
}

export const reducerConfig = {
    pageId: 'tagPage',
    reducers: [
        {
            name: 'pagination',
            initialState: {
                total:0,
                current:1,
                size:10
            }
        },
        {
            name: 'pageData',
            initialState: []
        },
        {
            name: 'inputVisible',
            initialState: false
        },
        {
            name: 'searchResult',
            initialState: []
        },
        {
            name: 'inputValue',
            initialState: ''
        }
    ]
};

export default genericReducer(reducerConfig);
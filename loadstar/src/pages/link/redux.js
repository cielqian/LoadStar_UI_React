import * as reducerConfig from './config';
import linkService from '@apiService/linkService';

export const actions = {
    setValue: function(field, payload){
        return (dispatch, getState) => {
            dispatch({type: reducerConfig.pageId + '.' + field,payload:payload})
        }
    },
    removeLink: function (payload) {
        return (dispatch) => {
            linkService.removeLink(payload)
            .then(res => {
                dispatch(actions.fetchLinks({current:1,size:10}))
            })
        }
    },
    fetchLinks: function (payload) {
        return (dispatch, getState) => {
            dispatch(actions.setValue('loading', true));
            linkService.fetchLinks({
                currentPage: payload.current,
                pageSize: payload.size
            }).then(res => {
                dispatch(actions.setValue('loading', false));
                dispatch(actions.setValue('pageData', res.data.items));
                dispatch(actions.setValue('pagination', Object.assign({},payload,{total:parseInt(res.data.total)})));
            })
        }
    },
    dashLink: function(payload){
        return (dispatch) => {
            linkService.addLinkToDash(payload)
            .then(res => {
                dispatch(actions.fetchLinks({current:1,size:10}))
            })
        }
    }
}
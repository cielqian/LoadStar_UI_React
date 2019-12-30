import * as reducerConfig from './config';
import linkService from '@apiService/linkService';

export const actions = {
    setValue: function(field, payload){
        return (dispatch, getState) => {
            dispatch({type: reducerConfig.pageId + '.' + field,payload:payload})
        }
    },
    fetchDashLinks: function (payload) {
        return (dispatch, getState) => {
            dispatch(actions.setValue('loading', true));
            linkService.fetchDashLinks().then(res => {
                dispatch(actions.setValue('loading', false));
                dispatch(actions.setValue('dashLinks', res.data));
            })
        }
    }
}
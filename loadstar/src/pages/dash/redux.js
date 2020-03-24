import * as reducerConfig from './config';
import * as actionType from '../../redux/actionType';
import linkService from '@apiService/linkService';
import userService from '@apiService/userService';

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
            });
            userService.fetchUserInfo().then(res => {
                dispatch({type: actionType.FETCH_USERINFO, payload: res.data})
            });
        }
    }
}
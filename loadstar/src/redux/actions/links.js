import * as actionType from '../actionType';
import makeActionCreator from './actionCreator';
import { hiddenDrawer } from './common';

import axios from 'axios';

export const requestRecentLink = makeActionCreator(actionType.REQUEST_RECENT_LINK);
export const receiveRecentLink = makeActionCreator(actionType.RECEIVE_RECENT_LINK, 'payload');

export const receiveTag = makeActionCreator(actionType.RECEIVE_TAG, 'payload');
export const setTotal = makeActionCreator('setTotal', 'payload');


export function removeLink(payload){
    return (dispatch) => {
        axios.delete('/link-service/api/link/' + payload.id)
        .then(res => {
            dispatch(fetchLinks());
        });
    }
}

export function saveLink(payload) {
    return (dispatch) => {
        axios.post('/link-service/api/link', {
            "folderId": 0,
            "icon": "",
            "name": payload.name,
            "often": true,
            "tags": [],
            "title": payload.name,
            "url": payload.url
          })
        .then(res => {
            dispatch(hiddenDrawer());
            // dispatch(fetchLinks());
        });
    }
}

export function fetchLinks(payload) {
    return (dispatch) => {
        axios.get('/link-service/api/link/page', {params:{
            currentPage: payload.current,
            pageSize: payload.size
        }})
        .then(res => {
            dispatch({type:'linkPage.pageData',payload:res.data.items});
            dispatch({type:'linkPage.pagination', payload: Object.assign({},payload,{total:parseInt(res.data.total)})});
        }).catch(res => {
            dispatch(receiveRecentLink([]));
        });
    }
}

export function fetchTags(payload){
    return (dispatch) => {
        axios.get('/link-service/api/tag',{params:{keyword:payload.keyword}})
        .then(res => {
            dispatch(receiveTag(res.data));
        }).catch(res => {
            dispatch(receiveTag([]));
        });
    }
}
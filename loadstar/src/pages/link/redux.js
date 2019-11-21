import * as actionType from '../actionType';
import makeActionCreator from './actionCreator';
import { hiddenDrawer } from './common';

import axios from 'axios';

export const requestRecentLink = makeActionCreator(actionType.REQUEST_RECENT_LINK);
export const receiveRecentLink = makeActionCreator(actionType.RECEIVE_RECENT_LINK, 'payload');

export const receiveTag = makeActionCreator(actionType.RECEIVE_TAG, 'payload');


function removeLink(payload){
    return (dispatch) => {
        axios.delete('/link-service/api/link/' + payload.id)
        .then(res => {
            dispatch(fetchLinks());
        });
    }
}

function saveLink(payload) {
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
            dispatch(fetchLinks());
        });
    }
}

function fetchLinks(payload) {
    return (dispatch, getState) => {
        axios.get('/link-service/api/link/page', {params:{
            currentPage: payload.current,
            pageSize: payload.size
        }})
        .then(res => {
            dispatch(receiveRecentLink(res.data.items));
        }).catch(res => {
            // dispatch(receiveRecentLink([]));
        });
    }
}

function fetchTags(payload){
    return (dispatch) => {
        axios.get('/link-service/api/tag',{params:{keyword:payload.keyword}})
        .then(res => {
            dispatch(receiveTag(res.data));
        }).catch(res => {
            dispatch(receiveTag([]));
        });
    }
}

export const actions = {
    removeLink,
    saveLink,
    fetchLinks,
    fetchTags
}
import linkService from '@apiService/linkService';
import tagService from '@apiService/tagService';
import {pageId} from './config';
import { message } from 'antd';

export const actions = {
    setValue: function(field, payload){
        return (dispatch, getState) => {
            dispatch({type: pageId+ '.' + field,payload:payload})
        }
    },
    saveLink: function(payload) {
        return (dispatch) => {
            dispatch({type: 'HIDDEN_DRAWER',payload:false});
            linkService.saveLink(Object.assign({}, payload, {tags: payload.selectedTags.map(x => x.id)}))
            .then(res => {
                message.success('save success');
            })
        }
    },
    fetchTags: function () {
        return (dispatch) => {
            tagService.fetchTags()
            .then(res => dispatch(
                actions.setValue('tags', res.data)
            ))
        }
    },
    receiveTags: function () {
        return (dispatch) => {
            tagService.fetchTags()
            .then(res => dispatch({type:''}))
        }
    }
}
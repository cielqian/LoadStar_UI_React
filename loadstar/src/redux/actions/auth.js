import * as actionType from '../actionType';
import makeActionCreator from './actionCreator';

export const saveToken = makeActionCreator(actionType.SAVE_TOKEN, 'playload');

export const removeToken = makeActionCreator(actionType.REMOVE_TOKEN);

import * as actionType from '../actionType';
import makeActionCreator from './actionCreator';

export const hiddenDrawer = makeActionCreator(actionType.HIDDEN_DRAWER);
export const showDrawer = makeActionCreator(actionType.SHOW_DRAWER);
export const fetchTags = makeActionCreator(actionType.FETCH_TAG, 'payload');


import * as actionType from '../actionType';

const initialState = {
  drawerVisiable: false,
  tags:['1','2'],
  hoverRowIndex: 0
};

function global(state = initialState, action) {
  switch (action.type) {
    case actionType.HIDDEN_DRAWER:
      return Object.assign({}, state, {
        drawerVisiable: false
      });
    case actionType.SHOW_DRAWER:
      return Object.assign({}, state, {
        drawerVisiable: true
      });
    case 'fetchTags':
        return Object.assign({}, state, {
          tags: action.payload
      });
    case 'linkManage/upState':
      return Object.assign({}, state, {
        hoverRowIndex: action.payload.hoverIndex
      });
    default:
      return state
  }
}

export default global;
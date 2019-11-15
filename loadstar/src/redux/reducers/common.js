import * as actionType from '../actionType';

const initialState = {
  drawerVisiable: false,
  hoverRowIndex: 0
};

function common(state = initialState, action) {
  switch (action.type) {
    case actionType.HIDDEN_DRAWER:
      return Object.assign({}, state, {
        drawerVisiable: false
      });
    case actionType.SHOW_DRAWER:
      return Object.assign({}, state, {
        drawerVisiable: true
      });
    case 'linkManage/upState':
      return Object.assign({}, state, {
        hoverRowIndex: action.payload.hoverIndex
      });
    default:
      return state
  }
}

export default common;
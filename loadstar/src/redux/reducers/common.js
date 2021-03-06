import * as actionType from '../actionType';

const initialState = {
  drawerVisiable: false,
  tags:['1','2'],
  hoverRowIndex: 0,
  searchResult:[1],
  userInfo: {
    username: 'username',
    nickname: 'nickname'
  }
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
    case actionType.FETCH_USERINFO:
        return Object.assign({}, state, {
          userInfo: action.payload
      });
    case 'fetchTags':
        return Object.assign({}, state, {
          tags: action.payload
      });
    case 'golbal.searchResult':
      return Object.assign({}, state, {
        searchResult: action.payload
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
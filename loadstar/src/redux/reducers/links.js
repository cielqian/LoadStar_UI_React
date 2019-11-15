import * as actionType from '../actionType';

const initialState = {
  allLinks: [],
  recentLinks: [],
  tags:[]
};

function link(state = initialState, action) {
  switch (action.type) {
    case actionType.ADD_LINK:
      return Object.assign({}, state, {
        allLinks: [
          ...state.allLinks,
          action.payload
        ]
      });
    case actionType.RECEIVE_RECENT_LINK:
      return Object.assign({}, state, {
        recentLinks: [
          ...action.payload
        ]
      })
    case actionType.RECEIVE_TAG:
      return Object.assign({}, state, {
        tags: [
          ...action.payload
        ]
      })
    default:
      return state
  }
}

export default link;
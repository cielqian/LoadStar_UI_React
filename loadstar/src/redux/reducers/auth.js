import * as actionType from '../actionType';

const initialState = {
    token: ''
};

function token(state=initialState, action) {
    switch (action.type) {
        case actionType.SAVE_TOKEN:
          localStorage.setItem('TOKEN', action.playload);
          return Object.assign({}, state, {
            token: action.playload
          });
        case actionType.REMOVE_TOKEN:
          localStorage.removeItem('TOKEN');
          return Object.assign({}, state, {
            token: ''
          });
        default:
          return state
      }
}

export default token;
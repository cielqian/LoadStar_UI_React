import { combineReducers } from 'redux'

import auth from './auth'
import common from './common'
import links from './links'
import linkPage from '../../pages/link/reducer'
import tagPage from '../../pages/tag/redux'

function loadApp(state = {pages:{}}, action) {
  return {
    auth: auth(state.auth, action),
    common: common(state.common, action),
    links: links(state.links2, action),
    pages: {
      linkPage:linkPage(state.pages.linkPage, action),
      tagPage:tagPage(state.pages.tagPage, action),
    }
  }
}

const rootReducer = combineReducers({ loadstar: loadApp });

export default rootReducer
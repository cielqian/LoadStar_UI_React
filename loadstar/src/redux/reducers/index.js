import { combineReducers } from 'redux'

import auth from './auth'
import common from './common'
import links from './links'
import pages from '../../pages/link/reducer'

function loadApp(state = {}, action) {
  return {
    auth: auth(state.auth, action),
    common: common(state.common, action),
    links: links(state.links2, action),
    pages: pages(state.pages, action)
  }
}

const rootReducer = combineReducers({ loadstar: loadApp });

export default rootReducer
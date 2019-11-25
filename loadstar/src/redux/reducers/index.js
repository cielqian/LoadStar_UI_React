import { combineReducers } from 'redux'

import auth from './auth'
import common from './common'
import links from './links'
import linkPage from '../../pages/link/reducer'
import tagPage from '../../pages/tag/redux'
import searchPage from '../../pages/search/redux'

function loadApp(state = {pages:{}}, action) {
  return {
    auth: auth(state.auth, action),
    global: common(state.common, action),
    // links: links(state.links2, action),
    pages: {
      linkPage: linkPage(state.pages.linkPage, action),
      tagPage: tagPage(state.pages.tagPage, action),
      searchResultPage: searchPage(state.pages.searchResultPage, action),
    }
  }
}

const rootReducer = combineReducers({ loadstar: loadApp });

export default rootReducer
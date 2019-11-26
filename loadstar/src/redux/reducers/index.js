import { combineReducers } from 'redux'

import * as boot from '../../kernal/boot';

import auth from './auth'
import common from './common'
import searchPage from '../../pages/search/redux'
import genericReducer from '../reducers/genericReducer'



const cfgs = boot.buildReducers();

function loadApp(state = {pages:{}}, action) {
  let pageState = {};
  cfgs.forEach(cfg => {
    pageState[cfg.pageId] = genericReducer(cfg)(state.pages[cfg.pageId], action)
  });

  return {
    auth: auth(state.auth, action),
    global: common(state.common, action),
    // links: links(state.links2, action),
    pages: {
      // linkPage: linkPage(state.pages.linkPage, action),
      // tagPage: tagPage(state.pages.tagPage, action),
      searchResultPage: searchPage(state.pages.searchResultPage, action),
      ...pageState
    }
  }
}



const rootReducer = combineReducers({ loadstar: loadApp });

export default rootReducer
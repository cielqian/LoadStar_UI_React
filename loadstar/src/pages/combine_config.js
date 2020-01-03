import * as LinkPage from './link/config';
import * as DashPage from './dash/config';
import * as SearchPage from './search/config';
import _ from 'lodash';

export default _.concat(LinkPage, SearchPage, DashPage);
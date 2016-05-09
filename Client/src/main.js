import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import { Router, Route, IndexRoute, Link, hashHistory, browserHistory } from 'react-router';

import {Header, Footer} from './components';
// require('./components/Header/Header.less');

const App = React.createClass({
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    )
  }
})


render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      {/*<IndexRoute component={} />*/}
      {/*<Route path="about" component={} />*/}
      {/*<Route path="inbox" component={} />*/}
    </Route>
  </Router>
), document.getElementById('root'));

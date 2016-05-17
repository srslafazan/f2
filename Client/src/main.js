import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import { Router, Route, IndexRoute, Link, hashHistory, browserHistory } from 'react-router';

import {Footer, Header, Hero} from './components';
import {Home, About, Program, Involve} from './pages';


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
      <IndexRoute component={Home} />
      <Route path="about" component={About} />
      <Route path="program" component={Program} />
      <Route path="involve" component={Involve} />
    </Route>
  </Router>
), document.getElementById('root'));

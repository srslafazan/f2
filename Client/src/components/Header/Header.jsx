import React, {Component} from 'react';
import {Link} from 'react-router';
// import {Button} from 'react-bootstrap';
import s from './Header.less';

const Header = React.createClass({
  logo() {
    return (
      <Link to={'/'}>
        <img className={s.logo} src='../assets/LogoOrange.png'/>
      </Link>
    );
  },
  nav() {
    return (
      <ul className={s.linkList}>
        <li className={s.item}><Link className={s.link} to={'about'}>About Us</Link></li>
        <li className={s.item}><Link className={s.link} to={'program'}>Our Program</Link></li>
        <li className={s.item}><Link className={s.link} to={'involve'}>Get Involved</Link></li>
        <li className={s.item}><Link className={s.link} to={'login'}>Log In</Link></li>
      </ul>
    );
  },

  render() {
    const logo = this.logo();
    const nav = this.nav();
    return (
      <div className={s.root}>
        {logo}
        {nav}
      </div>
    );
  }
});

export default Header;

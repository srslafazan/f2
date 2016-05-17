import React, {Component} from 'react';
import {Link} from 'react-router';
import s from './Footer.less';

const Footer = React.createClass({
  render() {
    return (
      <div className={s.root}>
        <ul className={s.list}>
          <li>&copy; 2016 Forte Academy, Inc.</li>
          <li>&bull;</li>
          <li><Link className={s.link} to={'terms'}>Terms & Privacy</Link></li>
          <li>&bull;</li>
          <li><Link className={s.link} to={'contact'}>Contact Us</Link></li>
        </ul>
        <p className={s.lowerText}>Forte Academy, Inc. is a 503(c)(3) nonprofit organization.</p>
      </div>
    );
  }
});

export default Footer;

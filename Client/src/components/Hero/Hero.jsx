import React from 'react';
import {Button, Carousel} from 'react-bootstrap';
import s from './Hero.less';


const Hero = React.createClass({

  text() {
    return (
      <p className={s.text}>
        We connect under-served youth with experienced musicians to provide access to affordable music lessons.
      </p>
    );
  },

  buttons() {
    return (
      <div className={s.buttons}>
        <Button>Learn</Button>
        <Button>Teach</Button>
      </div>
    )
  },


  render() {


    return (
      <div className={s.root}>
        {this.text()}
        {this.buttons()}
      </div>
    );
  },
});

export default Hero;

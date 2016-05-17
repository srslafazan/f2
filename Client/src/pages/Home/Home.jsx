import React from 'react';
import {Row, Col} from 'react-bootstrap';
import {ForteCarousel, Hero} from '../../components';
import s from './Home.less';

const Home = React.createClass({

  lowerText() {

    return (
      <Row className={s.lowerText}>
        <Col xs={4}>
          <h2 className={s.heading}>Our Mission</h2>
          <p className={s.text}>To democratize music education and empower youth to discover, learn, and love music.</p>
        </Col>
        <Col xs={4}>
          <h2 className={s.heading}>How It Works</h2>
          <p className={s.text}>Our teachers provide deeply discounted private instruction to under-served youth in the bay area.</p>
        </Col>
        <Col xs={4}>
          <h2 className={s.heading}>Get Involved</h2>
          <p className={s.text}>Teach our students, learn an instrument, or donate to our cause.</p>
        </Col>
      </Row>
    );
  },

  render() {
    return (
      <div className={s.root}>
        <Hero />
        <ForteCarousel />
        {this.lowerText()}
      </div>
    );
  },
});

export default Home;

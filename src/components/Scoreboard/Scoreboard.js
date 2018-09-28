import PropTypes from 'prop-types';
import React from 'react';
import './Scoreboard.css';

const Scoreboard = props => (
  <div>
    <p>Score: {props.score}</p>
    <p>Top Score: {props.topScore}</p>
  </div>
);

export default Scoreboard;

Scoreboard.propTypes = {
  score: PropTypes.number.isRequired,
  topScore: PropTypes.number.isRequired,
};

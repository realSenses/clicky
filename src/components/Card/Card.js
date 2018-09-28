import PropTypes from 'prop-types';
import React from 'react';
import './Card.css';

const Card = props => (
  <div
    onClick={() => props.handleClick(props.id)} // props.id
    className="card"
    role="presentation"
  >
    <div className="content">
      <img alt={props.image} src={props.image} />
      {/* <strong>ID:</strong> {props.id} */}
    </div>
  </div>
);

Card.propTypes = {
  id: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
};

export default Card;

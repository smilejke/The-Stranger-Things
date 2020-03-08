import React from 'react';
import '../../../../index.css';
import { Link } from 'react-router-dom';

function HoverButton(props) {
  return (
    <Link to={`cast/${props.urlData.id}`}>
      <button className='a-button'>
        <span>Read more</span>
      </button>
    </Link>
  );
}
export default HoverButton;

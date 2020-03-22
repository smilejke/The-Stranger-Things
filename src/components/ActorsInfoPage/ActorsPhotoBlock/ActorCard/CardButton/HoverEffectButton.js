import React from 'react';
import '../../../../../index.css';
import { Link, useRouteMatch } from 'react-router-dom';

function HoverButton(props) {
  const {
    urlData: { id },
  } = props;

  let { url } = useRouteMatch();

  return (
    <Link to={`${url}/${id}`}>
      <button className='a-button'>
        <span>Read more</span>
      </button>
    </Link>
  );
}

export default HoverButton;

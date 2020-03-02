import React from 'react';
import '../../../index.css';

function ListItem(props) {
  return (
    <li>
      {props.options.text} {props.options.description}
    </li>
  );
}
export default ListItem;

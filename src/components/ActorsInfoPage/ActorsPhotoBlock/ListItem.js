import React from 'react';
import '../../../index.css';

function ListItem(props) {
  const {
    options: { text, description },
  } = props;

  return (
    <li>
      {text} {description}
    </li>
  );
}
export default ListItem;

import React from 'react';
import { Checkbox } from 'antd';
import { Link, useRouteMatch } from 'react-router-dom';

function FilerCheckbox(props) {
  const { category, adress, select, getData, text } = props.options;
  let match = useRouteMatch();

  const action = function() {
    if (category) {
      return null;
    } else {
      select(!category);
      getData();
    }
  };

  return (
    <Link to={`${match.url}/${adress}`}>
      <Checkbox onChange={action} checked={category}>
        <span onClick={action}>{text}</span>
      </Checkbox>
    </Link>
  );
}

export default FilerCheckbox;

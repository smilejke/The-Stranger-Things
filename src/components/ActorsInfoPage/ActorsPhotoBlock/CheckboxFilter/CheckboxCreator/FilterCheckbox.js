import React from 'react';
import { Checkbox } from 'antd';
import { Link, useRouteMatch } from 'react-router-dom';

function FilerCheckbox(props) {
  const { adress, flag, select, getData, text } = props.options;
  let match = useRouteMatch();

  const action = function() {
    if (flag) {
      return null;
    } else {
      select(!flag);
      getData();
    }
  };

  return (
    <Link to={`${match.url}/${adress}`}>
      <Checkbox onChange={action} checked={flag}>
        <span onClick={action}>{text}</span>
      </Checkbox>
    </Link>
  );
}

export default FilerCheckbox;

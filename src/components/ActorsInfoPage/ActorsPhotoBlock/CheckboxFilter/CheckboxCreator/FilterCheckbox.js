import React from 'react';
import { Checkbox } from 'antd';

function FilerCheckbox(props) {
  const { flag, select, getData, text } = props.options;

  const action = function() {
    if (flag) {
      return null;
    } else {
      select(!flag);
      getData();
    }
  };

  return (
    <Checkbox onChange={action} checked={flag}>
      <span onClick={action}>{text}</span>
    </Checkbox>
  );
}

export default FilerCheckbox;

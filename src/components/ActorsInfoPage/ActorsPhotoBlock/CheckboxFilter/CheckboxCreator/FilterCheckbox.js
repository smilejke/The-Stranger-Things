import React from 'react';
import { Checkbox } from 'antd';

function FilerCheckbox(props) {
  const { flag, select, getData, text } = props.options;

  return (
    <Checkbox
      onChange={() => {
        if (flag) {
          return null;
        } else {
          select(!flag);
          getData();
        }
      }}
      checked={flag}
    >
      {text}
    </Checkbox>
  );
}

export default FilerCheckbox;

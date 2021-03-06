import React from 'react';

function SerialDescription(props) {
  return (
    <div className='content-width serial-description'>
      {props.description.map((p) => {
        return <p key={'paragraph' + props.description.indexOf(p)}>{p}</p>;
      })}
    </div>
  );
}
export default SerialDescription;

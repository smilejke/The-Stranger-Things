import React from 'react';

function GreetTittle(props) {
  const { biggie, smallie } = props.header;
  return (
    <div className='content-width'>
      <h2>{biggie}</h2>
      <h4>{smallie}</h4>
    </div>
  );
}

export default GreetTittle;

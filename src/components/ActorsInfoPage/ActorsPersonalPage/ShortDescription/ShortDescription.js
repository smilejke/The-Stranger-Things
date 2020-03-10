import React from 'react';

function ShortDescription(props) {
  const { height, date, birthplace } = props.shortDescr;
  return (
    <div className='short-description'>
      <ul>
        <li>Рост: {height}</li>
        <li>Дата рождения: {date}</li>
        <li>Место рождения: {birthplace}</li>
      </ul>
    </div>
  );
}
export default ShortDescription;

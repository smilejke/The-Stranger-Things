import React from 'react';
import { HeaderText } from '../../../../global/utils/global.js';

function Filmography(props) {
  const films = props.films;
  const { filmographyHeader } = HeaderText;

  return (
    <div className='filmography'>
      <h3>{filmographyHeader} </h3>

      <div className='actor-profile-text-decorator'>
        <ul>
          {films.map((film) => {
            return <li key={'film' + films.indexOf(film)}>{film}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
export default Filmography;

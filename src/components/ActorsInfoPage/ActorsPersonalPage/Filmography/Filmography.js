import React from 'react';

function Filmography(props) {
  const films = props.films;

  return (
    <div className='filmography'>
      <h3>Фильмография: </h3>

      <div className='actor-profile-text-decorator'>
        <ol>
          {films.map((film) => {
            return <li key={'film' + films.indexOf(film)}>{film}</li>;
          })}
        </ol>
      </div>
    </div>
  );
}
export default Filmography;

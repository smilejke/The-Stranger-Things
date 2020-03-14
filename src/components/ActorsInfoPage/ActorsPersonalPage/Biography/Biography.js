import React from 'react';

function Biography(props) {
  const paragraphs = props.bio;
  return (
    <div className='actor-biography'>
      <h3>Биография: </h3>
      <div className='actor-profile-text-decorator biography'>
        {paragraphs.map((paragraph) => {
          return <p key={'par' + paragraphs.indexOf(paragraph)}>{paragraph}</p>;
        })}
      </div>
    </div>
  );
}
export default Biography;

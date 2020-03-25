import React from 'react';
import { HeaderText } from '../../../../global/utils/global.js';

function Biography(props) {
  const paragraphs = props.bio;
  const { biographyHeader } = HeaderText;
  return (
    <div className='actor-biography'>
      <h3>{biographyHeader} </h3>
      <div className='actor-profile-text-decorator biography'>
        {paragraphs.map((paragraph) => {
          return <p key={'par' + paragraphs.indexOf(paragraph)}>{paragraph}</p>;
        })}
      </div>
    </div>
  );
}
export default Biography;

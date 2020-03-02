import React from 'react';

import PhotoBlock from '../ActorsPhotoBlock/PhotoBlock.js';

function actorsPageContent(props) {
  const actorsCards = props.data;
  return (
    <div className='actors-layout-contentBox'>
      <div className='photoblock'>{<PhotoBlock data={actorsCards} />}</div>
    </div>
  );
}

export default actorsPageContent;

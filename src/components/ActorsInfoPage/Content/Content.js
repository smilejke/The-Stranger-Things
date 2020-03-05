import React from 'react';

import PhotoBlockContainer from '../ActorsPhotoBlock/PhotoBlock/PhotoBlockContainer.js';

function actorsPageContent() {
  return (
    <div className='actors-layout-contentBox'>
      <div className='photoblock'>{<PhotoBlockContainer />}</div>
    </div>
  );
}

export default actorsPageContent;

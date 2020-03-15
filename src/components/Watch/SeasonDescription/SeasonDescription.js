import React from 'react';
import DescriptionInfoBlock from './DescriptionInfoBlock/DescripionInfoBlock.js';
import { seasonImageStyles } from '../../../global/global.js';

function SeasonDescription(props) {
  const firstImageBlockData = props.description[0];
  const secondImageBlockData = props.description[1];
  const thirdImageBlockData = props.description[2];

  const { first, second, third } = seasonImageStyles;

  return (
    <div className='season-description-main-container'>
      <h2>Описание:</h2>
      <DescriptionInfoBlock blockInfo={firstImageBlockData} imageOptions={first} />
      <DescriptionInfoBlock blockInfo={secondImageBlockData} imageOptions={second} />
      <DescriptionInfoBlock blockInfo={thirdImageBlockData} imageOptions={third} />
    </div>
  );
}

export default SeasonDescription;

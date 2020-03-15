import React from 'react';
import { Rate } from 'antd';

function WatchHeader(props) {
  const {
    img: { src, alt },
    headerTitle: { header, date, allVotes, totalRank, roles },
  } = props.header;

  return (
    <div className='watch-header'>
      <div className='watch-header-picture'>
        <img src={src} alt={alt}></img>
      </div>

      <div className='watch-header-content'>
        <div className='header-season'>
          <h2>{header}</h2>
          <p>{date}</p>
        </div>

        <div>
          <div className='rate'>
            <div className='rate-stars'>
              <Rate defaultValue={5} className='stars' />
              <span>Всего голосов: {allVotes}</span>
            </div>

            <span className='rate-number'>{totalRank}</span>
          </div>
        </div>

        <div className='season-block-header-roles'>
          <h2>В ролях:</h2>
          <p>{roles}</p>
        </div>
      </div>
    </div>
  );
}

export default WatchHeader;

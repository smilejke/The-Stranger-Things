import React from 'react';
import { Rate } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { vote } from '../../../store/Watch/actions.js';

function WatchHeader(props) {
  const { totalVotes, totalRank, toVote, voted } = props;

  const {
    img: { src, alt },
    headerTitle: { header, date, roles },
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
              <Rate
                className='stars'
                count={10}
                allowHalf={true}
                disabled={voted ? true : false}
                onChange={(e) => {
                  if (!voted) {
                    toVote(e);
                  }
                }}
              />
              <span>Всего голосов: {totalVotes}</span>
            </div>

            <span className='rate-number'>{totalRank.toFixed(1)}</span>
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

const mapStateToProps = (state) => {
  return {
    totalVotes: state.getSerialEpisodesData.totalVotes,
    totalRank: state.getSerialEpisodesData.totalRank,
    voted: state.getSerialEpisodesData.voted,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toVote: bindActionCreators(vote, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WatchHeader);

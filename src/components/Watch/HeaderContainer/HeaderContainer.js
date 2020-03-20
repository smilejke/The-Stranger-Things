import React, { useEffect } from 'react';
import { Rate } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useParams } from 'react-router-dom';
import { vote, getVotes } from '../../../store/Watch/actions.js';

function WatchHeader(props) {
  const { voteCount, rank, toVote, voted, getVotes } = props;
  const { id } = useParams();

  useEffect(() => {
    const { totalVotes, totalRank, marks } = props.header.headerTitle;

    getVotes(totalVotes, totalRank, marks);
  }, [getVotes, props.header.headerTitle]);

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
                defaultValue={0}
                disabled={voted ? true : false}
                onChange={(e) => {
                  const rank = {
                    rank: e,
                    id: Date.now(),
                  };
                  fetch(`http://localhost:3001/votes-${id}`, {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json; charset=utf-8',
                    },
                    body: JSON.stringify(rank),
                  });
                  toVote(e);
                }}
              />
              <span>Всего голосов: {voteCount}</span>
            </div>

            <span className='rate-number'>{rank.toFixed(1)}</span>
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
    voteCount: state.getSerialEpisodesData.totalVotes,
    rank: state.getSerialEpisodesData.totalRank,
    marks: state.getSerialEpisodesData.marks,
    voted: state.getSerialEpisodesData.voted,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toVote: bindActionCreators(vote, dispatch),
    getVotes: bindActionCreators(getVotes, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WatchHeader);

import React from 'react';
import { Rate } from 'antd';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { sendDataToServer } from '../../../store/Watch/actions.js';
import { bindActionCreators } from 'redux';
import { success } from '../../../global/global.js';

function WatchHeader(props) {
  const { voted, voteCount, rank, sendDataToServer } = props;
  const { id } = useParams();

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
                  sendDataToServer(e, id, success);
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
    voteCount: state.getSerialEpisodesData.voteCount,
    rank: state.getSerialEpisodesData.rank,
    marks: state.getSerialEpisodesData.marks,
    voted: state.getSerialEpisodesData.voted,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendDataToServer: bindActionCreators(sendDataToServer, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WatchHeader);

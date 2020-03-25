import React from 'react';
import { Rate } from 'antd';
import { success } from '../../../../global/utils/global.js';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { sendDataToServer } from '../../../../store/Watch/actions.js';
import { bindActionCreators } from 'redux';

function RateSeason(props) {
  const { voted, voteCount, rank, sendDataToServer } = props;
  const { id } = useParams();

  return (
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
  );
}

const mapStateToProps = (state) => {
  return {
    voteCount: state.seasons.voteCount,
    rank: state.seasons.rank,
    marks: state.seasons.marks,
    voted: state.seasons.voted,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendDataToServer: bindActionCreators(sendDataToServer, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RateSeason);

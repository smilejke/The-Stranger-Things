import React from 'react';
import '../../../../index.css';
import { Link } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { getActorsData } from '../../../../store/Actor/actions.js';

function HoverButton(props) {
  const {
    urlData: { id },
  } = props;

  const dispatch = useDispatch();

  return (
    <Link to={`/profile/${id}`}>
      <button
        className='a-button'
        onClick={() => {
          dispatch(getActorsData(id));
        }}
      >
        <span>Read more</span>
      </button>
    </Link>
  );
}

const mapStateToProps = (state) => {
  return {
    currentActorId: state.getActor.currentActorId,
    profileToSearch: state.getActor.profileToSearch,
  };
};

export default connect(mapStateToProps)(HoverButton);

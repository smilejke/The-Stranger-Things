import React from 'react';
import '../../../../index.css';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getCurrentActor } from '../../../../store/Actor/actions.js';

function HoverButton(props) {
  const {
    getActor,
    urlData: { id },
  } = props;

  return (
    <Link to={`/profile/${id}`}>
      <button
        className='a-button'
        onClick={() => {
          getActor(props.urlData);
        }}
      >
        <span>Read more</span>
      </button>
    </Link>
  );
}

const mapStateToProps = (state) => {
  return {
    actor: state.getActor.actor,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getActor: bindActionCreators(getCurrentActor, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HoverButton);

import React from 'react';
import '../../../../index.css';
import ActorInfoList from './ActorInfoList.js';
import HoverButton from './HoverEffectButton.js';
import { Link } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { getActorsData } from '../../../../store/Actor/actions.js';
import { startLoading, stopLoading } from '../../../../store/Layout/actions.js';

function Card(props) {
  const {
    img: { src, alt },
    id,
  } = props.options;
  const identificator = props.options.id;

  const dispatch = useDispatch();

  return (
    <div className='actor-photo'>
      {' '}
      <Link to={`/actor-profiles/${id}`}>
        <img
          className='img-actor'
          src={src}
          alt={alt}
          onClick={() => {
            dispatch(getActorsData(id, startLoading, stopLoading));
          }}
        />
      </Link>
      <ActorInfoList key={identificator} info={props.options} />
      <HoverButton urlData={props.options} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    currentActorId: state.getActor.currentActorId,
    profileToSearch: state.getActor.profileToSearch,
    loading: state.layout.loading,
  };
};

export default connect(mapStateToProps)(Card);

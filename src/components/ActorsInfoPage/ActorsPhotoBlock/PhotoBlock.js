import React from 'react';
import '../../../index.css';
import Card from './Card.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { uploadInfoForRenderCards } from '../../../store/ActorsCards/actions.js';

class PhotoBlock extends React.Component {
  componentDidMount() {
    const reqURL = 'http://localhost:3001/actors';
    const { uploadCards } = this.props;

    fetch(reqURL)
      .then((response) => response.json())
      .then((data) => uploadCards(data));
  }

  render() {
    const { actorCards } = this.props;

    return (
      <div className='photo-section'>
        <div className='actor-container'>
          {actorCards.map((el) => {
            return <Card key={el.id} options={el} />;
          })}
        </div>
      </div>
    );
  }
}

const putStateToActorsProps = (state) => {
  return {
    actorCards: state.addCardInfo.actorCards,
  };
};

const putActionsToActorsProps = (dispatch) => {
  return {
    uploadCards: bindActionCreators(uploadInfoForRenderCards, dispatch),
  };
};

export default connect(putStateToActorsProps, putActionsToActorsProps)(PhotoBlock);

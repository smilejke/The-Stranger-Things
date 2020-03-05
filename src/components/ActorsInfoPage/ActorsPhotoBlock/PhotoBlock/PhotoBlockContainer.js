import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { uploadInfoForRenderCards } from '../../../../store/ActorsCards/actions.js';
import PhotoBlock from './PhotoBlock.js';

class PhotoBlockContainer extends React.Component {
  componentDidMount() {
    const { uploadCards } = this.props;

    fetch('http://localhost:3001/actors')
      .then((response) => response.json())
      .then((data) => uploadCards(data));
  }

  render() {
    const { actorCards } = this.props;
    return <PhotoBlock data={actorCards} />;
  }
}

const mapStateToProps = (state) => {
  return {
    actorCards: state.addCardInfo.actorCards,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    uploadCards: bindActionCreators(uploadInfoForRenderCards, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotoBlockContainer);

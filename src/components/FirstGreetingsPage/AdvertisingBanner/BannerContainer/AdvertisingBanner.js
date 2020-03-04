import React from 'react';
import '../../../../index.css';
import AvertisingLine from '../BannerLine/AdvBannerLiner.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { uploadInfoForRenderBanner } from '../../../../store/LiquidBanner/actions.js';

class AdvertisingBanner extends React.Component {
  componentDidMount() {
    const reqURL = 'http://localhost:3001/banner';
    const { uploadBackgrounds } = this.props;

    fetch(reqURL)
      .then((response) => response.json())
      .then((data) => uploadBackgrounds(data));
  }

  render() {
    const { backgroundImages } = this.props;

    return (
      <div className='container'>
        {backgroundImages.map((season) => {
          return <AvertisingLine key={season.id} background={season} />;
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    backgroundImages: state.addBannerBackground.backgroundImages,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    uploadBackgrounds: bindActionCreators(uploadInfoForRenderBanner, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdvertisingBanner);

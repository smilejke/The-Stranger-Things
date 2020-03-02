import React from 'react';
import '../../../../index.css';
import AvertisingLine from '../BannerLine/AdvBannerLiner.js';

class AdvertisingBanner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seasonImg: this.props.background,
    };
    this.reqURL = 'http://localhost:3001/banner';
  }
  componentDidMount() {
    fetch(this.reqURL)
      .then((response) => response.json())
      .then((data) => this.setState({ seasonImg: data }));
  }
  render() {
    return (
      <div className='container'>
        {this.state.seasonImg.map((season) => {
          return <AvertisingLine key={season.id} background={season} />;
        })}
      </div>
    );
  }
}
export default AdvertisingBanner;

import React from 'react';
import { Layout } from 'antd';
import AdvertisingBanner from '../AdvertisingBanner/BannerContainer/AdvertisingBanner.js';

const { Content } = Layout;

class GreetingsPage extends React.Component {
  render() {
    const backgroundImages = this.props.data;

    return (
      <Content style={{ padding: '0 50px' }}>
        <div style={{ background: '#fff', margin: '16px 0' }}>
          <AdvertisingBanner background={backgroundImages} />
        </div>
      </Content>
    );
  }
}

export default GreetingsPage;

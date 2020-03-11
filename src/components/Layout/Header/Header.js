import React from 'react';
import { Typography, Layout } from 'antd';
import '../../../index.css';

const { Header } = Layout;
const { Title } = Typography;

function ActorsPageHeader(props) {
  return (
    <Header className='actors-layout-header'>
      <Title level={2} className='actors-layout-header-title'>
        {props.text}
      </Title>
    </Header>
  );
}

export default ActorsPageHeader;

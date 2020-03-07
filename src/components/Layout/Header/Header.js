import React from 'react';
import { Typography } from 'antd';
import '../../../index.css';

const { Title } = Typography;

function ActorsPageHeader(props) {
  return (
    <Title level={2} className='actors-layout-header-title'>
      {props.text}
    </Title>
  );
}

export default ActorsPageHeader;

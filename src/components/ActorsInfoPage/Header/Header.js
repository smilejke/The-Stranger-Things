import React from 'react';
import { Typography } from 'antd';
import '../../../index.css';

const { Title } = Typography;

function ActorsPageHeader(props) {
  const { greetings, actors, watch } = props.flag;
  return (
    <Title level={2} className='actors-layout-header-title'>
      {greetings
        ? 'Welcome to Hawkins!'
        : actors
        ? 'The Stranger Things cast'
        : watch
        ? 'Watch the serial'
        : null}
    </Title>
  );
}

export default ActorsPageHeader;

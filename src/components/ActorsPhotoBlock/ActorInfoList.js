import React from 'react';
import '../../index.css';

function ActorInfoList(props) {
  const { name, born, age, from, role } = props.info;
  return (
    <ul>
      <li>{'Name: ' + name}</li>
      <li>{'Born: ' + born}</li>
      <li>{'Age: ' + age}</li>
      <li>{'From: ' + from}</li>
      <li>{'Role: ' + role}</li>
    </ul>
  );
}
export default ActorInfoList;

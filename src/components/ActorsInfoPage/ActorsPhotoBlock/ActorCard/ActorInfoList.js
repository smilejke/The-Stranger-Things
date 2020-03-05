import React from 'react';
import '../../../../index.css';
import ListItem from './ListItem.js';
import nanoid from 'nanoid';

function ActorInfoList(props) {
  const { name, born, age, from, role } = props.info;
  const listItem = [
    { text: 'Name: ', description: name, id: nanoid() },
    { text: 'Born: ', description: born, id: nanoid() },
    { text: 'Age: ', description: age, id: nanoid() },
    { text: 'From: ', description: from, id: nanoid() },
    { text: 'Role: ', description: role, id: nanoid() },
  ];
  return (
    <ul>
      {listItem.map((el) => {
        return <ListItem key={el.id} options={el} />;
      })}
    </ul>
  );
}
export default ActorInfoList;

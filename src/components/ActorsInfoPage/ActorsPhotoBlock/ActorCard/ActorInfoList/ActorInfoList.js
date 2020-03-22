import React from 'react';
import '../../../../../index.css';
import ListItem from '../ActorInfoListItemCreator/ListItem.js';

function ActorInfoList(props) {
  const { name, born, age, from, role } = props.info;

  const listItem = [
    { text: 'Name: ', description: name, id: name },
    { text: 'Born: ', description: born, id: born },
    { text: 'Age: ', description: age, id: age },
    { text: 'From: ', description: from, id: from },
    { text: 'Role: ', description: role, id: role },
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

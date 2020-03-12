import React from 'react';

function SerialAnatomy(props) {
  const { image, paragraphs } = props.data;
  return (
    <div className='anatomy-container'>
      <h2>Анатомия сериала: "Очень странные дела"</h2>
      <img src={image.src} alt={image.alt}></img>
      {paragraphs.map((p) => {
        return <p key={'anatomy' + paragraphs.indexOf(p)}>{p}</p>;
      })}
    </div>
  );
}

export default SerialAnatomy;

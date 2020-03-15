import React from 'react';

function DescriptionInfoBlock(props) {
  const {
    image: { src, alt },
    paragraphs,
  } = props.blockInfo;
  const imgParams = props.imageOptions;

  return (
    <div>
      <img src={src} alt={alt} className={imgParams} />
      {paragraphs.map((p) => {
        return <p key={'blockParagraph' + Math.random()}>{p}</p>;
      })}
    </div>
  );
}

export default DescriptionInfoBlock;

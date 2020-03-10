import { Carousel } from 'antd';
import React from 'react';

// function onChange(a, b, c) {
//   console.log(a, b, c);
// }

function ActorCarousel(props) {
  if (props.actor === null) return <div>Image is not found</div>;

  const {
    img: { image1, image2, image3, image4 },
  } = props.actor;

  return (
    <Carousel>
      <div>
        <img src={image1.src} alt={image1.alt}></img>
      </div>
      <div>
        <img src={image2.src} alt={image2.alt}></img>
      </div>

      <div>
        <img src={image3.src} alt={image3.alt}></img>
      </div>
      <div>
        <img src={image4.src} alt={image4.alt}></img>
      </div>
    </Carousel>
  );
}

export default ActorCarousel;

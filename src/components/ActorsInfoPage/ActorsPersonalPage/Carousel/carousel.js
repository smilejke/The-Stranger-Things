import { Carousel } from 'antd';
import React from 'react';

function ActorCarousel(props) {
  if (props.actor === null) return <div>Image is not found</div>;

  const {
    img: { image1, image2, image3, image4 },
  } = props.actor;
  const carouselData = [image1, image2, image3, image4];

  return (
    <Carousel>
      {carouselData.map((image) => {
        return (
          <div key={'carouselImage' + carouselData.indexOf(image)}>
            <img src={image.src} alt={image.alt}></img>
          </div>
        );
      })}
    </Carousel>
  );
}

export default ActorCarousel;

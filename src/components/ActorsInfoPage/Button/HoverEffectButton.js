import React from 'react';
import '../../../index.css';

function HoverButton(props) {
  const isVisible = props.indicator;
  return (
    <div className='button_cont'>
      <a
        className={isVisible ? 'a-button a-button-shown' : 'a-button a-button-hidden'}
        href='...'
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        <span>Read more</span>
      </a>
    </div>
  );
}
export default HoverButton;

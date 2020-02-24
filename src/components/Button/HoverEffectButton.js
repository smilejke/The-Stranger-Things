import React from 'react';
import '../../index.css';

function HoverButton() {
  return (
    <div className='button_cont' align='center'>
      <a
        className='a-button'
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

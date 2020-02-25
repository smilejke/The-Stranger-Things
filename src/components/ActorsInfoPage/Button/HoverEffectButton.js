import React from 'react';
import '../../../index.css';

function HoverButton(props) {
  const isVisible = props.indicator;
  return (
    <div className='button_cont' align='center'>
      <a
        className='a-button'
        style={{ opacity: isVisible ? '1' : '0' }}
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

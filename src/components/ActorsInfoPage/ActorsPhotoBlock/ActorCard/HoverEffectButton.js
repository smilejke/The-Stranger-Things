import React from 'react';
import '../../../../index.css';

function HoverButton() {
  const stayHere = (e) => {
    e.preventDefault();
  };

  return (
    <div className='button_cont'>
      <a className='a-button' href='...' onClick={stayHere}>
        <span>Read more</span>
      </a>
    </div>
  );
}
export default HoverButton;

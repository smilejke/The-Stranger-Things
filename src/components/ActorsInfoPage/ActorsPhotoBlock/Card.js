import React from 'react';
import '../../../index.css';
import ActorInfoList from './ActorInfoList.js';
import HoverButton from '../Button/HoverEffectButton.js';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onHover: false,
    };
    this.handleHoverImage = this.handleHoverImage.bind(this);
  }
  handleHoverImage() {
    this.setState({
      onHover: !this.state.onHover,
    });
  }
  render() {
    const {
      img: { src, alt },
      id,
    } = this.props.options;

    return (
      <div
        className='actor-photo'
        onMouseEnter={this.handleHoverImage}
        onMouseLeave={this.handleHoverImage}
      >
        {' '}
        <img
          className='img-actor'
          style={{
            transform: this.state.onHover ? 'translateY(-20px)' : '',
          }}
          src={src}
          alt={alt}
        />
        <ActorInfoList key={id} info={this.props.options} />
        <HoverButton indicator={this.state.onHover} />
      </div>
    );
  }
}
export default Card;
import React from 'react';
import '../../index.css';

class Block extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onHover: false,
    };
    this.handleHover = this.handleHover.bind(this);
  }
  render() {
    const {
      img: { src },
    } = this.props.background;
    const srcDef = 'https://i.pinimg.com/originals/f9/17/2c/f9172c0ecd76d38961986844b80355ac.png';

    return (
      <div
        className='transition-background'
        style={{
          backgroundImage: `url(${this.state.onHover ? src : srcDef})`,
          backgroundSize: 'cover',
          height: this.state.onHover ? '300px' : '100px',
        }}
        onMouseOver={this.handleHover}
        onMouseOut={this.handleHover}
      >
        {/* <div className='headling' style={{ top: this.state.onHover ? '15vh' : '1vh' }}>
          <h2>{this.props.text}</h2>
        </div> */}
      </div>
    );
  }
  handleHover() {
    this.setState({
      onHover: !this.state.onHover,
    });
  }
}
export default Block;

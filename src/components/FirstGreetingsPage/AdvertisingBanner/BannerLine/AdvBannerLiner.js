import React from 'react';
import '../../../../index.css';

class Block extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onHover: false,
    };
    this.handleHover = this.handleHover.bind(this);
  }

  handleHover() {
    this.setState({
      onHover: !this.state.onHover,
    });
  }

  render() {
    const {
      img: { src },
      defaultImage,
    } = this.props.background;

    return (
      <div
        className='transition-background'
        style={{
          backgroundImage: `url(${this.state.onHover ? src : defaultImage})`,
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
}
export default Block;

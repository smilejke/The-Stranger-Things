import React from 'react';
import '../../index.css';

class Block extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onHover: false,
    };
    this.handleHoverOn = this.handleHoverOn.bind(this);
    this.handleHoverOff = this.handleHoverOff.bind(this);
  }
  render() {
    return (
      <div
        className='add-transition'
        style={{
          background: this.props.color,
          height: this.state.onHover ? '400px' : '150px',
        }}
        onMouseOver={this.handleHoverOn}
        onMouseOut={this.handleHoverOff}
      >
        <div className='headling' style={{ top: this.state.onHover ? '15vh' : '1vh' }}>
          <h2>{this.props.text}</h2>
        </div>
      </div>
    );
  }
  handleHoverOn() {
    this.setState({
      onHover: !this.state.onHover,
    });
  }
  handleHoverOff() {
    this.setState({
      onHover: !this.state.onHover,
    });
  }
}
export default Block;

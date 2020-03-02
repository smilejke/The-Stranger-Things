import React from 'react';
import '../../../index.css';
import Card from './Card.js';

class PhotoBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: this.props.data,
    };
    this.reqURL = 'http://localhost:3001/actors';
  }
  componentDidMount() {
    fetch(this.reqURL)
      .then((response) => response.json())
      .then((data) => this.setState({ cards: data }));
  }

  render() {
    return (
      <div className='photo-section'>
        <div className='actor-container'>
          {this.state.cards.map((el) => {
            return <Card key={el.id} options={el} />;
          })}
        </div>
      </div>
    );
  }
}

export default PhotoBlock;

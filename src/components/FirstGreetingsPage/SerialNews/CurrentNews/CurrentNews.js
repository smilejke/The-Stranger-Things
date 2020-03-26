import React, { useState, useEffect } from 'react';
import { startLoading, stopLoading } from '../../../../store/Layout/actions.js';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Footer from '../../../Layout/Footer/Footer.js';
import CurrentNewsHeader from './CurrentNewsHeader/CurrentNewsHeader';
import CurrentNewsContent from './CurrentNewsContent/CurrentNewsContent.js';

function CurrentNews() {
  const [newsData, setData] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startLoading());
    setTimeout(() => {
      fetch(`http://localhost:3001/news`)
        .then((response) => response.json())
        .then((data) => setData(data.find((el) => id === el.id).onOpen))
        .then(() => {
          dispatch(stopLoading());
        }, 100);
    }, 900);
  }, [id, dispatch]);

  if (!newsData) return null;

  const {
    header: { text, date },
    paragraphs,
    image,
  } = newsData;

  return (
    <div>
      <div className='current-news-container'>
        <CurrentNewsHeader text={text} date={date} />
        <CurrentNewsContent content={paragraphs} image={image} />
      </div>
      <Footer />
    </div>
  );
}

export default CurrentNews;

import React, { useState, useEffect } from 'react';
import { startLoading, stopLoading } from '../../../../store/Layout/actions.js';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Footer from '../../../Layout/Footer/Footer.js';

function CurrentNews() {
  const [newsData, setData] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startLoading());
    setTimeout(() => {
      fetch(`http://localhost:3001/greetings`)
        .then((response) => response.json())
        .then((data) => {
          setData(data.news.find((el) => el.id === id).onOpen);
        })
        .then(() => {
          dispatch(stopLoading());
        }, 100);
    }, 900);
  }, [id, dispatch]);

  if (!newsData) return null;

  const {
    header: { text, date },
    paragraphs,
    image: { src, alt },
  } = newsData;

  return (
    <div>
      <div className='current-news-container'>
        <div className='current-news-header'>
          <h1>{text}</h1>
          <p>{date}</p>
        </div>

        <div className='current-news-content'>
          <img src={src} alt={alt}></img>
          {paragraphs.map((par) => {
            return <p key={'newsPar' + paragraphs.indexOf(par)}>{par}</p>;
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CurrentNews;

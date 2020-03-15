import React from 'react';
import { Rate } from 'antd';

function WatchHeader() {
  return (
    <div className='watch-header'>
      <div className='watch-header-picture'>
        <img
          src={'https://cms.peaky-blinders.top//uploads/cd2a56708ed24c6893a184d67182ef36.jpg'}
          alt='seasonOne'
        ></img>
      </div>

      <div className='watch-header-content'>
        <div className='header-season'>
          <h2>Очень странные дела 1 сезон обзор эпизодов</h2>
          <p>2016-08-14</p>
        </div>

        <div>
          <div className='rate'>
            <div className='rate-stars'>
              <Rate defaultValue={5} className='stars' />
              <span>Всего голосов: 9</span>
            </div>

            <span className='rate-number'>9.4</span>
          </div>
        </div>

        <div className='season-block-header-roles'>
          <h2>В ролях:</h2>
          <p>
            Вайнона Райдер, Дэвид Харбор, Финн Вулфхард, Милли Бобби Браун, Гейтен Матараццо, Калеб
            Маклафлин, Наталия Дайер, Чарли Хитон, Кара Буоно
          </p>
        </div>
      </div>
    </div>
  );
}

export default WatchHeader;

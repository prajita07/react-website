import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import image1 from '../images/img-1.jpg'
import image2 from '../images/img-2.jpg'
import image3 from '../images/img-3.jpg'
import image4 from '../images/img-4.jpg'
import image5 from '../images/img-5.jpg'

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these amazing  Collections!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
        
            <CardItem
              src={image1}
              text='Classy leather belt watch'
              label='Watch'
              path='/products'
            />
            <CardItem
              src={image2}
              text='Latest apple smart watch'
              label='Apple Watch'
              path='products'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={image3}
              text='Latest Samsung headphones'
              label='Headphones'
              path='products'
            />
            <CardItem
              src={image4}
              text='Headphones of high quality'
              label='Gadget'
              path='/products'
            />
            <CardItem
              src={image5}
              text='Wireless apple smart airpods'
              label='Airpods'
              path='products'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
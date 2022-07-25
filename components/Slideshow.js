/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const Slideshow = () => {
  //Array of Images
  const images = [
    'images/0.jpg',
    'images/1.jpg',
    'images/2.jpg',
    'images/3.jpg',
    'images/4.jpg',
  ];

  //These are custom properties for zoom effect while slide-show
  const fadeProperty = {
    indicators: true,
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    prevArrow: (
      <button
        style={{
          width: '3rem',
          marginRight: '-30px',
          cursor: 'pointer',
          height: '3rem',
          backgroundColor: '#fdc500',
          borderRadius: '50%',
          padding: '1rem',
          left: '1rem',
        }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="#00296b">
          <path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" />
        </svg>
      </button>
    ),
    nextArrow: (
      <button
        style={{
          width: '3rem',
          marginLeft: '-30px',
          cursor: 'pointer',
          height: '3rem',
          backgroundColor: '#fdc500',
          borderRadius: '50%',
          padding: '1rem',
          right: '1rem',
        }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="#00296b">
          <path d="M512 256L270 42.6v138.2H0v150.6h270v138z" />
        </svg>
      </button>
    ),
  };
  return (
    <div className="mb-2">
      <Fade {...fadeProperty}>
        {images.map((each, index) => (
          <div key={index} className="flex w-full h-96">
            <img
              className="w-full object-cover rounded-lg shadow-xl"
              src={each}
              alt="carousel"
            />
          </div>
        ))}
      </Fade>
    </div>
  );
};

export default Slideshow;

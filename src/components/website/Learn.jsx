import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import Card from '../shared/Card';
import { rightImg } from '../../utils';

const Learn = () => {
    
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.to('#title', {
      opacity: 1,
      y: 0,
      duration: 1,
    });
    gsap.to('#hey', {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.25,
    });
    
    gsap.fromTo(cardsRef.current, 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 1, stagger: 0.3 }
    );
  }, []);

  return (
    <div className='px-2 sm:px-10 md:px-10 lg:px-20 py-10 sm:py-16 md:py-20 flex flex-col justify-center gap-5'>
      <h1 id='title' className="section-heading">
        Are you ready to learn more?
      </h1>
      <div className='flex justify-between items-center'>
        <p id='hey' className='text-base sm:text-lg md:text-xl lg:text-2xl text-gray opacity-0 translate-y-20'>
          Enjoy and learn with the most popular courses at very competitive prices.
        </p>
        <p className='link gap-2'>Get more courses <img src={rightImg} alt="right arrow"/></p>
      </div>
      <div className='grid grid-cols-1 mt-5 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        <div ref={el => cardsRef.current[0] = el}><Card /></div>
        <div ref={el => cardsRef.current[1] = el}><Card /></div>
        <div ref={el => cardsRef.current[2] = el}><Card /></div>
      </div>
    </div>
  );
}

export default Learn;

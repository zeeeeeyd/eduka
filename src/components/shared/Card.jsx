import React from 'react';
import { coverPic, watchImg, starImg } from '../../utils';

const Card = () => {
  return (
    <div className="group relative w-full sm:w-[40vw] md:w-[30vw] lg:w-[26vw] h-[40vh] rounded-3xl overflow-hidden cursor-pointer transition-all duration-500">
      <img src={coverPic} className="w-full h-full object-cover transition-transform duration-500 scale-110 group-hover:scale-100" alt="Cover" />
      <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-lg">
        <span>15 June</span>
      </div>
      <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-lg">
        <span>1.6m Followers</span>
      </div>
      <div className="absolute bottom-4 left-4 text-white">
        <h2 className="text-xl font-bold">Angela React Bootcamp</h2>
        <p className="text-base">+ 65 total videos</p>
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center transition-opacity duration-500">
        <h2 className="text-2xl font-bold text-white">React crash course</h2>
        <a className="text-lg text-white underline">Get this course?</a>
      </div>
    </div>
  );
}

export default Card;

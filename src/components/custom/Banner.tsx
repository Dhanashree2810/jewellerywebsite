import React from 'react';

interface BannerProps {
  backgroundImage: string;
  title: string;
  description: string;
}

const Banner = ({ backgroundImage, title, description }:BannerProps) => {
  return (
    <div
      className="relative w-full min-w-full object-cover bg-fixed bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="bg-black bg-opacity-45 lg:py-28 py-20">
        <div className="text-white grid grid-cols-1 mx-4 lg:mx-32 gap-8">
          <div className="flex justify-center items-center">
            <div className="relative flex flex-col justify-center items-center">
              <h1 className="text-white font-semibold text-2xl mb-5 border-b-2">{title}</h1>
              <p className="text-xs w-[600px] text-center">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

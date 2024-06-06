import React from 'react';
import bgImgf from '../Assets/herohome.jpg';

const Banner = () => {
  return (
    <div
      className='isolate pt-0  h-screen flex items-center inset-0 bg-cover bg-center'
      style={{ backgroundImage: `url(${bgImgf})` }}
    >
      <div className='relative isolate px-5 pt-0 lg:px-8 h-screen flex items-center bg-black bg-opacity-50'>
        <div className='flex justify-center items-center text-center'>
          <h1 className='text-white text-xl font-bold'>
            Join us in our mission to revolutionize rural agriculture. Whether you are a farmer looking to join our federation, a potential partner, or a donor wanting to support our cause, your involvement is crucial to our success.
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Banner;

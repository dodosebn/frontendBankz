
import React from 'react';
import { latestItems } from './shared/mappings';

const LatestArticle = () => {
  return (
    <div className='lg:relative'>
    <div className='pt-9 items-center bg-LightGrayishBlue w-full lg:px-[3rem] lg:absolute bottom-[13rem]'>
      <h1 className='text-DarkBlue text-center text-3xl lg:text-start lg:pl-6'>Latest Articles</h1>
      <section className='p-4 lg:flex lg:gap-4 '>
        {latestItems.map((news) => (
          <article key={news.id} className='mt-7'>
            <img src={news.imgSrc} alt="sharp" 
            className='lg:w-[16.5rem] lg:h-[16.5rem]'
            style={{
              borderRadius: '7px 7px 0 0'
            }}/>
            <blockquote className='bg-white p-5 text-GrayishBlue lg:w-[16.5rem] lg:h-[16.5rem]' style={{
              borderRadius: '0, 0, 7px, 7px'
            }}>
              <cite>{news.cite}</cite>
              <h1 className='text-DarkBlue text-[1.3rem] pt-2'>{news.title}</h1>
              <p className='w-[20rem] text-[1rem] lg:w-[15rem] pt-2'>{news.content}</p>
            </blockquote>
          </article>
        ))}
      </section>
    </div>
    </div>
  );
};

export default LatestArticle;

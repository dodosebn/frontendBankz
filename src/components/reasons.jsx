import React from 'react';
import {ReasonItem} from './shared/mappings';
const Reasons = () => {
  return (
    <div className='relative -z-20'>
    <div className='lg:absolute lg:bottom-[49rem]  bg-VeryLightGray w-full p-4 text-center lg:text-start pt-[3rem] lg:p-[4rem] '>
      <article>
        <h1 className='text-3xl text-DarkBlue'>Why choose Easybank?</h1>
        <p  className='text-GrayishBlue font-medium text-[1rem] pt-3 lg:w-[37rem]'>We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
      </article>
      <section className='flex lg:flex-row flex-col gap-[3rem] lg:gap-4 pb-[3rem] text-GrayishBlue font-medium text-lg pt-[3rem]'>
        {ReasonItem.map((rea)=> (
        <article key={rea.id}>
          <img src={rea.imgSrc} className="mx-auto lg:ml-0" />
          <h1 className='text-DarkBlue text-[1.3rem] pt-3 '>{rea.title}</h1>
          <p className='pt-3 lg:w-[16rem] text-[1rem]'>{rea.content}</p>
        </article>))}
      </section>
    </div>
  </div>
  
  )
}

export default Reasons;

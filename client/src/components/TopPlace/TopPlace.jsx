import React from 'react'
import ArrowRight from './assets/arrowRight.svg'
import ArrowLeft from './assets/arrowLeft.svg'
import TopPlaceImg from './assets/topPlaceImg.png'

export const TopPlace = () => {
  return (
    <div className='flex bg-white border-[#CBCBCB] border-[1px] w-full max-w-[1240px] flex-col absolute rounded-2xl px-24 py-7'>
        <div className='flex justify-between w-full'>
            <h2 className='font-bold text-4xl mb-6'>Популярные места</h2>
            <div className='flex gap-3'>
                <button className=' h-9 w-9 flex justify-center items-center rounded-full bg-zinc-100'>
                    <img src={ArrowLeft} alt="" />
                </button>
                <button className=' h-9 w-9 flex justify-center items-center rounded-full bg-zinc-100'>
                    <img src={ArrowRight} alt="" />
                </button>
            </div>
        </div>
        <div className='flex'>
            <article className='text-[17px] max-w-[175px] w-full'>
                <img className='w-[175px] h-[175px]' src={TopPlaceImg} alt="" />
                <div className='p-1'>
                    <span className='text-black'>
                        Отдохнуть на мысе Парящей Черепахи    
                    </span>
                    <h3 className='text-zinc-500'>
                        Владивосток
                    </h3>
                </div>
            </article>
        </div>
    </div>
  )
}

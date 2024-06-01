import React from 'react'
import ArrowRight from './assets/arrowRight.svg'
import ArrowLeft from './assets/arrowLeft.svg'

export const TopPlace = () => {
  return (
    <div className='flex bg-red-900 w-full max-w-[1240px] flex-col absolute rounded-2xl'>
        <div className='px-24 py-7 flex justify-between w-full'>
            <h2 className='font-bold text-4xl'>Популярные места</h2>
            <div className='flex gap-3'>
                <button className=' h-9 w-9 flex justify-center items-center rounded-full bg-zinc-100'>
                    <img src={ArrowLeft} alt="" />
                </button>
                <button className=' h-9 w-9 flex justify-center items-center rounded-full bg-zinc-100'>
                    <img src={ArrowRight} alt="" />
                </button>
            </div>
        </div>
    </div>
  )
}

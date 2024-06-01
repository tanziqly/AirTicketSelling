import React from 'react'
import DirectionIcon from './assets/DirectionIcon.svg'

export const TopDirection = () => {
  return (
    <section className='pt-2 w-full flex flex-col items-center'>
        <h2 className="font-bold text-4xl mt-44">Популярные места</h2>
        <div>
            <button className='flex gap-1'>
                <img src={DirectionIcon} alt="" />
                <div className='flex flex-col gap-0'>
                    <h4 className='text-orange-500 text-sm font-bold'>
                        Ереван
                    </h4>
                    <span className='text-xs text-zinc-600'>
                        Армения
                    </span>
                </div>
            </button>
        </div>
    </section>
  )
}

import React from 'react'
import { CalcInputs } from '../CalcInputs/CalcInputs'
import { TopPlace } from '../TopPlace/TopPlace'

export const Banner = () => {
  return (
    <section className='bg-orange-400 flex flex-col items-center'>
        <h1 className='font-bold text-6xl text-white mt-12 mb-3'>Букинг авиабилетов</h1>
        <p className='font-semibold text-3xl text-white'>Быстро, просто и с комфортом!</p>
        <CalcInputs />
        <div className='relative w-full max-w-[1240px]'>
            <TopPlace />
        </div>
    </section>
  )
}

import React from 'react'
import { CalcInputs } from '../CalcInputs/CalcInputs'
import { TopPlace } from '../TopPlace/TopPlace'

export const Banner = () => {

    return (
        <section className='bg-gradient-to-r from-orange-300 to-orange-400 flex flex-col items-center mb-20'>
            <h1 className='font-bold text-6xl text-black mt-12 mb-3'>Букинг авиабилетов</h1>
            <p className='font-semibold text-3xl text-black'>Быстро, просто и с комфортом!</p>
            <CalcInputs />
            <div className='relative w-full mb-72 max-w-[1240px]'>
                <TopPlace />
            </div>
        </section>
  )
}

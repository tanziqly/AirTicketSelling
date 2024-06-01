import React from 'react'

export const CalcInputs = () => {
  return (
    <div className='flex justify-center gap-[10px] mt-24 mb-12'>
        <div className='flex gap-[2px] rounded-2xl overflow-hidden'>
            <input className='p-4 outline-none' type="text" placeholder='Откуда летим'/>
            <input className='p-4 outline-none' type="text" placeholder='Куда летим'/>
            <input className='p-4 outline-none' type="text" placeholder='Когда'/>
            <input className='p-4 outline-none' type="text" placeholder='Обратно'/>
            <input className='p-4 outline-none' type="text" placeholder='Кол-во пассажиров'/>
        </div>
        <button className='bg-black px-9 py-4 text-white rounded-2xl font-semibold'>
            Найти билеты
        </button>
    </div>
  )
}

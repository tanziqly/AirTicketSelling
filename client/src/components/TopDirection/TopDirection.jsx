import React, { useState } from 'react'
import DirectionIcon from './assets/DirectionIcon.svg'

export const TopDirection = () => {

    const [items, setItems] = useState([
        {
            name: '222',
            selected: false
        },
        {
            name: '222',
            selected: false
        },
        {
            name: '222',
            selected: false
        },
        {
            name: '222',
            selected: false
        },
        {
            name: '222',
            selected: false
        },
        {
            name: '222',
            selected: false
        },
        {
            name: '222',
            selected: false
        },
        {
            name: '222',
            selected: false
        },
        {
            name: '222',
            selected: false
        },
        {
            name: '222',
            selected: false
        },
        {
            name: '222',
            selected: false
        },
        {
            name: '222',
            selected: false
        },
    ])

    const test = (index) => {
        setItems((items) => {
            return items.map((item, i) => {
                if(i === index) {
                    return {
                        ...item,
                        selected: !item.selected
                    };
                } else {
                    return item;
                }
            });
        });
    };

  return (
    <section className='pt-2 w-full flex flex-col items-center'>
        <h2 className="font-bold text-4xl mt-44 mb-9">Популярные направления</h2>
        <div className='grid grid-cols-2 gap-y-4 gap-x-12 mb-8'>
            {items.map((val, key) => (
                <button className='flex gap-1 w-[280px] p-2 rounded-md bg-slate-200'>
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
            ))}
        </div>
    </section>
  )
}

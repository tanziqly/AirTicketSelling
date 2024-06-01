import React, { useState } from 'react';
import Liked from './assets/liked.svg';
import DefaultLiked from './assets/defaultLike.svg';
import ToggleButton from '@mui/material/ToggleButton';
import TopPlaceImg from './assets/topPlaceImg.png';

export const TopPlace = () => {
    const [items, setItems] = useState([
        {
            name: '111',
            selected: false
        },
        {
            name: '111',
            selected: false
        },
        {
            name: '111',
            selected: false
        },
        {
            name: '111',
            selected: false
        },
        {
            name: '111',
            selected: false
        },
    ]);

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

    const updateListItems = (valName) => {
        console.log(valName);
    };

    return (
        <div className="flex bg-white border-[#CBCBCB] border-[1px] w-full max-w-[1240px] flex-col absolute rounded-2xl px-24 py-7">
            <div className="flex justify-between w-full">
                <h2 className="font-bold text-4xl mb-6">Популярные места</h2>
            </div>
            <div className="flex gap-12 justify-center">
                {items.map((val, key) => (
                    <article key={key} className="text-[17px] max-w-[175px] w-full hover:scale-105 transition-all">
                        {/* Объект "val" не может быть напрямую вставлен в JSX */}
                        <div>
                            <img className="w-[175px] h-[175px]" src={TopPlaceImg} alt="" />
                            <div className="p-1">
                                <span className="text-black">Отдохнуть на мысе Парящей Черепахи</span>
                                <h3 className="text-zinc-500 mb-2">Владивосток</h3> 
                                <ToggleButton
                                    selected={val.selected}
                                    onClick={() => test(key)}
                                    onChange={() => updateListItems(val.name)} // Исправлено на передачу val.name
                                >
                                    {val.selected ? <img src={DefaultLiked} alt='Like' /> : <img src={Liked} alt='Liked' />}
                                </ToggleButton>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
            <div className='flex justify-center'>
                <button className='text-lg font-semibold py-3 px-16 bg-slate-200 mt-8 rounded-2xl'>
                    Показать все места
                </button>
            </div>
        </div>
    );
};

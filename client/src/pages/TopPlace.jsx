
import { useState } from 'react';
import Liked from '../components/TopPlaceMain/assets/liked.svg';
import DefaultLiked from '../components/TopPlaceMain/assets/defaultLike.svg';
import ToggleButton from '@mui/material/ToggleButton';
import TopPlaceImg from '../components/TopPlaceMain/assets/topPlaceImg.png';

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
    <section className='flex flex-col items-center'>
        <h2 className="font-bold text-4xl mb-6 mt-12">Популярные места</h2>
        <div className='flex-col max-w-[1240px]'>
            <div className='grid grid-cols-4 justify-between gap-12'>
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
        </div>
    </section>
  )
}

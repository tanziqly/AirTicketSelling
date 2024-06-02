import { useState } from 'react';
import UserLogo from './assets/userLogo.svg'
import Liked from '../TopPlaceMain/assets/liked.svg';
import DefaultLiked from '../TopPlaceMain/assets/defaultLike.svg';
import ToggleButton from '@mui/material/ToggleButton';
import TopPlaceImg from '../TopPlaceMain/assets/topPlaceImg.png';
// import EditLogo from './assets/editLogo.svg'

export const ProfileBox = () => {

    const [items, setItems] = useState([
        {
            name: '111',
            selected: true
        },
        {
            name: '111',
            selected: true
        },
        {
            name: '111',
            selected: true
        },
        {
            name: '111',
            selected: true
        },
        {
            name: '111',
            selected: true
        },
        {
            name: '111',
            selected: true
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
    <div className='flex items-center flex-col max-w-[763px] w-full border-[1px] border-orange-500 rounded-lg my-5 py-9 px-16'>
        <h2 className='font-bold text-4xl mb-12'>Личный кабинет</h2>
        <article className='flex gap-10'>
            <img src={UserLogo} className=' h-32' alt="" />
            <div className='grid grid-cols-2 gap-5'>
                <label className='flex flex-col gap-0 text-sm font-bold text-zinc-600' htmlFor="name">
                    Ваше имя
                    <input className=' bg-zinc-200 outline-1 p-2 text-xs font-normal rounded-lg outline-zinc-400 outline' id='name' type="text" placeholder='Введите имя'/>
                </label>
                <label className='flex flex-col gap-0 text-sm font-bold text-zinc-600' htmlFor="surname">
                    Ваша фамилия
                    <input className=' bg-zinc-200 outline-1 p-2 text-xs font-normal rounded-lg outline-zinc-400 outline' id='surname' type="text" placeholder='Введите фамилию'/>
                </label>
                <label className='flex flex-col gap-0 text-sm font-bold text-zinc-600' htmlFor="lastname">
                    Ваше отчество
                    <input className=' bg-zinc-200 outline-1 p-2 text-xs font-normal rounded-lg outline-zinc-400 outline' id='lastname' type="text" placeholder='Введите отчество'/>
                </label>
                <label className='flex flex-col gap-0 text-sm font-bold text-zinc-600' htmlFor="mail">
                    Ваша почта
                    <input className=' bg-zinc-200 outline-1 p-2 text-xs font-normal rounded-lg outline-zinc-400 outline' id='mail' type="email" placeholder='Введите почту'/>
                </label>
            </div>
        </article>
        <h2 className='font-bold text-4xl mb-12 mt-6'>Избранное</h2>
        <article>
            <div className="grid grid-cols-3 gap-7">
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
        </article>
        <div className='mt-6 font-bold text-xs flex gap-4 w-full justify-end'>
            <button className='text-zinc-400'>Удалить аккаунт</button>
            <button className='text-orange-500'>Выйти</button>
        </div>
    </div>
  )
}

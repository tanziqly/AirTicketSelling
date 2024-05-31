import React from 'react'
import { Link } from 'react-router-dom'
import { TextField } from '@mui/material'

export const Signup = () => {
  return (
    <div className='flex w-full h-screen justify-center items-center'>
        <form className='flex flex-col px-8 py-14 w-full max-w-[488px] border-[1px] border-orange-200 rounded-2xl'>
            <h2 className=' text-4xl font-bold mb-14'>Регистрация</h2>
            <div className='flex flex-col gap-6'>
            <TextField
                    id="outlined-basic" 
                    label="Имя профиля" 
                    variant="outlined" 
                />
                <TextField
                    id="outlined-basic" 
                    label="Введите номер телефона" 
                    variant="outlined" 
                />
                <TextField
                    id="outlined-basic" 
                    label="Введите пароль" 
                    variant="outlined" 
                />
                <TextField
                    id="outlined-basic" 
                    label="Повторите пароль" 
                    variant="outlined" 
                />
            </div>
            <button className='my-6 bg-orange-600 text-white py-5 rounded-lg'>
                Зарегистрироваться
            </button>
            <p className='font-medium text-sm text-center'>
                Уже есть аккаунт? <Link to="/signin">
                    <span className='font-bold text-orange-600'>
                        Зарегистрироваться
                    </span>
                </Link>
            </p>
        </form>
    </div>
  )
}

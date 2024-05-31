import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { TextField } from '@mui/material'

export const Signin = () => {

    const [name, setName] = useState("");
    const [nameError, setNameError] = useState(false);
    const handleNameChange = e => {
        setName(e.target.value);
        if (e.target.validity.valid) {
        setNameError(false);
        } else {
        setNameError(true);
        }
    };

    return (
        <div className='flex w-full h-screen justify-center items-center'>
            <form className='flex flex-col px-8 py-14 w-full max-w-[488px] border-[1px] border-orange-200 rounded-2xl'>
                <h2 className=' text-4xl font-bold mb-14'>Вход в аккаунт</h2>
                <div className='flex flex-col gap-6'>
                    <TextField
                        required
                        id="outlined-basic" 
                        label="Введите номер телефона" 
                        variant="outlined"
                        type='number'
                    />
                    <TextField
                        required
                        id="outlined-basic" 
                        label="Введите пароль" 
                        variant="outlined" 
                    />
                </div>
                <button className='my-6 bg-orange-600 text-white py-5 rounded-lg'>
                    Войти
                </button>
                <p className='font-medium text-sm text-center'>
                    Впервые здесь? <Link to="/signup">
                        <span className='font-bold text-orange-600'>
                            Зарегистрироваться
                        </span>
                    </Link>
                </p>
            </form>
        </div>
  )
}

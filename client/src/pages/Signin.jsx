import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { TextField } from '@mui/material'

export const Signin = () => {

    const {
        register,
        formState: {
            errors,
        },
        handleSubmit,
    } = useForm();

    const onSubmit = (data) => {
        alert(JSON.stringify(data))
    }

    return (
        <div className='flex w-full h-screen justify-center items-center'>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col px-8 py-14 w-full max-w-[488px] border-[1px] border-orange-200 rounded-2xl'>
                <h2 className=' text-4xl font-bold mb-14'>Вход в аккаунт</h2>
                <div className='flex flex-col gap-6'>
                    <TextField
                        {...register(
                            "number", {
                                required: 'Поле обязательно к заполнению!',
                                minLength: {
                                    value: 10,
                                    message: 'Длина номера не меньше 10 цифр'
                                },
                                maxLength: {
                                    value: 15,
                                    message: 'Длина номера не более 15 цифр'
                                },
                            }
                        )}
                        id="numberInput" 
                        label="Введите номер телефона" 
                        variant="outlined"
                        type='number'
                    />
                    <div className='text-red-700 text-xs'>
                        {errors?.number && <p>{errors?.number?.message || "Неккоректный номер телефона!"}</p>}
                    </div>
                    <TextField
                        {...register(
                            "password", {
                                required: "Поле обязательно к заполнению!",
                                minLength: {
                                    value: 5,
                                    message: "Пароль должен быть не короче 5 символов",
                                },
                                maxLength: {
                                    value: 30,
                                    message: "Пароль должен быть не длиннее 30 символов",
                                },
                                pattern: {
                                    value: /^(?=.*[a-z].*[a-z])(?=.*[!"#...\d].*[!"#...\d])[a-z\d]{5,}$/gmi,
                                    message: "Пароль должен содержать не менее 2 букв, цифр, знаков и обозначений "
                                }
                            }
                        )}
                        id="passwordInput" 
                        label="Введите пароль" 
                        variant="outlined" 
                    />
                    <div className='text-red-700 text-xs'>
                        {errors?.password && <p>{errors?.password?.message || "Неккоректный пароль!"}</p>}
                    </div>
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

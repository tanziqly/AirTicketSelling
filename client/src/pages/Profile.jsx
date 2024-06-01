import React from 'react'
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

export const Profile = () => {

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

  return (
    <section className='h-screen flex justify-center items-center'>
        <form className='flex flex-col gap-12'>
            <div className='p-8 border-[1px] border-orange-200 rounded-2xl'>
                <h2 className='font-bold text-4xl mb-10'>
                    Личные данные
                </h2>
                <div className='flex gap-6'>
                    <TextField
                        required
                        id="outlined-required"
                        label="Имя"
                        defaultValue="Нилов Асланбек"
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Почта"
                        defaultValue="nilovaslanbek@gmail.comk"
                    />
                </div>
            </div>
            <div className='p-8 border-[1px] border-orange-200 rounded-2xl'>
                <h2 className='font-bold text-4xl mb-10'>
                    Региональные данные
                </h2>
                <div className='flex gap-6'>
                <FormControl sx={{ m: 1, minWidth: 222 }}>
                    <InputLabel id="demo-simple-select-helper-label">Страна</InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={age}
                        label="Страна"
                        onChange={handleChange}>
                    <MenuItem value="">
                        <em>Россия</em>
                    </MenuItem>
                    <MenuItem value={10}>Тайвань</MenuItem>
                    <MenuItem value={20}>Р.Дагестан</MenuItem>
                    <MenuItem value={30}>Р.Татарстан</MenuItem>
                    </Select>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 222 }}>
                    <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={age}
                        label="Age"
                        onChange={handleChange}>
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
                </div>
            </div>
        </form>
    </section>
  )
}

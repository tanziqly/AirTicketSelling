import { Link } from 'react-router-dom'
import { useState } from 'react'

import Logo from './assets/logo.svg'
import User from './assets/user.svg'
import Planet from './assets/planet.svg'

export default function Header() {

    const [currencyOpen, setCurrencyOpen] = useState(true);
    const [dropdownOpen, setDropdownOpen] =useState(true);

    return (
        <nav className="bg-orange-500 w-full py-4 flex justify-center">
            <div className="w-full max-w-[1440px] flex items-center justify-between">
                <header>
                    <img className=' h-4' src={Logo} alt='logo'/>
                </header>
                <div className="flex gap items-center gap-2">
                    <Link to="/">
                        <div className='flex mx-2 gap-[6px]'>
                            <img src={User} alt="user_img" />
                            <span className='button text-white font-semibold'>Профиль</span>
                        </div>
                    </Link>
                    <Link to="/signin">
                        <button className='px-3 py-2 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold'>
                            Войти
                        </button>
                    </Link>
                    <Link to="/signup">
                        <button className='px-3 py-2 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold'>
                            Регистрация
                        </button>
                    </Link>
                </div>
            </div>
        </nav>
    )
}
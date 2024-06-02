import Logo from './assets/logo.svg'
import { Link } from 'react-router-dom'

export default function Foother() {
    return (
        <footer className="bg-black flex justify-center h-24">
            <div className="w-full max-w-[1440px] flex items-center justify-between ">
                <Link to="/">
                    <img className='h-4' src={Logo} alt="logo" />
                </Link>
                <span className='text-white font-bold '>
                    ©All rights reserved
                </span>
            </div>
        </footer>
    )
}
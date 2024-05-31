import Logo from './assets/logo.svg'
import User from './assets/user.svg'
import Planet from './assets/planet.svg'

export default function Header() {
    return (
        <nav className="bg-orange-500 w-full py-4 flex justify-center">
            <div className="w-full max-w-[1440px] flex items-center justify-between">
                <header>
                    <img className=' h-4' src={Logo} alt='logo'/>
                </header>
                <div className="flex">
                    <div className='flex'>
                        <img src={User} alt="user_img" />
                        <span>Профиль</span>
                    </div>
                    <div className='flex'>
                        <img src={Planet} alt="planet_img" />
                        <span>RUB</span>
                    </div>
                </div>
            </div>
        </nav>
    )
}
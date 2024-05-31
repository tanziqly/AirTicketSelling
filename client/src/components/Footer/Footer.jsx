import Logo from './assets/logo.svg'

export default function Foother() {
    return (
        <footer className="bg-black flex justify-center h-24">
            <div className="w-full max-w-[1440px] flex items-center justify-between ">
                <img className='h-4' src={Logo} alt="logo" />
                <div className='text-white font-bold '>
                    ©All rights reserved
                </div>
            </div>
        </footer>
    )
}
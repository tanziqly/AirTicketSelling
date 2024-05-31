import Logo from './assets/logo.svg'

export default function Header() {
    return (
        <nav className="bg-orange-500 w-full py-4 flex justify-center">
            <div className="w-full max-w-[1440px] flex items-center justify-between">
                <header>
                    <img className=' h-4' src={Logo} />
                </header>
                <div className="flex">

                </div>
            </div>
        </nav>
    )
}
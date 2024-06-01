
import UserLogo from './assets/userLogo.svg'
import EditLogo from './assets/editLogo.svg'
import UserExit from './assets/userExit.svg'
import DeleteIcon from './assets/deleteIcon.svg'

export const ProfileBox = () => {
  return (
    <div className='flex items-center flex-col max-w-[1240px] w-full bg-slate-200 rounded-lg my-5 py-6'>
        <article className='flex gap-10'>
            <img src={UserLogo} className=' h-16' alt="" />
            <div className='flex flex-col gap-1'>
                <button className='flex gap-1 text-lg font-bold text-zinc-400 items-center'>
                    Изменить аватар
                    <img src={EditLogo} alt="" />
                </button>
                <button className='flex gap-1 text-lg font-bold text-orange-600 items-center'>
                    Выйти из аккаунта
                    <img src={UserExit} alt="" />
                </button>
            </div>
            <button className='flex px-4 py-2 items-center gap-1 bg-red-400 rounded-xl text-white font-bold text-lg'>
                Удалить аккаунт
                <img src={DeleteIcon} alt="" />
            </button>
        </article>
    </div>
  )
}

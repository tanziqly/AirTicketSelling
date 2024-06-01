import React from 'react'
import DirectionIcon from './assets/DirectionIcon.svg'

export const TopDirection = () => {
  return (
    <section className=''>
        <h2 className="font-bold text-4xl mb-6">Популярные места</h2>
        <div>
            <div>
                <img src={DirectionIcon} alt="" />
                <div>
                    <h4>
                        Ереван
                    </h4>
                    <span>
                        Армения
                    </span>
                </div>
            </div>
        </div>
    </section>
  )
}

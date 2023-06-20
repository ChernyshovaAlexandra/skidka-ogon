import React from 'react'
import Button from './elements/Button'
import Fire from './elements/Fire'
import ph1 from '../assets//img/phone1-new.png'
import logo from '../assets/img/logo_kdd.png'
import { Hoc } from "../Hoc";
import Rules from '../assets/Rules.pdf'

function Mechanics({ setForm, openScaner, setScanerForm, state }) {

  function addCheck() {
    setForm(true);
    if (state.store.token) {
      openScaner(true);
    }
  }

  function handleAddCheck() {
    setForm(true);
    openScaner(true);
    setScanerForm(true);
  }

    return (
        <section className="mechanics py-40 bg-white relative" id='mechanics'>
            <div className='container mx-auto grid place-items-center ubuntu'>
                <h2 className='headline text-orange uppercase golos text-5xl'>для участия в розыгрыше</h2>
                <div className="flex md:justify-center text-black mt-8 max-w-screen-lg lg:max-w-screen-xl text-base xl:text-2xl items-center mb-16 flex-wrap gap-8" >
                    <div className="flex-none md:flex-1 max-w-full">
                        <div className="flex gap-4 items-center	"> <div className="icon">
                            <Fire />
                        </div>
                            <p>Совершите покупку на сумму от <b>1000&nbsp;руб. с&nbsp;товарами-спонсорами</b> в одном чеке</p></div>
                    </div>
                    <div className="flex-none md:flex-1 max-w-full">
                        <div className="flex gap-4 items-center">
                            <div className="icon">
                                <Fire />
                            </div>
                            <p>Регистрируйте чек на сайте и участвуйте в розыгрыше призов.<br/> <b>Больше чеков  - больше шансов выиграть</b></p>
                        </div>
                    </div>
                </div>
                <p className='text-orange text-bold text-2xl mb-3 text-center'>СОХРАНЯЙТЕ ЧЕКИ ДО КОНЦА РОЗЫГРЫША</p>
                <button className="btn mb-8 mt-8"
                  onClick={() => {addCheck();}}
                >
                    <div className="bg"></div>
                    <span>Отсканировать чек</span>
                </button>

                {state.store.token ? <p className='text-orange transition duration-300 ease-in-out cursor-pointer underlined'
                  onClick={() => {handleAddCheck();}}
                >ввести вручную</p> : ''}
                <div className="additional mt-16">
                    <div className="flex-col flex md:flex-row gap-0 md:gap-8 md:justify-start justify-center" >
                        <div className="phone">
                            <img  className='md:mx-0 mx-auto' src={ph1} alt="" />
                        </div>
                        <div className="description">
                            <div className="content-inner">
                                <div className="flex kdd-title gap-8 items-center mb-8 ">
                                    <h2 className='text-orange uppercase golos text-3xl'>участник «Клуба друзей дикси»? </h2>
                                    <div className="logo">
                                        <img  src={logo} alt="" />
                                    </div>
                                </div>
                                <p className='text'>Активируйте согласие на участие в розыгрыше в приложении «Клуб Друзей ДИКСИ» и совершите покупку согласно условиям акции. <span className='text-orange text-bold'>Все ваши чеки сохранятся автоматически!</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <a className="rules btn mb-8 mt-10 pr-4 pl-4" href={Rules} target="_blank">
                    <div className="bg"></div>
                    <span className='vax-w-100'>Полные правила акции</span>
                </a>
            </div>
        </section>
    )
}

export default Hoc(Mechanics);

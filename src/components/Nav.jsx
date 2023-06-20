import React, { useState } from 'react'
import Logo from '../assets/img/logo.svg'
import Logo2 from '../assets/img/logo-mob.png'
import lk from '../assets/img/lk.png';
import { Link } from 'react-router-dom';




export default function Nav({ setForm, openScaner }) {

    const [menu, showMenu] = useState(false)

    const openScanerHandle = () => {
        document.querySelector('#root').classList.add('scrolled');
        setForm(true);
        // openScaner(true);
    };


    return (
        <nav className='fixed w-full left-0 top-0 py-8 shadow-lg bg-black ubuntu'>
            <div className='container mx-auto flex justify-between'>
                <Link to='/skidka-ogon' replace className="logo">
                    <img className='lg:block hidden' src={Logo} alt="" />
                    <img className='lg:hidden relative z-50' src={Logo2} alt="" />
                </Link>
                <ul className="menu gap-6 items-center text-orange lg:flex hidden md:text-lg xl:text-2xl ">
                    <li className='transition duration-300 ease-in-out'>
                        <a href="/skidka-ogon#mechanics">Условия акции</a>
                    </li>
                    <li className='transition duration-300 ease-in-out'>
                        <a href="/skidka-ogon#prizes">Призы</a>
                    </li>
                    <li className='transition duration-300 ease-in-out'>
                        <a href="/skidka-ogon#winners">Победители</a>
                    </li>
                    <li className='transition duration-300 ease-in-out'>
                        <Link to="/skidka-ogon/sponsors" replace>Товары-спонсоры</Link>
                    </li>
                    <li className='transition duration-300 ease-in-out'>
                        <Link to='/skidka-ogon/map' replace>Магазины</Link>
                    </li>
                    <li className='transition duration-300 ease-in-out account' onClick={openScanerHandle}>
                        <img src={lk} alt="" />
                    </li>
                </ul>
                <ul className="lg:hidden flex items-center gap-8  ">
                    <div className={`${menu ? 'cancel' : ''} burger relative z-50`} onClick={() => showMenu(!menu)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <li className='transition duration-300 ease-in-out account' onClick={openScanerHandle}>
                        <img src={lk} alt="" />
                    </li>
                    {
                        menu &&
                        <div className="burger-menu absolute z-40 w-full h-screen top-0 left-0">
                            <ul className="text-orange  bg-black text-white h-full flex-col flex justify-center gap-8 px-8 text-center">
                                <li className='transition duration-300 ease-in-out' onClick={() => showMenu(!menu)}>
                                    <a href="/skidka-ogon#mechanics">Условия акции</a>
                                </li>
                                <li className='transition duration-300 ease-in-out' onClick={() => showMenu(!menu)}>
                                    <a href="/skidka-ogon#prizes">Призы</a>
                                </li>
                                <li className='transition duration-300 ease-in-out' onClick={() => showMenu(!menu)}>
                                    <a href="/skidka-ogon#winners">Победители</a>
                                </li>
                                <li className='transition duration-300 ease-in-out' onClick={() => showMenu(!menu)}>
                                    <Link to="/skidka-ogon/sponsors" replace>Товары-спонсоры</Link>
                                </li>
                                <li className='transition duration-300 ease-in-out' onClick={() => showMenu(!menu)}>
                                    <Link to='/skidka-ogon/map' replace>Магазины</Link>
                                </li>
                            </ul>
                        </div>
                    }
                </ul>
            </div>
        </nav>
    )
}

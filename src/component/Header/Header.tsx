import React from 'react';
import {NavLink} from "react-router-dom";
import {PATH} from "../../Pages";
import s from './Header.module.css'
import logo from '../../assets/favicon.png'

export const Header = () => {
    return (
        <div className={s.Header}>
            <div className={s.logo}>
                <img src={logo}/>
                <span>CarShop</span>
            </div>
            <nav>
                <NavLink
                    to={PATH.HOME}
                    className={({isActive}) => (isActive ? s.active : '')}
                >
                    Home
                </NavLink>
                <NavLink
                    to={PATH.ABOUT}
                    className={({isActive}) => (isActive ? s.active : '')}
                >
                    About
                </NavLink>
                <NavLink
                    to={PATH.ITEMS}
                    className={({isActive}) => (isActive ? s.active : '')}
                >
                    Popular
                </NavLink>
                <NavLink
                    to={PATH.SHOP}
                    className={({isActive}) => (isActive ? s.active : '')}
                >
                    Shop
                </NavLink>

            </nav>


        </div>
    )
}

import React from 'react';
import s from './Home.module.css'
import car from '../../../assets/home.png'
import {NavLink} from "react-router-dom";
import {PATH} from "../../../Pages";


export const Home = () => {
    return (
        <section className={s.test}>
            <h2>Choose The Best Car</h2>

            <div>
                <div>Porsche Mission E</div>
                <div className={s.promo}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
                        <path fill="none" d="M0 0h24v24H0z"/>
                        <path d="M13 10h7l-9 13v-9H4l9-13z" fill="rgba(152,0,255,1)"/>
                    </svg>
                    Electric Car
                </div>
            </div>
            <img className={s.car} src={car} alt="car"/>
            <div className={s.info}>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
                        <path fill="none" d="M0 0h24v24H0z"/>
                        <path
                            d="M8 5a4 4 0 1 1 8 0v5.255a7 7 0 1 1-8 0V5zm1.144 6.895a5 5 0 1 0 5.712 0L14 11.298V5a2 2 0 1 0-4 0v6.298l-.856.597zM8 16h8a4 4 0 1 1-8 0z"
                            fill="rgba(38,230,230,1)"/>
                    </svg>
                    <div>24°</div>
                    <div>Temperature</div>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
                        <path fill="none" d="M0 0H24V24H0z"/>
                        <path
                            d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 3c-3.866 0-7 3.134-7 7 0 1.852.72 3.537 1.894 4.789l.156.16 1.414-1.413C7.56 14.63 7 13.38 7 12c0-2.761 2.239-5 5-5 .448 0 .882.059 1.295.17l1.563-1.562C13.985 5.218 13.018 5 12 5zm6.392 4.143l-1.561 1.562c.11.413.169.847.169 1.295 0 1.38-.56 2.63-1.464 3.536l1.414 1.414C18.216 15.683 19 13.933 19 12c0-1.018-.217-1.985-.608-2.857zm-2.15-2.8l-3.725 3.724C12.352 10.023 12.179 10 12 10c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2c0-.179-.023-.352-.067-.517l3.724-3.726-1.414-1.414z"
                            fill="rgba(231,76,60,1)"/>
                    </svg>
                    <div>873</div>
                    <div>Mileage</div>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
                        <path fill="none" d="M0 0h24v24H0z"/>
                        <path d="M13 10h7l-9 13v-9H4l9-13z" fill="rgba(255,164,0,1)"/>
                    </svg>
                    <div>94%</div>
                    <div>Battery</div>
                </div>
            </div>
            <div className={s.start}>
                <NavLink
                    to={PATH.ABOUT}

                >
                    Start
                </NavLink>
            </div>
        </section>
    );
};


import React from 'react'
import { Routes, Route} from 'react-router-dom'
import {Home} from "./component/Content/Home/Home";
import {About} from "./component/Content/About/About";
import {Error404} from "./component/Error/Error404";
import {Items} from "./component/Content/Items/Items";
import {Shop} from "./component/Content/Shop/Shop";



export const PATH = {
    HOME: '/Home',
    ABOUT: '/About',
    ITEMS: '/Popular',
    SHOP: '/Shop',
}

export const Pages = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Home/>} />
                <Route path={PATH.HOME} element={<Home/>}/>
                <Route path={PATH.ABOUT} element={<About/>}/>
                <Route path={PATH.ITEMS} element={<Items/>}/>
                <Route path={PATH.SHOP} element={<Shop/>}/>
                <Route path={'/*'} element={<Error404/>}/>
            </Routes>
        </div>
    )
}


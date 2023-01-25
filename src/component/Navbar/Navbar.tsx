import React from 'react';

export const PATH = {
    Home: '/Home',
    About: '/About',
    Popular: '/Popular',
    Shop: '/Shop',
}




export const Header = () => {
    return (
        <div>
            <div>
                logo
            </div>
            <nav>
                <ul>

                    <li>Home</li>
                    <li>About</li>
                    <li>Popular</li>
                    <li>Shop</li>
                </ul>
            </nav>
        </div>
    )
}

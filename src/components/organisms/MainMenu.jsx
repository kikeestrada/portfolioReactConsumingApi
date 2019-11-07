import React from 'react'
import CartCounter from '../atoms/CartCounter'



const MainMenu = () => (
    <header className="main-header">
        <div className="ed-grid s-grid-5 lg-grid-4">
            <div className="s-cols-4 lg-cols-1 s-cross-center">
                    <img className="main-logo" src="img/img3.jpg" alt="algo" />
            </div>
            <div className="s-grid-1 lg-cols-3 s-cross-center s-main-end header-links">
                <nav className="main-menu">
                    <ul>
                        <CartCounter/> 
                    </ul>
                </nav>
                <div className="main-menu-toggle to-l" id="main-menu-toggle">

                </div>
            </div>
        </div>
    </header>
);

export default MainMenu
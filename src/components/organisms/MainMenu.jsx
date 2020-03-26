import React, {createRef} from 'react'
import {NavLink} from "react-router-dom"

const menu = createRef();
const toggleMenu = ()=> menu.current.classList.toggle('show');

const MainMenu = () => (
    <header className="main-header">
        <div className="ed-grid s-grid-5 lg-grid-4">
            <div className="s-cols-4 lg-cols-1 s-cross-center">
                {/*<img className="main-logo" src="img/logo.png" alt="logo" />*/}
            </div>
            <div className="s-grid-1 lg-cols-3 s-cross-center s-main-end header-links">
                <nav className="main-menu" ref={menu}>
                    <ul>
                        <li>
                            <NavLink exact to ="/" activeClassName="activo">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to ="/Episodes" activeClassName="activo">Episodes</NavLink>
                        </li>
                    </ul>
                </nav>
                <div className="main-menu-toggle to-l"
                     id="main-menu-toggle"
                     onClick={
                         () => toggleMenu()
                     }
                >
                </div>
            </div>
        </div>
    </header>
);

export default MainMenu

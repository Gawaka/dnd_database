import { useState } from 'react';
import { NavLink } from 'react-router-dom'
import logo from '../../assets/img/logo.svg';
import './header.scss';

export function Header() {
    const [isOpen, setIsOpen] = useState(Boolean);

    const toggleMenu = ()=> setIsOpen(!isOpen);
    
    return(
    <header className='header'>
        <div className="header__title-wrapper">
            <img src={logo} alt="logo" className='header__logo'/>
            <h1 className='header__title'>Dungeons & Dragons database</h1>
        </div>
        <div className="header__navigate-wrapper">
            {
                <button
                className={`header__burger-btn ${isOpen ? 'active' : ''}`}
                onClick={toggleMenu}
                aria-label="Menu"
                >
                <span></span>
                <span></span>
                <span></span>
                </button>
            }
            <nav className={`header__navigate ${isOpen ? 'open' : ''}`}>
                <ul className="header__navigate-items">
                    <li>
                        <NavLink onClick={()=> setIsOpen(false)} className="header__navigate-item" to='/'>Characters</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={()=> setIsOpen(false)} className="header__navigate-item" to='/racesPage'>Races</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={()=> setIsOpen(false)} className="header__navigate-item" to='/scenarios'>Scenarios</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={()=> setIsOpen(false)} className="header__navigate-item" to='/equipment'>Equipment</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
    )
};
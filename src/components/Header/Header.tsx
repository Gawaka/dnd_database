import './header.scss';
import logo from '../../assets/img/logo.svg';

export function Header() {

    return(
    <header className='header'>
        <div className="header__title-wrapper">
            <img src={logo} alt="logo" className='header__logo'/>
            <h1 className='header__title'>Dungeons & Dragons database</h1>
        </div>
        <div className="header__navigate-wrapper">
            <nav className='header__navigate'>
                <ul className="header__navigate-items">
                    <li className="header__navigate-item">Home</li>
                    <li className="header__navigate-item">Equipment</li>
                    <li className="header__navigate-item">Scenarios</li>
                    <li className="header__navigate-item">About</li>
                </ul>
            </nav>
        </div>
    </header>
    )
}
import './header.scss';
import logo from '../../assets/img/logo.svg';

export function Header() {

    return(
    <header className='header'>
        <img src={logo} alt="logo" className='header__logo'/>
        <h1 className='header__title'>characters database</h1>
    </header>
    )
}
import type React from 'react';
import {Routes, Route} from 'react-router-dom';
import { Header } from './components/Header/Header';
import { CharactersPage } from './components/CharactersPage/CharactersPage';
import { Equipment } from './components/Equipment/Equipment';
import { RacesPage } from './components/RacesPage/RacesPage';
import './style/app.scss';

function App() {

    return (
        <div className='app'>
            <Header/>
            <Routes>
                <Route path='/' element={<CharactersPage/>}/>
                <Route path='/equipment' element={<Equipment/>} />
                <Route path='/racesPage' element={<RacesPage/>}/>
            </Routes>
        </div>
    )
}

export default App
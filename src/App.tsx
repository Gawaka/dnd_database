
import { Header } from './components/Header/Header';
import { CharactersPage } from './components/CharactersPage/CharactersPage';
import './style/app.scss';

function App() {

    return (
    <div className='app'>
            <Header/>
            <CharactersPage/>
    </div>
    )
}

export default App
import './App.css';
import {useSelector} from 'react-redux'
import type {RootState} from './store'
import {Link} from 'react-router-dom';
import { useGetPokemonByNameQuery } from './service'

export const App = () => {
    const count = useSelector((state: RootState) => {
        return state.counter.value
    });

    const count2 = useSelector((state: RootState) => {
        return state.counter2.value
    });

    const { data, error, isLoading } = useGetPokemonByNameQuery('Москва')

    return (
        <div className="App">
            {error ? (
                <>Oh no, there was an error</>
            ) : isLoading ? (
                <>Loading...</>
            ) : data ? (
                <>
                    <div className="App">
                        <Link to="/">
                            Переход на главную
                        </Link>
                        <div>
                            Общее количество {count + count2}
                        </div>
                    </div>
                </>
            ) : null}
        </div>
    );
}

export default App;

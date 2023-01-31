import './App.css';
import {useDispatch, useSelector} from 'react-redux'
import {decrement, increment} from './slice';
import {decrement as decrement2, increment as increment2} from './slice2';
import type {RootState} from './store'
import { Link } from 'react-router-dom';

export const App = () => {
    const count = useSelector((state: RootState) => {
        return state.counter.value
    });

    const count2 = useSelector((state: RootState) => {
        return state.counter2.value
    });

    const dispatch = useDispatch()

    return (
        <div className="App">
            <div className="App-workspace">
                <div className="App-workspace__label">
                    Приложение 1
                </div>
                <div className="App-workspace__label">
                    count is : {count}
                </div>

                <div className="App-workspace__buttons">
                    <button
                        className="buttons__item"
                        onClick={() => dispatch(increment())}>
                        increment
                    </button>

                    <button
                        className="buttons__item"
                        onClick={() => dispatch(decrement())}>
                        decrement
                    </button>
                </div>
            </div>
            <Link to="test">
                Переход на другую страницу
            </Link>
            <div className="App-workspace">
                <div className="App-workspace__label">
                    Приложение 2
                </div>
                <div className="App-workspace__label">
                    count is : {count2}
                </div>

                <div className="App-workspace__buttons">
                    <button
                        className="buttons__item"
                        onClick={() => dispatch(increment2())}>
                        increment
                    </button>

                    <button
                        className="buttons__item"
                        onClick={() => dispatch(decrement2())}>
                        decrement
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;

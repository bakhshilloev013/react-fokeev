import { useState } from 'react';

function App() {
    const [counter, setCounter] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [active, setActive] = useState('');

    const addCounter = () => {
        setCounter((prev) => prev + 1);
    };

    const minusCounter = () => {
        setCounter((prev) => prev - 1);
    };

    const resetCounter = () => {
        setCounter(0);
    };

    const toggleOpen = () => {
        setIsOpen((prev) => !prev);
    };

    if (!isOpen) return <button onClick={toggleOpen}>Начать</button>;

    return (
        <>
            <span className="cross" onClick={toggleOpen}>
                &times;
            </span>

            <h1>Vite + React = {counter >= 3 && 'Love'}</h1>

            <div className="logo-container">
                <img
                    onMouseEnter={(e) => setActive('vite')}
                    onMouseLeave={e => setActive('')}
                    src="/vite.svg"
                    className={`logo ${(counter >= 1 || active === 'vite') && 'active'}`}
                    alt="Vite logo"
                />
                <p>+</p>
                <img
                    onMouseEnter={(e) => setActive('react')}
                    onMouseLeave={e => setActive('')}
                    src="/react.svg"
                    className={`logo ${(counter >= 2 || active === 'react') && 'active'}`}
                    alt="React logo"
                />
                <p>=</p>
                <img
                    onMouseEnter={(e) => setActive('love')}
                    onMouseLeave={e => setActive('')}
                    src="/love.svg"
                    className={`logo ${(counter >= 3 || active === 'love') && 'active'}`}
                    alt="Love logo"
                />
            </div>

            <hr />

            <div className="card">
                <p className="count-paragraph">
                    count{counter > 1 && 's'} is {counter}
                </p>
                <div className="increment-buttons">
                    <button onClick={addCounter}>+1</button>
                    <button onClick={minusCounter}>-1</button>
                    <button onClick={resetCounter}>Reset</button>
                </div>
            </div>
        </>
    );
}

export default App;

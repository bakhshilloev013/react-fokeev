import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import cardData from './data/cardData';
import CardContainer from './components/CardContainer';
import Footer from './components/Footer';
import './index.css';

//Rus
// 1 - Создайте состояние isOpen для управления открытием и закрытием приложения. Интерфейс скрывается при нажатии на крестик и отображается при нажатии на кнопку "Начать".
// 2 - Реализуйте функционал отображения карточек в зависимости от активного таба. Переключать табы можно как нажатием на кнопки "Prev" и "Next", так и нажатием на сам таб.

//Eng
// 1 - Create a state variable, isOpen, to control opening and closing the app. The interface is hidden when the close icon is clicked and shown when the Start button is pressed.
// 2 - Implement functionality to display cards based on the currently active tab. Tabs can be switched either by clicking the Prev and Next buttons or by clicking directly on the tab itself.

// Grouping cards into three tabs
const tabData = [
    [cardData[0], cardData[1]], // Tab 1
    [cardData[2], cardData[3]], // Tab 2
    [cardData[4]], // Tab 3
];

export default function App() {
    const [isOpen, setIsOpen] = useState(false);
    const [tab, setTab] = useState(0);

    const toggleIsOpen = () => {
        setIsOpen((prev) => !prev);
    };

    const nextTab = () => {
        if (tab === 2) {
            setTab(0);
        } else {
            setTab((prev) => prev + 1);
        }
    };

    const prevTab = () => {
        if (tab === 0) {
            setTab(2);
        } else {
            setTab((prev) => prev - 1);
        }
    };

    if (!isOpen) return <button onClick={toggleIsOpen}>Start</button>;

    return (
        <>
            <div className="app">
                <span className="close" onClick={toggleIsOpen}>
                    &times;
                </span>
                <h1>State Tabs Card Display</h1>

                <div className="tab-buttons">
                    {tabData.map((item, i) => (
                        <button
                            key={uuidv4()}
                            onClick={() => setTab(i)}
                            className={`tab-button ${tab === i && 'active'}`}
                        >
                            Tab 1
                        </button>
                    ))}
                    {/* <button onClick={() => setTab(0)} className={`tab-button ${tab === 0 && 'active'}`}>
                        Tab 1
                    </button>
                    <button onClick={() => setTab(1)} className={`tab-button ${tab === 1 && 'active'}`}>
                        Tab 2
                    </button>
                    <button onClick={() => setTab(2)} className={`tab-button ${tab === 2 && 'active'}`}>
                        Tab 3
                    </button> */}
                </div>

                <CardContainer cards={tabData[tab]} />

                <div className="navigation-buttons">
                    <button onClick={prevTab}>&lt; Previous</button>
                    <button onClick={nextTab}>Next &gt;</button>
                </div>

                <Footer />
            </div>
        </>
    );
}

// Container component to display the cards for the active tab

// Component to render individual card information

// Component to render individual tag

// Footer component listing the technologies used in the project

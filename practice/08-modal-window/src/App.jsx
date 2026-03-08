import { useState } from 'react';
import Button from './components/Button';
import Modal from './components/Modal';
import Main from './components/Main';
import './index.css';

//Rus
// 1. Создайте отдельные компоненты:
//    - Button: универсальный компонент кнопки.
//    - Modal: универсальный компонент модального окна.
//    - Main: компонент, представляющий основное содержимое приложения.

// 2. Разместите файлы компонентов:
//    - Поместите компоненты Button, Modal и Main в отдельные файлы внутри папки src/components.

// 3. Экспортируйте и импортируйте компоненты:
//    - Экспортируйте Button, Modal и Main из их файлов.
//    - Импортируйте эти компоненты в тех местах, где они используются.

// 4. Создайте универсальный компонент Button:
//    - Настройте компонент так, чтобы он:
//      - Принимал проп `children` для отображения текста внутри кнопки.
//      - Принимал проп для изменения CSS-класса кнопки:
//          - Например, класс "button" для одной стилизации и "closeButton" для другой.
//      - Позволял добавлять разные функции в `onClick` (например, для закрытия модального окна).

// 5. Создайте универсальный компонент Modal:
//    - Настройте модальное окно с помощью следующих пропсов:
//      - `title`: текст заголовка окна.
//      - `content`: содержимое окна (текст или компоненты).
//      - `showCloseButton`: флаг, который управляет отображением кнопки закрытия.

// 6. Создайте функцию в App:
//    - Напишите функцию в компоненте App, которую можно передавать через пропсы в компонент Button.
//    - Эта функция будет выполнять какое-либо действие, например, открывать или закрывать модальное окно.

// 7. Избавьтесь от "prop drilling":
//    - Используйте технику component composition, чтобы передавать данные и функции напрямую между компонентами.
//    - Это поможет избежать передачи пропсов через промежуточный компонент Main.

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function toggleModalOpen(bool) {
    setIsModalOpen(bool);
  }

  return (
    <div className="app">
      <Main>
        <h1 className="title">Universal Modal Component</h1>
        <Button classList={'button'} onClick={() => toggleModalOpen(true)}>
          Open Modal
        </Button>
        {isModalOpen && (
          <div className="overlay" onClick={() => toggleModalOpen(false)}>
            <Modal
              toggleModalOpen={toggleModalOpen}
              onClick={(e) => e.stopPropagation()}
              title='Confirm Your Action'
              content='Are you sure you want to proceed? This action cannot be undone.'
              showCloseButton={isModalOpen}
            />
          </div>
        )}
      </Main>
    </div>
  );
}

export default App;

import { useState } from 'react';
import Header from './components/Header';
import Instruction from './components/Instruction';
import Main from './components/Main';
import Footer from './components/Footer';
import './index.css';

function App() {
  const [showInstructions, setShowInstructions] = useState(false);

  const toggleInstructions = () => {
    setShowInstructions((prev) => !prev);
  };

  const handleClick = () => {
    console.log('btn has clicked')
  }

  return (
    <div className="app">
      <Header
        showInstructions={showInstructions}
        toggleInstructions={toggleInstructions}
      />

      <Instruction showInstructions={showInstructions} />

      <Main handleClick={handleClick} />

      <Footer />
    </div>
  );
}

export default App;

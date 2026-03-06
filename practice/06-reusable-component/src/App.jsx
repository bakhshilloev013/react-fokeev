import { useState } from 'react';
import Header from './components/Header';
import Instruction from './components/Instruction';
import Main from './components/Main';
import Footer from './components/Footer';
import Button from './components/Button';
import Section from './components/Section';

import './index.css';

function App() {
  const [showInstructions, setShowInstructions] = useState(false);

  const toggleInstructions = () => {
    setShowInstructions((prev) => !prev);
  };

  const handleClick = () => {
    console.log('btn has clicked');
  };

  return (
    <div className="app">
      <Header
        showInstructions={showInstructions}
        toggleInstructions={toggleInstructions}
      />

      <Instruction showInstructions={showInstructions} />

      <Main>
        <Section titleText="Variants">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="gradient">Gradient</Button>
          <Button variant="outline">Outline</Button>
        </Section>

        <Section titleText="Sizes">
          <Button variant="primary" size="small">
            Small
          </Button>
          <Button variant="primary" size="medium">
            Medium
          </Button>
          <Button variant="primary" size="large">
            Large
          </Button>
        </Section>

        <Section titleText="Button States">
          <Button>Default</Button>
          <Button isDisabled>
            Disabled
          </Button>
        </Section>

        <Section titleText="Full Width Button">
          <Button variant="secondary" fullWidth>
            Full Width
          </Button>
        </Section>

        <Section titleText="With function">
          <Button onClick={handleClick} variant="primary">
            Click me
          </Button>
        </Section>
      </Main>

      <Footer />
    </div>
  );
}

export default App;

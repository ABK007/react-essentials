import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import ComponentImg from "./assets/components.png";
import TabButton from "./components/TabButton.jsx";
import { useState } from "react"
import { EXAMPLES } from "../data-with-examples.js";

function App() {
  const [selectedTopic, setSelectedTopic] = useState('components');

  function handleClick (selectedButton) {
        setSelectedTopic(selectedButton);
        console.log(selectedTopic)
    }
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>

        <CoreConcepts
          title="Components"
          description="Learn about the building blocks of React applications."
          img={ComponentImg}
        />
        <section id="examples">
          <menu>
            <TabButton onSelect={() => handleClick('components')}>Components</TabButton>
            <TabButton onSelect={() => handleClick('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => handleClick('props')}>Props</TabButton>
            <TabButton onSelect={() => handleClick('state')}>State</TabButton>

          </menu>
          <div id='tab-content'>
            <h3 >{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>

          </div>
        </section>
      </main>
    </div>
  );
}

export default App;

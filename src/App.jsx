import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import ComponentImg from "./assets/components.png";
import TabButton from "./components/TabButton.jsx";
import { useState } from "react"

function App() {
  const [selectedTopic, setSelectedTopic] = useState(null);

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
            <TabButton onSelect={() => handleClick('function-based')}>Function-based</TabButton>
            <TabButton onSelect={() => handleClick('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => handleClick('props')}>Props</TabButton>
            <TabButton onSelect={() => handleClick('state')}>State</TabButton>

          </menu>
          {selectedTopic}
        </section>
      </main>
    </div>
  );
}

export default App;

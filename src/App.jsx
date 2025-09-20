import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import ComponentImg from "./assets/components.png";
import TabButton from "./components/TabButton.jsx";

function App() {
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
            <TabButton>Class-based</TabButton>
            <TabButton>Function-based</TabButton>
            <TabButton>JSX</TabButton>
            <TabButton>Props</TabButton>
            <TabButton>State</TabButton>

          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;

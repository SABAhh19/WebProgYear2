import Header from "./Header";
import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS } from "./data";
import TabButton from "./TabButton";

import { useState } from "react";

function App() {
  // let selectedTopic = "Please Choose A Topic";

  const [selectedTopic, setSelectedTopic] = useState("Please select topic");

  function handleClick(value) {
    setSelectedTopic(value);
    console.log(selectedTopic);
  }

  return (
    <>
      <main>
        <Header />
        <div id="core-concepts">
          <h2>how to live healthy</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </div>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleClick("Work-out")}>
              Work-out
            </TabButton>
            <TabButton onSelect={() => handleClick("Eating")}>Eating</TabButton>
            <TabButton onSelect={() => handleClick("Sleep")}>Sleep</TabButton>
            <TabButton onSelect={() => handleClick("Discipline")}>
              Discipline
            </TabButton>
          </menu>
          {selectedTopic}
        </section>
      </main>
    </>
  );
}

export default App;

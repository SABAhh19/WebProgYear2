import Header from "./Header";
import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS } from "./data";
import TabButton from "./TabButton";

function App() {
  return (
    <>
      <main>
        <Header />
        <div id="core-concepts">
          <h2>how to live healthy</h2>
          <ul>
            <CoreConcept
              img={CORE_CONCEPTS[0].image}
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
            />
            <CoreConcept
              img={CORE_CONCEPTS[1].image}
              title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
            />
            <CoreConcept
              img={CORE_CONCEPTS[2].image}
              title={CORE_CONCEPTS[2].title}
              description={CORE_CONCEPTS[2].description}
            />
            <CoreConcept
              img={CORE_CONCEPTS[3].image}
              title={CORE_CONCEPTS[3].title}
              description={CORE_CONCEPTS[3].description}
            />
          </ul>
        </div>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton title="Love" />
            <TabButton title="Sad" />
            <TabButton title="Happy" />
            <TabButton title="Health" />
          </menu>
        </section>
      </main>
    </>
  );
}

export default App;

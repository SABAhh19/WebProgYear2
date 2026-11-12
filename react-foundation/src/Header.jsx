import reactCoreConceptsImg from "./assets/react-core-concepts.png";

const titles = ["Fundamentals", "Crucial", "Core"];

function getRandomInt() {
  return Math.floor(Math.random() * 3);
}

function Header() {
  return (
    <header>
      <img src={reactCoreConceptsImg} alt="Stylized atoms" />
      <h1>React Essentials</h1>
      <p>
        {titles[getRandomInt()]} React concepts you will need for almost any app
        you are going to build
      </p>
    </header>
  );
}

export default Header;

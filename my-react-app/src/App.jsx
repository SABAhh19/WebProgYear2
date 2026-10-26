import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Cards from "./components/Cards";
import Menu from "./components/Menu";

function App() {
  const username = "anano";
  const age = 6;
  let message = null;

  if (age > 18) {
    message = "is legal";
  } else {
    message = "is not legal";
  }

  return (
    <>
      <div>
        <h1>{username}</h1>
        <p>{message}</p>
      </div>
    </>
  );
}

export default App;

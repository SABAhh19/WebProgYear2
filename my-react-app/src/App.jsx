import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Cards from "./components/Cards";
import Menu from "./components/Menu";
import UserGreetings from "./UserGreetings";

function App() {
  return (
    <>
      <UserGreetings isLoggedIn={true} username="SABAhh" />
    </>
  );
}

export default App;

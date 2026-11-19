import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Cards from "./components/Cards";
import Menu from "./components/Menu";
import UserGreetings from "./UserGreetings";

const [price, setPrice] = useState(100);

const handleApplyDiscount = () => {
  setPrice(80);
};

return (
  <div>
    <p>{price}</p>
    <button onSelect={handleApplyDiscount}>Apply Discount</button>
  </div>
);

export default App;

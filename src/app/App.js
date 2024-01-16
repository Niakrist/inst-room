import DownMenu from "./components/header/downMenu/DownMenu";
import UpMenu from "./components/header/upMenu/UpMenu";
import CartsList from "./components/screens/cartsList/CartsList";
import Promo from "./components/screens/promo/Promo";
import "./styles/default.css";

function App() {
  return (
    <>
      <header className="header">
        <UpMenu />
        <DownMenu />
      </header>
      <main>
        <Promo />
        <section className="carts-list__section">
          <CartsList />
        </section>
      </main>
    </>
  );
}

export default App;

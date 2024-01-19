import DownMenu from "./components/header/downMenu/DownMenu";
import UpMenu from "./components/header/upMenu/UpMenu";
import About from "./components/screens/about/About";
import CartsList from "./components/screens/cartsList/CartsList";
import Promo from "./components/screens/promo/Promo";
import Sliders from "./components/screens/slider/Sliders";
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
        <section className="sliders-section">
          <Sliders />
        </section>
        <section className="section-about">
          <About />
        </section>
      </main>
    </>
  );
}

export default App;

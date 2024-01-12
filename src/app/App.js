import DownMenu from "./components/header/downMenu/DownMenu";
import UpMenu from "./components/header/upMenu/UpMenu";
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
      </main>
    </>
  );
}

export default App;

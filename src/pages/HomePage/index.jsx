import './style.css';
import CreditCardInput from '../../components/CreditCardInput';
import picture from "./img/money.png"

export const HomePage = () => {
  return (
    <div className="container">
      <header>
        <div className="logo" />
        <h1>Vstupy pro zadání čísla kreditní karty</h1>
      </header>
      <main>
        <CreditCardInput/>
      </main>
      <footer>
        <p></p>
      </footer>
    </div>
  );
};

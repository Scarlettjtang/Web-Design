import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { sushiData } from "./data.js";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

// Header component
function Header() {
  const style = {};
  return (
    <header className="header">
      <h1 style={style}>Scarlett's Sushi Kitchen</h1>
    </header>
  );
}

// Menu component
function Menu() {
  const sushis = sushiData;
  const numSushi = sushis.length;
  return (
    <main className="menu">
      <h2>Chef Specialty Rolls</h2>
      {numSushi > 0 ? (
        <React.Fragment>
          <p>10 creactive dishes to choose from. All organic, all delicious</p>
          <ul className="sushis">
            {sushis.map((sushi) => (
              <Sushi sushiObject={sushi} key={sushi.name} />
            ))}
          </ul>
        </React.Fragment>
      ) : (
        <p>We're still working on our menu. Please come back later :)</p>
      )}
    </main>
  );
}

// Sushi component
function Sushi({ sushiObject }) {
  return (
    <li className={`sushi ${sushiObject.soldOut ? "sold-out" : ""}`}>
      <img src={sushiObject.photoName} alt={sushiObject.name} />
      <div>
        <h3>{sushiObject.name}</h3>
        <p>
          <b>In:</b> {sushiObject.inIngredients}
        </p>
        <p>
          <b>Out:</b> {sushiObject.outIngredients}
        </p>
        <span>{sushiObject.soldOut ? "SOLD OUT" : sushiObject.price}</span>
      </div>
    </li>
  );
}

// Footer component
function Footer() {
  const hour = new Date().getHours();
  const openHouse = 11;
  const closeHouse = 22;
  const isOpen = hour >= openHouse && hour <= closeHouse;
  console.log(isOpen);

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHouse={closeHouse} openHouse={openHouse} />
      ) : (
        <p>
          We' re happy to welcome you between {openHouse}:00 and {closeHouse}:00
        </p>
      )}
    </footer>
  );
}

//  Order Component
function Order({ closeHouse, openHouse }) {
  return (
    <div className="order">
      <p>
        We're open until {openHouse}:00 to {closeHouse}:00. Come to visit us or
        order online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

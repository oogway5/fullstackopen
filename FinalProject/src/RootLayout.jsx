import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

export default function RootLayout() {
  const [cart, setCart] = useState([]);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="app-container">
      <Navbar totalItems={totalItems} />
      <main className="main-content">
        <Outlet context={{ cart, setCart }} />
      </main>
    </div>
  );
}
import { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Ritual from "./components/Ritual.jsx";
import Trilingual from "./components/Trilingual.jsx";
import Footer from "./components/Footer.jsx";
import OrderPanel from "./components/OrderPanel.jsx";

export default function App() {
  const [orderOpen, setOrderOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = orderOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [orderOpen]);

  return (
    <>
      <Header onOrder={() => setOrderOpen(true)} />
      <main>
        <Hero onOrder={() => setOrderOpen(true)} />
        <Ritual />
        <Trilingual />
      </main>
      <Footer />
      <OrderPanel open={orderOpen} onClose={() => setOrderOpen(false)} />
    </>
  );
}

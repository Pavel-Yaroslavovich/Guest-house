import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Landscapes from "./components/landscapes/Landscapes";
import GuestHouse from "./components/guestHouse/GuestHouse";
import Sleeping from "./components/sleeping/Sleeping";
import PerfectEscape from "./components/perfectEscape/PerfectEscape";
import PastGuests from "./components/pastGuests/PastGuests";
import ComeTogether from "./components/comeTogether/ComeTogether";
import Places from "./components/places/Places";
import Footer from "./components/footer/Footer";
import Modal from "./components/modal/Modal";

function App() {
  const [modalActive, setModalActive] = useState(false);
  const handlToggle = () => {
    setModalActive(!modalActive);
  };
  return (
    <div className="App">
      <Header setActive={handlToggle} />
      <Landscapes />
      <GuestHouse />
      <Sleeping />
      <PerfectEscape />
      <PastGuests />
      <ComeTogether />
      <Places />
      <Footer />
      <Modal active={modalActive} setActive={setModalActive} />
    </div>
  );
}

export default App;

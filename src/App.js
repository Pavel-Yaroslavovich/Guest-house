import "./App.css";
import Header from "./components/Header";
import Landscapes from "./components/Landscapes";
import GuestHouse from "./components/GuestHouse";
import Sleeping from "./components/Sleeping";
import PerfectEscape from "./components/PerfectEscape";
import PastGuests from "./components/PastGuests";
import ComeTogether from "./components/ComeTogether";
import Places from "./components/Places";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Landscapes />
      <GuestHouse />
      <Sleeping />
      <PerfectEscape />
      <PastGuests />
      <ComeTogether />
      <Places />
      <Footer />
    </div>
  );
}

export default App;

import Home from "./Pages/Home";
import List from "./Pages/List";
import SingleHotel from "./Pages/SingleHotel";
import Payment from "./Pages/Payment";
import { Route, Routes } from "react-router-dom";
import PaymentSuccess from "./Pages/PaymentSuccess";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/hotels" element={<List />}></Route>
        <Route path="/hotel/:city/:id" element={<SingleHotel />}></Route>
        <Route path="/payment" element={<Payment />}></Route>
        <Route path="/payment/success" element={<PaymentSuccess />}></Route>
      </Routes>
    </div>
  );
}

export default App;

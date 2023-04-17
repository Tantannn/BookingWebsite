import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Transactions from './pages/transactions/Transactions'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<List />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route path="/hotels/:id" element={<Hotel />} />
        <Route
          path="/transactions"
          element={<Transactions />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
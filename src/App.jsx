import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Properties from "./pages/Properties";
import Navbar from "./components/Navbar";
import OwnerSetup from "./pages/listing/OwnerSetup";
import ExistingOwnerList from "./pages/listing/ExistingOwnerList";
import ListProperty from "./pages/listing/ListProperty";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/owner-setup" element={<OwnerSetup />} />
        <Route path="/list-property" element={<ListProperty />} />
        <Route path="/existing-owner-list" element={<ExistingOwnerList />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </>
  );
}

export default App;
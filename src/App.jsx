import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Properties from "./pages/Properties";
import OwnerSetupPage from "./pages/listing/OwnerSetup";
import ListProperty from "./pages/listing/ListProperty";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/properties" element={<Properties />} />
      <Route path="/list-property" element={<OwnerSetupPage />} />
      <Route path="/list-property/details" element={<ListProperty />} />
    </Routes>
  );
}

export default App;
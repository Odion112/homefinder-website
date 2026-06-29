import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Properties from "./pages/Properties";
import ExistingOwnerList from "./pages/listing/ExistingOwnerList";


function App() {
  return (
    <>

    <ExistingOwnerList />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<Properties />} />
      </Routes>
    </>
  );
}

export default App;

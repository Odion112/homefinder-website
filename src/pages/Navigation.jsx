import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./Home";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

import Properties from "./Properties";
import PropertyDetails from "./PropertyDetails";

import OwnerSetup from "./listing/OwnerSetup";
import ListProperty from "./listing/ListProperty";
import ExistingOwnerList from "./listing/ExistingOwnerList";
import MyListings from "./listing/MyListings";

export default function Navigation() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/property-details" element={<PropertyDetails />} />

        {/* Auth */}
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />

        {/* Listing Flow */}
        <Route path="/list-property" element={<ListProperty />} />
        <Route path="/owner-setup" element={<OwnerSetup />} />
        <Route path="/existing-owner-list" element={<ExistingOwnerList />}/>
        <Route path="/my-listings" element={<MyListings />}/>



        {/* Redirect unknown routes */}
        <Route path="*" element={<Navigate to="/" replace />} />

      </Routes>
    </BrowserRouter>
  );
}
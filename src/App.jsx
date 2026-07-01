
import ProfileProvider from "./context/ProfileContext";
import TokenProvider from "./context/TokenContext";
import Navigation from "./pages/Navigation";


export default function App() {
  return (
    <TokenProvider>
      <ProfileProvider>
        <Navigation />
      </ProfileProvider>
    </TokenProvider>
  );
}
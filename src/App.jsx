import { Header } from "./components/Header";
import { Profile } from "./components/Profile";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <main className="p-4">
        <Header />
        <Profile />
        <Footer />
      </main>
    </div>
  );
}

export default App;

import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { CreationsList } from "./components/Creations";
import { creations } from "./data/creations";
import type { Creation } from "./types/creation";

function App() {
  return (
    <>
      <Hero />
      <About />
      <CreationsList creations={creations} />
      <Footer />
    </>
  );
}

export default App;

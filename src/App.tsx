import './App.css';
import { HelmetProvider } from 'react-helmet-async';
import { Navigation } from './sections/Navigation';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Services } from './sections/Services';
import { Products } from './sections/Products';
import { Gallery } from './sections/Gallery';
import { Goals } from './sections/Goals';
import { Contact } from './sections/Contact';
import { LogoBanner } from './sections/LogoBanner';
import { Footer } from './sections/Footer';

function App() {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-brand-concrete">
        <Navigation />
        <main>
          <Hero />
          <About />
          <Services />
          <Products />
          <Gallery />
          <Goals />
          <Contact />
          <LogoBanner />
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;
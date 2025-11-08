import Header from './components/Header';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-pink-50 via-white to-purple-50 text-gray-900">
      <Header />
      <main>
        <Hero />
        <Timeline />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}

export default App;

import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero';
import About from './Components/About'
import Technologies from './Components/Technologies';
import Education from './Components/Education';
import { EDUCATIONS } from './constants';
import Projects from './Components/Projects';
import Contacts from './Components/Contacts';

export const App = () => {
  return (
    <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900'>
      <div className='fixed top-00 -z-10 h-full w-full'>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
</div>
import PreLoader from './components/PreLoader';
import './App.css'; // Your main styles

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a data fetching or loading process
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the timeout to match your actual loading time

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {loading ? <PreLoader /> : <div>Your main content goes here.</div>}
    </div>
  );
};

<div className='container mx-auto px-8'>
  <Navbar />
  <Hero />
  <About />
  <Technologies />
  <Education />
  <Projects />
  <Contacts />
  </div>
    </div>
  );
}
export default App
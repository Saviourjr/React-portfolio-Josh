
import React from 'react'
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> parent of 5a6b967 (first commit)
import Navbar from './Components/Navbar'
=======
>>>>>>> fe9e31c8c8482aa2ec5f79a1a1ef561467420885
import Hero from './Components/Hero';
import About from './Components/About'
import Technologies from './Components/Technologies';
import Education from './Components/Education';
import { EDUCATIONS } from './constants';
import Projects from './Components/Projects';
import { CONTACT } from './constants';
import Contacts from './Components/Contacts';


export const App = () => {
  return (
    <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900'>
      <div className='fixed top-00 -z-10 h-full w-full'>
      <div class="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
</div>
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> fe9e31c8c8482aa2ec5f79a1a1ef561467420885
=======
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

>>>>>>> parent of 5a6b967 (first commit)
<div className='container mx-auto px-8'>
 
  <Hero />
  <About />
<Projects />
<Contacts />

  </div>
    </div>
  );
}
export default App
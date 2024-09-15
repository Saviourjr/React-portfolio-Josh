
import React from 'react'

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
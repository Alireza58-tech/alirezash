import Projects from './components/Projects';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Tech from './components/Tech';


function App() {
  

  return (
    <>
      <div class="fixed -z-10 min-h-screen w-full 
      [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>


     <main className='flex flex-col items-center px-4 md:px-8 lg:px-16'>
      <Navbar/>
      <Hero/>
      <Tech/>
      <Projects/>
     </main>
    </>
  )
}

export default App
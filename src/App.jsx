
import './App.css'
import Hero from './components/Hero'
import Navbar from './components/NavBar'
import Features from './components/Features'
import Process from './components/Process'
import Stats from './components/Stats'
import CTA from './components/CTA'
import Footer from './components/Footer'
import { Analytics } from '@vercel/analytics/react';

function App() {


  return (
    <div>
      
     <Navbar/>
     <Hero/> 
     <Features/> 
     <Process/> 
     <Stats/>
     <CTA/>
     <Footer/>
<Analytics />
    </div>
  )
}

export default App

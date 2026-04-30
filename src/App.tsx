import Navbar from './components/Navbar'
import Hero from './components/sections/Hero'
import Problem from './components/sections/Problem'
import Solution from './components/sections/Solution'
import HowItWorks from './components/sections/HowItWorks'
import Architecture from './components/sections/Architecture'
import Features from './components/sections/Features'
import BeforeAfter from './components/sections/BeforeAfter'
import DeveloperExperience from './components/sections/DeveloperExperience'
import UseCases from './components/sections/UseCases'
import Traction from './components/sections/Traction'
import WhyNow from './components/sections/WhyNow'
import FinalCTA from './components/sections/FinalCTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <Architecture />
        <Features />
        <BeforeAfter />
        <DeveloperExperience />
        <UseCases />
        <Traction />
        <WhyNow />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}

export default App

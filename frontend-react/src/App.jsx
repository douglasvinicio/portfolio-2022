import { About, Footer, Header, Skills, Testimonials, Work } from './container'
import { Navbar } from './components'

import './App.scss'

export function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <Work />
      <About />      
      <Skills />
      <Testimonials />
      <Footer/>      
    </div>    
  )
}
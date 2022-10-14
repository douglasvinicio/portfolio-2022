import { About, Footer, Header, Work } from './container'
import { Navbar } from './components'

import './App.scss'

export function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <Work />
      <About />      
      <Footer/>      
    </div>    
  )
}
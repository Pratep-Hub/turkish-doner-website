import './App.css'
import AboutUs from './Components/AboutUs'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Home from './Components/Home'
import Menu from './Components/Menu'
import Navbar from './Components/Navbar'
import ScrollTopButton from './Components/ScrollTopButton';
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Menu />
      <AboutUs/>
      <Contact/>
      <Footer/>

       <ScrollTopButton />
    </>
  )
}

export default App


import { BrowserRouter as Router, Routes,Route, BrowserRouter } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Footer from './pages/Footer';
import Home from './component/Home';
import About from './component/About';
function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes className='min-h-screen max-w-screen-2xl mx-auto px-4 py-6 font-primary'>
      <Route path='/' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App

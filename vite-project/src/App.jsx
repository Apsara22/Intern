import {BrowserRouter,Route, Routes} from 'react-router-dom'
import Header from "./Componet/Header"
import Home from './Componet/Home'

function App() {

  return (
    <>
    <Header/>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={< Home/>} />
</Routes>
</BrowserRouter>

    
    </>
  )
}

export default App

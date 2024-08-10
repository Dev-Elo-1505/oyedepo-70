
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import { HomePage } from './pages'

function App() {
  return (
    <>
     <NavBar />
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<HomePage />} />
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App

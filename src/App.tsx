
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import { HomePage, NotFoundPage } from './pages'

function App() {
  return (
    <>
     <NavBar />
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='*' element={<NotFoundPage />} />
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App

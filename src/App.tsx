
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import { HomePage, NotFoundPage, AboutPage, QuotesPage } from './pages'
import AboutInfoPage from './pages/AboutInfoPage'


function App() {
  return (
    <BrowserRouter>
    <div>
     <NavBar />
     <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/about/:aboutId' element={<AboutInfoPage />} />
      <Route path='/quotes' element={<QuotesPage />} />
      <Route path='*' element={<NotFoundPage />} />
     </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App

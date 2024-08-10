import { Link } from 'react-router-dom'
import logo from '../assets/logo.webp'

const NavBar = () => {
    return (
    <nav className='flex items-center justify-between px-8 py-4 w-full shadow font-sarala'>
        <div className='flex items-center gap-2'>
            <img className='w-10 h-10' src={logo} alt="Winner's Chapel Logo" />
            <h2 className='font-bold'>OYEDEPO@70</h2>
        </div>
        <ul className='flex items-center gap-4'>
            <li>Quotes</li>
            <li>Sermons</li>
            <li>Timelines</li>
        </ul>
    </nav>
)
}

export default NavBar


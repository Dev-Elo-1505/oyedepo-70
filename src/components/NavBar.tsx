import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logo.webp'

const NavBar = () => {
    return (
    <nav className='flex items-center justify-between px-8 py-4 w-full shadow font-sarala'>
        <div className='flex items-center gap-2'>
            <img className='w-10 h-10' src={logo} alt="Winner's Chapel Logo" />
            <Link to='/'><h2 className='font-bold'>OYEDEPO@70</h2></Link>
        </div>
        <ul className='flex items-center gap-4'>
            <li><NavLink className={({ isActive}) => isActive? "border-b-2 border-red-500" : "border-none"} to='/about'>About</NavLink></li>
            <li><NavLink className={({ isActive}) => isActive? "border-b-2 border-red-500" : "border-none"} to='/about'>Quotes</NavLink></li>
            <li><NavLink className={({ isActive}) => isActive? "border-b-2 border-red-500" : "border-none"} to='/about'>Sermons</NavLink></li>
            <li><NavLink className={({ isActive}) => isActive? "border-b-2 border-red-500" : "border-none"} to='/about'>Timelines</NavLink></li>
        </ul>
    </nav>
)
}

export default NavBar


import { NavLink } from 'react-router'

function Navbar() {
  return (
    <nav>
      <div>book a taxi</div>
      <ul>
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/about">About Us</NavLink></li>
        <li><NavLink to="/services">Services</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/booking">Book a Ride</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar

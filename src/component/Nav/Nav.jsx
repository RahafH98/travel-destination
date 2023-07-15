import { Link } from 'react-router-dom'
import './Nav.css'
export default function Nav() {
   
    return (
    <>
    <div className='header'>
       <Link to={'/'}>Home</Link>
    </div>
    </>
    )
  }
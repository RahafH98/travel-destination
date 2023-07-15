import { Outlet } from 'react-router-dom';
import Nav from '../Nav/Nav';


export default function Layout() {
  return (
  <>
<Nav></Nav>
  <div className="container">
  <Outlet></Outlet>
  </div>


  </>
  )
}
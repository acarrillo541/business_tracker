import Sidebar from './sidebar';
import Navbar from './navbar';
import Home from './pages/home';
import Login from './pages/login';
import Contacts from './pages/contacts';
import Projects from './pages/projects';
import './layout.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
 } from 'react-router-dom';

export default function Layout(){
  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root/>}>
        <Route index element={<Home/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
        <Route path='/login' element={<Login/>}/>
      </Route>

    )
  );

  return(
    <RouterProvider router={router}/>
  );
}


const Root = () =>{
  return(
  <div className='layout'>
    <div className='sidebar'>
      <Sidebar/>
    </div>
    <div className='context'>
      <div className='navbar'>
        <Navbar/>
      </div>
      <div className='body'>
        <Outlet/>
      </div>
    </div>
 </div>
  );
  
}


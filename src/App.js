import logo from './logo.svg';
import './App.css';
import Home from "./component/Home/Home"
import Details from './component/Details/Details';
import {BrowserRouter, Route, RouterProvider, createBrowserRouter} from "react-router-dom"
import Layout from './component/Layout/Layout';
function App() {
  let router =createBrowserRouter([{
    path:"",element:<Layout />,children:[
      {index:true,element: <Home></Home>},
      {path:"Details/:id",element:<Details></Details> },
     
    ]
  }])
  return (
  
<>
<RouterProvider router={router}></RouterProvider>
</>
  );
}

export default App;

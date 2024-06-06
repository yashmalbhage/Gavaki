import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home';
import  Forms  from './pages/Forms';
import Contact from './pages/contact';
import  NFRAI  from './pages/NFRAI';
import  Applayout  from './layout/Applayout';
const Router = createBrowserRouter([
  {
    element:<Applayout/>,
    children:[
      {
        path:'/',
        element:<Home/>

      },
      {
        path:'/NFRAI',
        element:<NFRAI/>
      },
      {
        path:'/Contact us',
        element:<Contact/>
      },
      {
        path:'/Forms',
        element:<Forms/>
      }
    
    ]
  }
])

function App() {
  return (
    <>
    <RouterProvider router={Router}/>
     </>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { useEffect, useState } from 'react';
import Home from './pages/Home';
import  Forms  from './pages/Forms';
import Contact from './pages/contact';
import  NFRAI  from './pages/NFRAI';
import  Applayout  from './layout/Applayout';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import Popup from './components/Popup';
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
    <I18nextProvider i18n={i18n}>
     
    <RouterProvider router={Router}/>
     </I18nextProvider>
  );
}

export default App;

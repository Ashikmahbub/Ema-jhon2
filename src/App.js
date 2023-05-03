 
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './component/layouts/Main';
import About from './component/About/About';
import Orders from './component/Orders/Orders';
import Shop from './component/Shop/Shop';
import Inventory from './component/Inventory/Inventory';
import { productCartLoaders } from './Loaders/productCartLoaders';
import Login from './component/Login/Login';
import SignUp from './component/SignUp/SignUp';
 
 

 

function App() {
  const router = createBrowserRouter([
    {
      path:'/' ,
      element : <Main></Main>,
      children:[
        {
          path:'/',
          loader:productCartLoaders,
          element:<Shop></Shop>
        },
        {
          path:'orders',
          loader:productCartLoaders,
          element:<Orders></Orders>
        },
        {
          path:'inventory',
          element:<Inventory></Inventory>
        },
        {
          path:'about',
          element:<About></About>
        },
        {
          path:'login',
          element:<Login></Login>
        },
        {
          path:'signup',
          element:<SignUp></SignUp>
        }
      ]
       

    }
    
   
  ])
  return(
    <div className='mainApp'>
      <RouterProvider router={router}></RouterProvider>
       

     
   </div>

  );
   
  
  
}
export default App;

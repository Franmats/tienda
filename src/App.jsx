import './App.css';
/* import 'react-toastify/dist/ReactToastify.css'; */
//Router
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// React Toastify
/* import { ToastContainer } from 'react-toastify'; */
//Components
/* import {NavBar} from './components/NavBar/NavBar.jsx';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer.jsx';
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer.jsx';
import { Checkout } from './components/Checkout/Checkout'; */
import { CartProvider } from './components/CartContext/CartContext.jsx';
import ProductList from './components/Products/ProductsList.jsx';
import {CartSummary }from './components/CartSummary/CartSummary.jsx';
import {NavBar} from './components/NavBar/Navbar.jsx';
import ProductsFilter from './components/ProducstFilter/ProductsFilter.jsx';
function App() {
  /* crearProductosEnBdd() */
  return (
    <div className="App">
     <CartProvider>
      <BrowserRouter>
      
       
        <NavBar/>
        <ToastContainer />
        <Routes> 

            <Route path='/' element={<ProductList/>}/> 
            <Route path='/:name' element={<ProductsFilter/>}/> 
            <Route path='/cart' element={<CartSummary/>}/>

      

            <Route path='*' element={<h1>404 Not Found</h1>}/> 

        </Routes>   
       
      </BrowserRouter>
       </CartProvider>
     
    </div>

  );
}

export default App;

import React from 'react';
import{ BrowserRouter, Route,Link} from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';
import CartScreen from './Screens/CartScreen'
// import logo from './logo.svg';
import './App.css';

function App() {
  const openMenu = ()=>{
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu = ()=>{
    document.querySelector(".sidebar").classList.remove("open");
  }
  return (
    <BrowserRouter>
    <div className="grid-container">
    <header className="header">
        <div className="brand">
            <button onClick={openMenu}>
                &#9776;
            </button>
            <Link to="/"> Rebkon Services</Link>
            

        </div>

        <div className="header-links">
            <a href="cart.html">Cart</a>
            
            <a href="signin.html">Sign In</a>

        </div>
    </header>
    <aside className="sidebar">
       <h3>Shopping Categories</h3> 
       <button className="sidebar-close-btn" onClick={closeMenu}>x</button>
       <ul>
           <li><a href="/"></a>Tops and Shirts</li>
           <li><a href="/"></a>Buttoms and Pants</li>
       </ul>
    </aside>
    <main className="main">
        <div className="content">
          <Route path="/product/:id" component={ProductScreen}/>
          <Route path="/" exact={true} component={HomeScreen}/>
          <Route path="/cart/:id?" component={CartScreen} />
       
    </div>
    </main>
    <footer className="footer">
        All Rights Reserved. 
    </footer>
</div>
</BrowserRouter>
  );
}

export default App;

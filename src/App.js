import React from 'react';
import './App.css'; // Import your CSS for styling
import ProductList from './components/ProductList';
import { products } from './products';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  // Sample product data (you can fetch this from an API)

  return (
    <div className="App">
      <Header />
      <header>
        <h3>Product Catalog</h3>
      </header>
      <main>
        <ProductList products={products} />
      </main>
      <Footer />
    </div>
  );
}

export default App;

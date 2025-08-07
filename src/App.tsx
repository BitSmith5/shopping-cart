import { CartProvider } from './contexts/CartContext'
import { Cart } from './components/Cart'
import { CartSummary } from './components/CartSummary'
import { ProductList } from './components/ProductList'

function App() {
  // Example products data
  const products = [
    { id: '1', name: 'Sci-Fi Gadget X1', description: 'Advanced technology from the future', price: 29.99, image: 'https://via.placeholder.com/150' },
    { id: '2', name: 'Neon Light Device', description: 'Illuminate your world with style', price: 39.99, image: 'https://via.placeholder.com/150' },
    { id: '3', name: 'Holographic Display', description: 'Project your dreams into reality', price: 49.99, image: 'https://via.placeholder.com/150' },
    { id: '4', name: 'Quantum Computer', description: 'Computing power beyond imagination', price: 199.99, image: 'https://via.placeholder.com/150' }
  ];

  return (
    <div className="app">
      <CartProvider>
        <header className="app-header">
          <h1 className="app-title">Sci-Fi Shopping Cart</h1>
        </header>
        
        <main className="app-main">
          <div className="app-content">
            <ProductList products={products} />
          </div>
          
          <aside className="app-sidebar">
            <Cart />
            <CartSummary />
          </aside>
        </main>
      </CartProvider>
    </div>
  )
}

export default App

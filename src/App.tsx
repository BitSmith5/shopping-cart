import { CartProvider } from './contexts/CartContext'
import { Cart } from './components/Cart'
import { CartSummary } from './components/CartSummary'
import { ProductList } from './components/ProductList'

function App() {
  // Example products data
  const products = [
    { id: '1', name: 'Quantum Navigation Module', description: 'Advanced positioning system for deep space exploration', price: 29.99, image: 'https://via.placeholder.com/150' },
    { id: '2', name: 'Plasma Thruster Array', description: 'High-efficiency propulsion system for orbital maneuvers', price: 39.99, image: 'https://via.placeholder.com/150' },
    { id: '3', name: 'Holographic Interface Panel', description: 'Next-generation control system for spacecraft operations', price: 49.99, image: 'https://via.placeholder.com/150' },
    { id: '4', name: 'Neural Network Processor', description: 'AI-powered computing core for autonomous systems', price: 199.99, image: 'https://via.placeholder.com/150' }
  ];

  return (
    <div className="app">
      <CartProvider>
        <header className="app-header">
          <h1 className="app-title">Space Commerce Hub</h1>
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

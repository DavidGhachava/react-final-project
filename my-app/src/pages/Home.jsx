import Hero from '../components/Hero'
import ProductGrid from '../components/ProductGrid'

function Home({ onAddToCart }) {
  return (
    <>
      <Hero />
      <ProductGrid onAddToCart={onAddToCart} />
    </>
  )
}

export default Home
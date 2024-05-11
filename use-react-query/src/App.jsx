import ProductList from "./components/ProductList"
import ProductDetails from "./components/ProductDetails"
import AddProduct from "./components/AddProduct"
import { useState } from "react"
function App() {
  const [productId, setProductId] = useState(null)

  const getProductId = (id) => {
    setProductId(id)
  }

  return (
    <div className="flex m-2">
      <AddProduct />
      <ProductList onProductId={getProductId} />
      {productId && <ProductDetails id={productId}/>}
    </div>
  )
}

export default App

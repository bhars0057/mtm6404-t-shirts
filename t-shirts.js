const tshirts = [
  {
    title: 'Blue T-Shirt',
    image: 'blue-t-shirt.jpg',
    price: 7.99,
    stock: 4,
    quantity: 1
  },
  {
    title: 'Bright Purple T-Shirt',
    image: 'bright-purple-t-shirt.jpg',
    price: 5.99,
    stock: 1,
    quantity: 1
  },
  {
    title: 'Cobalt Blue T-Shirt',
    image: 'cobalt-blue-t-shirt.jpg',
    price: 9.99,
    stock: 5,
    quantity: 1
  },
  {
    title: 'Green T-Shirt',
    image: 'green-t-shirt.jpg',
    price: 6.99,
    stock: 0,
    quantity: 1
  },
  {
    title: 'Grey T-Shirt',
    image: 'blue-t-shirt.jpg',
    price: 4.99,
    stock: 2,
    quantity: 1
  },
  {
    title: 'Light Green T-Shirt',
    image: 'light-green-t-shirt.jpg',
    price: 7.99,
    stock: 4,
    quantity: 1
  },
  {
    title: 'Purple T-Shirt',
    image: 'purple-t-shirt.jpg',
    price: 7.99,
    stock: 0,
    quantity: 1
  },
  {
    title: 'Red T-Shirt',
    image: 'red-t-shirt.jpg',
    price: 6.99,
    stock: 3,
    quantity: 1
  },
  {
    title: 'Teal T-Shirt',
    image: 'teal-t-shirt.jpg',
    price: 7.99,
    stock: 2,
    quantity: 1
  }
]

const App = () => {
  return (
    <div className="container">
      <h1>T-Shirts Store</h1>
      <TshirtGrid />
    </div>
  )
}

const TshirtGrid = () => {
  return (
    <div className="grid">
      {tshirts.map((tshirt, index) => (
        <Tshirt key={index} shirt={tshirt} />
      ))}
    </div>
  )
}

const Tshirt = ({ shirt }) => {
  const [stock, setStock] = React.useState(shirt.stock)
  const [quantity, setQuantity] = React.useState(1)

  const handleBuy = () => {
    if (quantity > 0 && quantity <= stock) {
      setStock(stock - quantity)
      setQuantity(1)
    }
  }

  return (
    <div className="tshirt-card">
      <img src={`./images/${shirt.image}`} alt={shirt.title} />
      <h2>{shirt.title}</h2>
      <p className="price">${shirt.price.toFixed(2)}</p>
      {stock > 0 ? (
        <>
          <p className="stock-available">{stock} left</p>
          <select value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))}>
            {[...Array(stock).keys()].map(i => (
              <option key={i + 1} value={i + 1}>{i + 1}</option>
            ))}
          </select>
          <button onClick={handleBuy}>Buy Now</button>
        </>
      ) : (
        <p className="out-of-stock">Out of Stock</p>
      )}
    </div>
  )
}

const container = document.getElementById("root")
const root = ReactDOM.createRoot(container)
root.render(<App />)

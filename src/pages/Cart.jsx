const Cart = ({ cart }) => {

  const total = cart.reduce((sum, item) => sum + item.price, 0)

  return (

    <div className="container">

      <h2>Your Cart</h2>

      {cart.length === 0 && <p>Your cart is empty</p>}

      {cart.map((item, index) => (

        <div key={index} className="cart-item">

          <img src={item.image} width="60" />

          <div>

            <p>{item.title}</p>

            <p>${item.price}</p>

          </div>

        </div>

      ))}

      <h3 className="cart-total">Total: ${total.toFixed(2)}</h3>

    </div>
  )
}

export default Cart
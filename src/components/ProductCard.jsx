const ProductCard = ({ product, onAddToCart }) => {

  return (
    <div className="product-card">

      <div className="image-container">
        <img src={product.image} alt={product.title} />

        <span className="badge">SALE</span>

        <button className="wishlist">♡</button>
      </div>

      <div className="product-info">
        <h3>{product.title}</h3>

        <p className="price">${product.price}</p>

        <div className="rating">
          ⭐ {product.rating?.rate}
        </div>

        <button className="cart-btn" onClick={onAddToCart}>
          Add to Cart
        </button>
      </div>

    </div>
  )
}

export default ProductCard
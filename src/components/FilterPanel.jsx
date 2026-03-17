const FilterPanel = ({ setCategory }) => {

  const categories = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing"
  ]

  return (
    <div className="filter-panel">

      <h3>Filters</h3>

      {/* Categories */}
      <div className="filter-section">
        <h4>Category</h4>

        {categories.map(cat => (
          <label key={cat}>
            <input
              type="checkbox"
              onChange={() => setCategory(cat)}
            />
            {cat}
          </label>
        ))}
      </div>

      {/* Price Range */}
      <div className="filter-section">
        <h4>Price</h4>
        <p>$0 - $50</p>
        <p>$50 - $100</p>
        <p>$100+</p>
      </div>

      {/* Rating */}
      <div className="filter-section">
        <h4>Rating</h4>
        <p>⭐ 4 & above</p>
        <p>⭐ 3 & above</p>
      </div>

      {/* Clear Button */}
      <button className="clear-btn">
        Clear Filters
      </button>

    </div>
  )
}

export default FilterPanel 
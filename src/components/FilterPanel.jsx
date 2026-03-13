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
  )
}

export default FilterPanel
const SortDropdown = ({ setSort }) => {

  return (
    <select
      className="sort-dropdown"
      onChange={(e) => setSort(e.target.value)}
    >

      <option value="">Sort</option>
      <option value="low">Price Low</option>
      <option value="high">Price High</option>
      <option value="rating">Rating</option>

    </select>
  )
}

export default SortDropdown
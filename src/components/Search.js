import React from "react"
import SearchBox from "./SearchBox"

/**
 * Container component for the SearchBox.
 *
 * @param {Object} props - The component props.
 * @param {function} props.onSearchChange - Callback function triggered when the search input changes.
 * @param {Object} [props.responsiveSearch] - Style object for responsive behavior.
 * @returns {JSX.Element} The rendered Search component.
 */
const Search = ({ onSearchChange, responsiveSearch }) => {
  return (
    <div className="search-area flex flex-wrap items-center ml4 mt1 z-1">
      <SearchBox
        responsiveSearch={responsiveSearch}
        searchChange={onSearchChange}
      />
    </div>
  )
}

export default Search

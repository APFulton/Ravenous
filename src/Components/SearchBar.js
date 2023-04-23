import React from 'react'

const SearchBar = () => {
  return (
    <div>
        <form>
            <input type='search'/>
            <input type="search" value='Food' />
            <input type='submit' value='Submit'/>
        </form>
    </div>
  )
}

export default SearchBar
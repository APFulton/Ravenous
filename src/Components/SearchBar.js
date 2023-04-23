import React from 'react'

const sortByOptions = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count"
};

const SearchBar = () => {
    const renderSortByOptions = () => {
         return Object.keys(sortByOptions).map((sortByOption) => {
            let sortByOptionValue = sortByOptions[sortByOption];
            return <li key={sortByOptionValue}>{sortByOption}</li>;
          });
        }
  return (
    <div>
        <form>
            <input type='search' placeholder='Food'/>
            <input type="search" placeholder='Location' />
            <input type='submit' value='Submit'/>
        </form>
    </div>
  )
};
export default SearchBar;
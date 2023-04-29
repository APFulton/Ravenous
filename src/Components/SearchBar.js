import React from 'react'
import styles from './SearchBar.module.css'

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
    <div className={styles.SearchBar}>
        <div className={styles.searchBarSortOptions}>
            <ul>{renderSortByOptions()}</ul>
        </div>
        <div>
            <input className={styles.searchFields} type='search' placeholder='      Search Businesses'/>
            <input className={styles.searchFields} type="search" placeholder='      Where?' />
            <div>
                <input className={styles.button} type='submit' value="Let's Go" />
            </div>  
        </div>
    </div>
  )
};
export default SearchBar;
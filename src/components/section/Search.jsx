import React from 'react'

const Search = () => {
  return (
    <div id='Search'>
        <div className='Search_inner'>
            <label htmlFor="searchInput">
                <span className='ir'>검색</span>
            </label>
            <input type="search" 
            id='searchInput'
            placeholder='검색어를 입력해주세요'
            autoComplete='off'
            className='search_input' 
            />
        </div>
    </div>
  )
}

export default Search

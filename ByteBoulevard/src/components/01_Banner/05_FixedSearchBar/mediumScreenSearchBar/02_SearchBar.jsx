import React from 'react'

function SearchBar() {
  return (
    <input 
        type="text"
        placeholder="Search..."
        className="w-[45%] lg:w-[60%] h-[40px] p-2 rounded bg-gray-800 text-white placeholder-gray-400 border border-gray-700"
    />
  )
}

export default SearchBar
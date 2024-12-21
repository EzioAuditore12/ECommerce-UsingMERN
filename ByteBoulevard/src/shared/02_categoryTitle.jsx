import React from 'react'

function CategoryTitle(
    {
        title,
    }
) {
  return (
    <div className='flex justify-between mb-[25px] md:mb-[35px]'>
    <h1 className='text-xl font-semibold'>{title}</h1>
    <button className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-md hover:bg-blue-700 active:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400">
    <span className="text-sm font-bold">➔</span>
    </button>
    </div>
  )
}

export default CategoryTitle
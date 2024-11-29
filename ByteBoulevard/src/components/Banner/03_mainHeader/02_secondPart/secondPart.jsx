import React from 'react'
import toggleIcon from './Images/toggle-icon.png'
import searchIconSvg from './Images/searchEngine.svg'
function SecondPart() {
  return (
    <div className='mx-2.5 my-2.5 flex items-center '>
        <img src={toggleIcon} className='h-7 w-7 mx-1 '/>
        
        <div className="flex items-center justify-center mx-3 sm:ml-5">
                <input
                    className="border border-gray-300 rounded-l p-1 w-[280px]"
                    type="text"
                    placeholder="Search"
                />
                <div className="bg-orange-600 p-2 rounded-r flex justify-center items-center">
                    <img
                        className="h-[20px] w-[20px] scale-x-[-1]"
                        src={searchIconSvg}
                        alt="search-icon"
                    />
                </div>
            </div>
        
    </div>
  )
}

export default SecondPart
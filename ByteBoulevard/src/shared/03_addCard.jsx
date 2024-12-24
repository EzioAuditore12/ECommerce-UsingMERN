import React from 'react'
import background01 from './Assets/backgroundImages/bg01.jpg'
function AddCard(
  {
    logo,
    title,
    description,
  }
) {
  return (
    <div className='hidden lg:block bg-cover bg-center bg-no-repeat w-[220px] h-[300px] border-4 border-white p-3' 
         style={{ backgroundImage: `url(${background01})` }}>
         
    </div>
  )
}

export default AddCard
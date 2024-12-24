import React from 'react'

function BottomNavbar() {
  const navItems = [
    { icon: "≡" },
    { icon: "🛍️" },
    { icon: "🏠" },
    { icon: "❤️" },
    { icon: "⊞" },
  ]

  return (
    <div className='fixed bottom-0 w-full bg-white h-[60px] border-t border-gray-200 shadow-lg rounded-lg'>
      <div className='flex justify-between items-center px-4 h-full'>
        {navItems.map((item, index) => (
          <div key={index} className='flex flex-col items-center'>
            <span className=''>{item.icon}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BottomNavbar
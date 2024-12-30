import React from 'react';
import { RiMenu2Line } from 'react-icons/ri';
import { BsShop } from 'react-icons/bs';
import { AiOutlineHome, AiOutlineSearch } from 'react-icons/ai';
import { BsGrid } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar } from '../../../../../ActionSlices/sideBarSlice';

function BottomNavbar() {
  const dispatch = useDispatch();
  const isSidebarOpen = useSelector((state) => state.sidebar.isOpen); // Replace with your actual state structure

  const navItems = [
    {
      icon: RiMenu2Line,
      onClick: () => dispatch(toggleSidebar()),
    },
    { icon: BsShop, onClick: () => console.log('Shop clicked') },
    { icon: AiOutlineHome, onClick: () => console.log('Home clicked') },
    { icon: AiOutlineSearch, onClick: () => console.log('Search clicked') },
    { icon: BsGrid, onClick: () => console.log('Grid clicked') },
  ];

  React.useEffect(() => {
    console.log('Sidebar state:', isSidebarOpen);
  }, [isSidebarOpen]);

  return (
    <nav className='z-20 fixed flex justify-center items-center bottom-0 w-full bg-white h-[60px] rounded-lg md:hidden'>
      <div className='flex flex-row justify-between items-center w-full'>
        {navItems.map((item, index) => (
          <div 
            key={index} 
            className='flex items-center w-[20%] justify-center'
          >
            <item.icon 
              className="cursor-pointer w-[25px] h-[25px]"
              onClick={item.onClick}
              aria-label={`Icon ${index}`}
            />
          </div>
        ))}
      </div>
    </nav>
  );
}

export default BottomNavbar;

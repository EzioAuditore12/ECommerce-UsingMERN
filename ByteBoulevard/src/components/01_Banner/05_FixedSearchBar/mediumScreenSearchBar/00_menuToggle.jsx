import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleSidebar } from '../../../../ActionSlices/sideBarSlice';
import { RiMenu2Line } from 'react-icons/ri';

const MenuToggle = () => {
  const dispatch = useDispatch();

  return (
    <RiMenu2Line 
      className="cursor-pointer w-[25px] h-[25px] text-white"
      onClick={() => dispatch(toggleSidebar())}
    />
  );
};

export default MenuToggle;
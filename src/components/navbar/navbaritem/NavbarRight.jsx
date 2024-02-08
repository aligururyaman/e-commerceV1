import React, { useEffect } from 'react';
import { BiSearch } from 'react-icons/bi';
import { AiOutlineHeart } from 'react-icons/ai';
import { SlBasket } from 'react-icons/sl';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from 'react-redux';
import { getCartTotal } from '../../../redux/cartSlice';
import { useNavigate } from 'react-router-dom';

const NavbarRight = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const { itemCount } = useSelector(state => state.carts);

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);

  return (
    <div className='flex items-center gap-8'>
      <div className='flex items-center border p-3 rounded-full bg-gray-200'>
        <input className='bg-gray-200 outline-none' type="text" placeholder='Arama Yapın..' />
        <BiSearch size={28} />
      </div>
      <AiOutlineHeart size={28} />
      <div onClick={() => navigate('/sepet')} className='relative cursor-pointer transform hover:scale-110 transition duration-300 ease-in-out'>
        <div className='absolute -top-3 -right-3 bg-red-500 rounded-full w-5 h-5 flex items-center justify-center text-white'>{itemCount}</div>
        <SlBasket size={28} />
      </div>
    </div>
  );
}

export default NavbarRight;

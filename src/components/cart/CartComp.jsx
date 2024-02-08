import React from 'react'
import { removeFromCart } from '../../redux/cartSlice';
import { useDispatch } from 'react-redux';

const CartComp = ({cart}) => {
  const dispatch = useDispatch()
  return (
    <div className='my-10 flex items-center justify-between'>
        <img className='w-36 h-36 object-cover' src={cart?.image} alt={cart?.id} />
        <div className='w-96'>
            <div className='text-xl font-bold'>{cart?.title}</div>
            <div>{cart?.description}</div>
        </div>
        <div className='font-bold text-2xl'>{cart?.price} TL  ({cart?.quantity})</div>
        <div onClick={() => dispatch(removeFromCart(cart?.id))} className='bg-red-500 text-white w-36 text-2xl cursor-pointer rounded-md h-16 flex items-center justify-center'>Ürünü Sil</div>
    </div>
  )
}

export default CartComp
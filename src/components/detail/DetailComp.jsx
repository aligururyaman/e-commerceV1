import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/cartSlice';

const DetailComp = ({productDetail}) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1)

  const addBasket = (() => {
    dispatch(addToCart({id: productDetail?.id, title : productDetail?.title, image: productDetail?.image, quantity: quantity, price: productDetail?.price}))
  })

  return (
    <div className='flex gap-10 my-10'>
        <img className='w-[500px] h-[500px] object-cover' src={productDetail?.image} alt={productDetail.title} />
        <div className=''>
            <div className='text-4xl font-bold'>{productDetail?.title}</div>
            <div className='my-2 text-2xl'>{productDetail?.description}</div>
            <div className='my-2 text-xl text-red-500'>Rating : {productDetail?.rating?.rate}</div>
            <div className='my-2 text-xl text-red-500'>Count : {productDetail?.rating?.count}</div>
            <div className='text-5xl font-bold'>{productDetail?.price} <span className='text-sm'>TL</span></div>
            <div className='flex items-center gap-5 my-4'>
              <div onClick={() => setQuantity(quantity === 0 ? quantity : quantity - 1)} className='text-5xl cursor-pointer '>-</div>
              <input className='w-12 text-center text-4xl font-bold' type="text" value={quantity}/>
              <div onClick={() => setQuantity(quantity ===  productDetail?.rating?.count ? quantity : quantity + 1)} className='text-4xl cursor-pointer'>+</div>
            </div>
            <div onClick={addBasket} className= 'border w-52 h-16 rounded-md bg-gray-200 cursor-pointer flex my-4 items-center  justify-center hover:bg-gray-400 active:bg-gray-500'>Sepete Ekle</div>
        </div>
    </div>
  )
}

export default DetailComp
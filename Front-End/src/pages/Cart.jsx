// import React, { useContext, useEffect, useState } from 'react'
// import { ShopContext } from '../context/ShopContext'
// import Title from '../components/Title';
// import ProductItem from '../components/ProductItem';
// import { assets } from '../assets/assets';
// import CartTotal from '../components/CartTotal';

// const Cart = () => {
//   const { products, currency, cartitems, updateQuantity, navigate } = useContext(ShopContext);

//   const [cartData, setCartData] = useState([]);

//   useEffect(() => {

//     if (products.length > 0) {
//       const tempData = [];
//       for (const items in cartitems) {
//         for (const item in cartitems[items]) {
//           if (cartitems[items][item] > 0) {
//             tempData.push({
//               _id: items,
//               size: item,
//               quantity: cartitems[items][item]
//             })
//           }
//         }
//       }
//       console.log(tempData);
//       setCartData(tempData);
//     }
//   }, [cartitems, products])
//   return (
//     <div className='border-t pt-14'>

//       <div className='text-2xl mb-3'>
//         <Title text1={'YOUR'} text2={'CART'} />
//       </div>

//       <div>
//         {
//           cartData.map((item, index) => {
//             const productData = products.find((product) => product._id === item._id);
//             return (
//               <div key={index} className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4 '>
//                 <div className='flex items-start gap-6'>
//                   <img className='w-16 sm:w-20' src={productData.image[0]} alt="" />
//                   <div>
//                     <p className='text-xs sm:text-lg font-medium'>{productData.name}</p>
//                     <div className='flex items-center gap-5 mt-2'>
//                       <p>{currency}{productData.price}</p>
//                       <p className='px-2 sm:px-3 sm:py-1 border bg-slate-200'>{item.size}</p>
//                     </div>
//                   </div>
//                 </div>

//                 <input onChange={(e) => e.target.value === '' || e.target.value === '0' ? null : updateQuantity(item._id, item.size, Number(e.target.value))} className='border max-w-10  sm:max-w-20 px-1 sm:px-2 py-1  ' type="number" min={1} defaultValue={item.quantity} />
//                 <img onClick={() => updateQuantity(item._id, item.size, 0)} src={assets.bin_icon} className='w-4 mr-4 sm:w-5 cursor-pointer' alt="" />

//               </div>
//             )
//           })
//         }
//       </div>

//       <div className='flex justify-end my-20'>
//         <div className='w-full sm:w-[450px]'>
//           <CartTotal />
//           <div className='w-full text-end'>
//             <button onClick={() => navigate('/place-order')} className='bg-black text-white text-sm my-8 px-8 py-3'>
//               PROCEED TO CHECKOUT
//             </button>
//           </div>
//         </div>

//       </div>

//     </div>
//   )
// }

// export default Cart


import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';
import { assets } from '../assets/assets';
import CartTotal from '../components/CartTotal';

const Cart = () => {
  const { products, currency, cartitems, updateQuantity, navigate } = useContext(ShopContext);
  
  const [cartData, setCartData] = useState([]);
  
  useEffect(() => {
    if (products.length > 0) {
      const tempData = [];
      for (const items in cartitems) {
        for (const item in cartitems[items]) {
          if (cartitems[items][item] > 0) {
            tempData.push({
              _id: items,
              size: item,
              quantity: cartitems[items][item]
            })
          }
        }
      }
      console.log(tempData);
      setCartData(tempData);
    }
  }, [cartitems, products])

  return (
    <div className='border-t pt-8 md:pt-14 px-2 md:px-4 lg:px-6'>
      
      <div className='text-xl md:text-2xl mb-3 md:mb-5'>
        <Title text1={'YOUR'} text2={'CART'} />
      </div>
      
      <div className='space-y-2 md:space-y-4'>
        {
          cartData.map((item, index) => {
            const productData = products.find((product) => product._id === item._id);
            return (
              <div key={index} className='py-3 md:py-4 border-t border-b text-gray-700 grid grid-cols-[3fr_1fr_0.5fr] md:grid-cols-[4fr_1fr_0.5fr] items-center gap-2 md:gap-4'>
                
                <div className='flex items-start gap-2 md:gap-6'>
                  <img className='w-12 md:w-16 lg:w-20 object-cover' src={productData.image[0]} alt="" />
                  <div className='flex flex-col justify-center'>
                    <p className='text-xs sm:text-sm md:text-base lg:text-lg font-medium truncate max-w-[150px] sm:max-w-full'>{productData.name}</p>
                    <div className='flex flex-col sm:flex-row sm:items-center sm:gap-5 mt-1 md:mt-2'>
                      {/* <p className='text-xs md:text-sm'>{currency}{productData.price}</p> */}
                      <p className='text-xs md:text-sm px-1 sm:px-2 md:px-3 py-0.5 md:py-1 border bg-slate-200 inline-block mt-1 sm:mt-0 w-fit'>{item.size}</p>
                    </div>
                  </div>
                </div>
                
                <input 
                  onChange={(e) => e.target.value === '' || e.target.value === '0' ? null : updateQuantity(item._id, item.size, Number(e.target.value))} 
                  className='border w-14 md:w-16 lg:w-20 px-1 md:px-2 py-1 text-sm md:text-base' 
                  type="number" 
                  min={1} 
                  defaultValue={item.quantity} 
                />
                
                <div className='flex justify-end'>
                  <img 
                    onClick={() => updateQuantity(item._id, item.size, 0)} 
                    src={assets.bin_icon} 
                    className='w-4 md:w-5 cursor-pointer' 
                    alt="Remove" 
                  />
                </div>
                
              </div>
            )
          })
        }
      </div>
      
      <div className='flex justify-end my-8 md:my-12 lg:my-20'>
        <div className='w-full md:w-2/3 lg:w-[450px]'>
          <CartTotal />
          <div className='w-full text-end mt-4 md:mt-6'>
            <button 
              onClick={() => navigate('/place-order')} 
              className='bg-black text-white text-xs md:text-sm my-4 md:my-6 lg:my-8 px-4 sm:px-6 md:px-8 py-2 md:py-3 hover:bg-gray-800 transition-colors'>
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Cart
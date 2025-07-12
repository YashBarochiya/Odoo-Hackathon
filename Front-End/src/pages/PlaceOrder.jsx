// import React, { useContext, useState } from 'react'
// import Title from '../components/Title'
// import CartTotal from '../components/CartTotal'
// import { assets } from '../assets/assets'
// import { ShopContext } from '../context/ShopContext'
// import axios from 'axios'
// import { toast } from 'react-toastify'

// const PlaceOrder = () => {
//   const { navigate, backendUrl, token, cartitems, setCartItems, getCartAmount, delivery_fee, products } = useContext(ShopContext);
//   const [method, setMethod] = useState('cod');

//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     street: '',
//     city: '',
//     state: '',
//     zipcode: '',
//     country: '',
//     phone: ''
//   });

//   const onChangeHandler = (e) => {
//     const name = e.target.name;
//     const value = e.target.value;
//     setFormData(data => ({ ...data, [name]: value }));
//   };

//   // for razorpay
//   const initPay = (order) => {
//     const options = {
//       key: import.meta.env.VITE_RAZORPAY_KEY_ID,
//       amount: order.amount,
//       currency: order.currency,
//       name: 'Order Payment',
//       description: 'Order Payment',
//       order_id: order.id,
//       receipt: order.receipt,
//       handler: async (response) => {
//         console.log(response);
//         try {
//           const {data} = await axios.post(backendUrl + '/api/order/verifyRazorpay', response, { headers: { token } });
//           if (data.success) {
//             setCartItems({});
//             navigate('/orders');
//           }
//         } catch (error) {
//           console.log(error);
//           toast.error("Failed to verify payment");
          
//         }
//       }
//     }
//     const razorpay = new window.Razorpay(options);
//     razorpay.open();
//   }
//   const onSubmitHandler = async (e) => {
//     e.preventDefault();
//     try {
//       let orderItem = [];
//       for (const items in cartitems) {
//         for (const item in cartitems[items]) {
//           if (cartitems[items][item] > 0) {
//             const itemInfo = structuredClone(products.find((product) => product._id === items));
//             if (itemInfo) {
//               itemInfo.size = item;
//               itemInfo.quantity = cartitems[items][item];
//               orderItem.push(itemInfo);
//             }
//           }
//         }
//       }
//       // console.log(orderItem);
//       let orderData = {
//         address: formData,
//         items: orderItem,
//         amount: getCartAmount() + delivery_fee,

//       }

//       switch (method) {
//         // api call for cod
//         case 'cod':
//           const response = await axios.post(backendUrl + '/api/order/place', orderData, { headers: { token } });
//           if (response.data.success) {
//             setCartItems({});
//             navigate('/orders')
//           }
//           else {
//             toast.error(response.data.message);
//           }
//           break;
//         // api call for stripe
//         case 'stripe':
//           // code to handle stripe payment goes here
//           const stripeResponse = await axios.post(backendUrl + '/api/order/stripe', orderData, { headers: { token } });
//           if (stripeResponse.data.success) {
//             const { session_url } = stripeResponse.data;
//             window.location.replace(session_url);
//           }
//           else {
//             toast.error(stripeResponse.data.message);
//           }
//           break;
//         // api call for razorpay
//         case 'razorpay':
//           const responseRazorpay = await axios.post(backendUrl + '/api/order/razorpay', orderData, { headers: { token } });
//           if (responseRazorpay.data.success) {
//             initPay(responseRazorpay.data.order);
//           }

//           break;

//         default:
//           break;
//       }

//     } catch (error) {
//       console.log(error);
//       toast.error("Failed to place order");

//     }


//   }
//   return (
//     <form onSubmit={onSubmitHandler} className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t '>
//       {/* left side */}
//       <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>

//         <div className='text-xl sm:text-2xl my-3'>
//           <Title text1={'DELIVERY'} text2={'INFORMATION'} />
//         </div>

//         <div className='flex gap-3'>
//           <input required onChange={onChangeHandler} name='firstName' value={formData.firstName} type="text" className='bg-gray-100 hover:bg-gray-200 focus:bg-white focus:ring-2 focus:ring-blue-300 rounded py-1.5 px-3.5 w-full' placeholder='First Name' />
//           <input required onChange={onChangeHandler} name='lastName' value={formData.lastName} type="text" className='bg-gray-100 hover:bg-gray-200 focus:bg-white focus:ring-2 focus:ring-blue-300 rounded py-1.5 px-3.5 w-full' placeholder='Last Name' />
//         </div>
//         <input required type="email" onChange={onChangeHandler} value={formData.email} name='email' className='bg-gray-100 hover:bg-gray-200 focus:bg-white focus:ring-2 focus:ring-blue-300 rounded py-1.5 px-3.5 w-full' placeholder='Email Address' />
//         <input required type="text" onChange={onChangeHandler} value={formData.street} name='street' className='bg-gray-100 hover:bg-gray-200 focus:bg-white focus:ring-2 focus:ring-blue-300 rounded py-1.5 px-3.5 w-full' placeholder='Street Address' />

//         <div className='flex gap-3'>
//           <input required type="text" onChange={onChangeHandler} value={formData.city} name='city' className='bg-gray-100 hover:bg-gray-200 focus:bg-white focus:ring-2 focus:ring-blue-300 rounded py-1.5 px-3.5 w-full' placeholder='City ' />
//           <input type="text" onChange={onChangeHandler} value={formData.state} name='state' className='bg-gray-100 hover:bg-gray-200 focus:bg-white focus:ring-2 focus:ring-blue-300 rounded py-1.5 px-3.5 w-full' placeholder='State ' />
//         </div>

//         <div className='flex gap-3'>
//           <input required type="number" onChange={onChangeHandler} name='zipcode' value={formData.zipcode} className='bg-gray-100 hover:bg-gray-200 focus:bg-white focus:ring-2 focus:ring-blue-300 rounded py-1.5 px-3.5 w-full' placeholder='Pincode ' />
//           <input required type="text" onChange={onChangeHandler} name='country' value={formData.country} className='bg-gray-100 hover:bg-gray-200 focus:bg-white focus:ring-2 focus:ring-blue-300 rounded py-1.5 px-3.5 w-full' placeholder='Country ' />
//         </div>

//         <input required type="number" onChange={onChangeHandler} name='phone' value={formData.phone} className='bg-gray-100 hover:bg-gray-200 focus:bg-white focus:ring-2 focus:ring-blue-300 rounded py-1.5 px-3.5 w-full' placeholder='Phone ' />

//       </div>

//       {/* Right side */}

//       <div className='mt-8'>
//         <div className='mt-8 min-w-80'>
//           <CartTotal />
//         </div>

//         <div className='mt-12'>
//           <Title text1={'PAYMENT'} text2={'METHODS'} />
//           {/* pyment method selection */}

//           <div className='flex flex-col lg:flex-row gap-3'>
//             <div onClick={() => setMethod('stripe')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
//               <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-400' : ''}`}></p>
//               <img className='h-5 mx-4' src={assets.stripe_logo} alt="" />
//             </div>

//             <div onClick={() => setMethod('razorpay')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
//               <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-green-400' : ''}`}></p>
//               <img className='h-5 mx-4' src={assets.razorpay_logo} alt="" />
//             </div>

//             <div onClick={() => setMethod('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
//               <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`}></p>
//               <p className='text-gray text-sm font-medium mx-4'>CASH ON DELIVERY</p>
//             </div>
//           </div>

//           <div className='w-full text-end mt-8'>
//             <button type='submit' className='bg-black text-white px-16 py-3 text-sm '>PLACE ORDER</button>

//           </div>
//         </div>
//       </div>

//     </form>
//   )
// }

// export default PlaceOrder



// import React, { useContext, useState } from 'react'
// import Title from '../components/Title'
// import CartTotal from '../components/CartTotal'
// import { assets } from '../assets/assets'
// import { ShopContext } from '../context/ShopContext'
// import axios from 'axios'
// import { toast } from 'react-toastify'

// const PlaceOrder = () => {
//   const { navigate, backendUrl, token, cartitems, setCartItems, getCartAmount, delivery_fee, products } = useContext(ShopContext);
//   const [method, setMethod] = useState('cod');

//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     street: '',
//     city: '',
//     state: '',
//     zipcode: '',
//     country: '',
//     phone: ''
//   });

//   const onChangeHandler = (e) => {
//     const name = e.target.name;
//     const value = e.target.value;
//     setFormData(data => ({ ...data, [name]: value }));
//   };

//   // for razorpay
//   const initPay = (order) => {
//     const options = {
//       key: import.meta.env.VITE_RAZORPAY_KEY_ID,
//       amount: order.amount,
//       currency: order.currency,
//       name: 'Order Payment',
//       description: 'Order Payment',
//       order_id: order.id,
//       receipt: order.receipt,
//       handler: async (response) => {
//         console.log(response);
//         try {
//           const {data} = await axios.post(backendUrl + '/api/order/verifyRazorpay', response, { headers: { token } });
//           if (data.success) {
//             setCartItems({});
//             navigate('/orders');
//           }
//         } catch (error) {
//           console.log(error);
//           toast.error("Failed to verify payment");
          
//         }
//       }
//     }
//     const razorpay = new window.Razorpay(options);
//     razorpay.open();
//   }
  
//   const onSubmitHandler = async (e) => {
//     e.preventDefault();
//     try {
//       let orderItem = [];
//       for (const items in cartitems) {
//         for (const item in cartitems[items]) {
//           if (cartitems[items][item] > 0) {
//             const itemInfo = structuredClone(products.find((product) => product._id === items));
//             if (itemInfo) {
//               // Find the size variant with the matching size to get the SKU ID
//               const sizeVariant = itemInfo.sizes.find(sizeObj => sizeObj.size === item);
              
//               // Create the order item with SKU ID
//               orderItem.push({
//                 productId: itemInfo._id,
//                 productName: itemInfo.name,
//                 size: item,
//                 sku_id: sizeVariant?.sku_id, // Include the SKU ID from the size variant
//                 price: sizeVariant?.price || 0,
//                 quantity: cartitems[items][item]
//               });
//             }
//           }
//         }
//       }
      
//       let orderData = {
//         address: formData,
//         items: orderItem,
//         amount: getCartAmount() + delivery_fee,
//       }

//       switch (method) {
//         // api call for cod
//         case 'cod':
//           const response = await axios.post(backendUrl + '/api/order/place', orderData, { headers: { token } });
//           if (response.data.success) {
//             setCartItems({});
//             navigate('/orders')
//           }
//           else {
//             toast.error(response.data.message);
//           }
//           break;
          
//         // api call for stripe
//         case 'stripe':
//           // code to handle stripe payment goes here
//           const stripeResponse = await axios.post(backendUrl + '/api/order/stripe', orderData, { headers: { token } });
//           if (stripeResponse.data.success) {
//             const { session_url } = stripeResponse.data;
//             window.location.replace(session_url);
//           }
//           else {
//             toast.error(stripeResponse.data.message);
//           }
//           break;
          
//         // api call for razorpay
//         case 'razorpay':
//           const responseRazorpay = await axios.post(backendUrl + '/api/order/razorpay', orderData, { headers: { token } });
//           if (responseRazorpay.data.success) {
//             initPay(responseRazorpay.data.order);
//           }
//           break;

//         default:
//           break;
//       }

//     } catch (error) {
//       console.log(error);
//       toast.error("Failed to place order");
//     }
//   }
  
//   return (
//     <form onSubmit={onSubmitHandler} className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t '>
//       {/* left side */}
//       <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>

//         <div className='text-xl sm:text-2xl my-3'>
//           <Title text1={'DELIVERY'} text2={'INFORMATION'} />
//         </div>

//         <div className='flex gap-3'>
//           <input required onChange={onChangeHandler} name='firstName' value={formData.firstName} type="text" className='bg-gray-100 hover:bg-gray-200 focus:bg-white focus:ring-2 focus:ring-blue-300 rounded py-1.5 px-3.5 w-full' placeholder='First Name' />
//           <input required onChange={onChangeHandler} name='lastName' value={formData.lastName} type="text" className='bg-gray-100 hover:bg-gray-200 focus:bg-white focus:ring-2 focus:ring-blue-300 rounded py-1.5 px-3.5 w-full' placeholder='Last Name' />
//         </div>
//         <input required type="email" onChange={onChangeHandler} value={formData.email} name='email' className='bg-gray-100 hover:bg-gray-200 focus:bg-white focus:ring-2 focus:ring-blue-300 rounded py-1.5 px-3.5 w-full' placeholder='Email Address' />
//         <input required type="text" onChange={onChangeHandler} value={formData.street} name='street' className='bg-gray-100 hover:bg-gray-200 focus:bg-white focus:ring-2 focus:ring-blue-300 rounded py-1.5 px-3.5 w-full' placeholder='Street Address' />

//         <div className='flex gap-3'>
//           <input required type="text" onChange={onChangeHandler} value={formData.city} name='city' className='bg-gray-100 hover:bg-gray-200 focus:bg-white focus:ring-2 focus:ring-blue-300 rounded py-1.5 px-3.5 w-full' placeholder='City ' />
//           <input type="text" onChange={onChangeHandler} value={formData.state} name='state' className='bg-gray-100 hover:bg-gray-200 focus:bg-white focus:ring-2 focus:ring-blue-300 rounded py-1.5 px-3.5 w-full' placeholder='State ' />
//         </div>

//         <div className='flex gap-3'>
//           <input required type="number" onChange={onChangeHandler} name='zipcode' value={formData.zipcode} className='bg-gray-100 hover:bg-gray-200 focus:bg-white focus:ring-2 focus:ring-blue-300 rounded py-1.5 px-3.5 w-full' placeholder='Pincode ' />
//           <input required type="text" onChange={onChangeHandler} name='country' value={formData.country} className='bg-gray-100 hover:bg-gray-200 focus:bg-white focus:ring-2 focus:ring-blue-300 rounded py-1.5 px-3.5 w-full' placeholder='Country ' />
//         </div>

//         <input required type="number" onChange={onChangeHandler} name='phone' value={formData.phone} className='bg-gray-100 hover:bg-gray-200 focus:bg-white focus:ring-2 focus:ring-blue-300 rounded py-1.5 px-3.5 w-full' placeholder='Phone ' />

//       </div>

//       {/* Right side */}

//       <div className='mt-8'>
//         <div className='mt-8 min-w-80'>
//           <CartTotal />
//         </div>

//         <div className='mt-12'>
//           <Title text1={'PAYMENT'} text2={'METHODS'} />
//           {/* pyment method selection */}

//           <div className='flex flex-col lg:flex-row gap-3'>
//             <div onClick={() => setMethod('stripe')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
//               <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-400' : ''}`}></p>
//               <img className='h-5 mx-4' src={assets.stripe_logo} alt="" />
//             </div>

//             <div onClick={() => setMethod('razorpay')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
//               <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-green-400' : ''}`}></p>
//               <img className='h-5 mx-4' src={assets.razorpay_logo} alt="" />
//             </div>

//             <div onClick={() => setMethod('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
//               <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`}></p>
//               <p className='text-gray text-sm font-medium mx-4'>CASH ON DELIVERY</p>
//             </div>
//           </div>

//           <div className='w-full text-end mt-8'>
//             <button type='submit' className='bg-black text-white px-16 py-3 text-sm '>PLACE ORDER</button>
//           </div>
//         </div>
//       </div>

//     </form>
//   )
// }

// export default PlaceOrder


// // Only import React once at the top with all needed hooks
// import React, { useContext, useState } from 'react'
// import Title from '../components/Title'
// import CartTotal from '../components/CartTotal'
// import { assets } from '../assets/assets'
// import { ShopContext } from '../context/ShopContext'
// import axios from 'axios'
// import { toast } from 'react-toastify'

// const PlaceOrder = () => {
//   const { navigate, backendUrl, token, cartitems, setCartItems, getCartAmount, delivery_fee, products } = useContext(ShopContext);
//   const [method, setMethod] = useState('cod');

//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     street: '',
//     city: '',
//     state: '',
//     zipcode: '',
//     country: '',
//     phone: ''
//   });

//   const onChangeHandler = (e) => {
//     const name = e.target.name;
//     const value = e.target.value;
//     setFormData(data => ({ ...data, [name]: value }));
//   };

//   // for razorpay
//   const initPay = (order) => {
//     const options = {
//       key: import.meta.env.VITE_RAZORPAY_KEY_ID,
//       amount: order.amount,
//       currency: order.currency,
//       name: 'Order Payment',
//       description: 'Order Payment',
//       order_id: order.id,
//       receipt: order.receipt,
//       handler: async (response) => {
//         console.log(response);
//         try {
//           const {data} = await axios.post(backendUrl + '/api/order/verifyRazorpay', response, { headers: { token } });
//           if (data.success) {
//             setCartItems({});
//             navigate('/orders');
//           }
//         } catch (error) {
//           console.log(error);
//           toast.error("Failed to verify payment");
          
//         }
//       }
//     }
//     const razorpay = new window.Razorpay(options);
//     razorpay.open();
//   }
  
//   const onSubmitHandler = async (e) => {
//     e.preventDefault();
//     try {
//       let orderItem = [];
//       for (const items in cartitems) {
//         for (const item in cartitems[items]) {
//           if (cartitems[items][item] > 0) {
//             const itemInfo = structuredClone(products.find((product) => product._id === items));
//             if (itemInfo) {
//               // Find the size variant with the matching size to get the SKU ID
//               const sizeVariant = itemInfo.sizes.find(sizeObj => sizeObj.size === item);
              
//               // Create the order item with SKU ID and image
//               orderItem.push({
//                 productId: itemInfo._id,
//                 productName: itemInfo.name,
//                 size: item,
//                 sku_id: sizeVariant?.sku_id, // Include the SKU ID from the size variant
//                 price: sizeVariant?.price || 0,
//                 quantity: cartitems[items][item],
//                 image: itemInfo.image && itemInfo.image.length > 0 ? itemInfo.image[0] : '' // Add the first image from the product
//               });
//             }
//           }
//         }
//       }
      
//       let orderData = {
//         address: formData,
//         items: orderItem,
//         amount: getCartAmount() + delivery_fee,
//       }

//       switch (method) {
//         // api call for cod
//         case 'cod':
//           const response = await axios.post(backendUrl + '/api/order/place', orderData, { headers: { token } });
//           if (response.data.success) {
//             setCartItems({});
//             navigate('/orders')
//           }
//           else {
//             toast.error(response.data.message);
//           }
//           break;
          
//         // api call for stripe
//         case 'stripe':
//           // code to handle stripe payment goes here
//           const stripeResponse = await axios.post(backendUrl + '/api/order/stripe', orderData, { headers: { token } });
//           if (stripeResponse.data.success) {
//             const { session_url } = stripeResponse.data;
//             window.location.replace(session_url);
//           }
//           else {
//             toast.error(stripeResponse.data.message);
//           }
//           break;
          
//         // api call for razorpay
//         case 'razorpay':
//           const responseRazorpay = await axios.post(backendUrl + '/api/order/razorpay', orderData, { headers: { token } });
//           if (responseRazorpay.data.success) {
//             initPay(responseRazorpay.data.order);
//           }
//           break;

//         default:
//           break;
//       }

//     } catch (error) {
//       console.log(error);
//       toast.error("Failed to place order");
//     }
//   }
  
//   return (
//     <form onSubmit={onSubmitHandler} className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t '>
//       {/* left side */}
//       <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>

//         <div className='text-xl sm:text-2xl my-3'>
//           <Title text1={'DELIVERY'} text2={'INFORMATION'} />
//         </div>

//         <div className='flex gap-3'>
//           <input required onChange={onChangeHandler} name='firstName' value={formData.firstName} type="text" className='bg-gray-100 hover:bg-gray-200 focus:bg-white focus:ring-2 focus:ring-blue-300 rounded py-1.5 px-3.5 w-full' placeholder='First Name' />
//           <input required onChange={onChangeHandler} name='lastName' value={formData.lastName} type="text" className='bg-gray-100 hover:bg-gray-200 focus:bg-white focus:ring-2 focus:ring-blue-300 rounded py-1.5 px-3.5 w-full' placeholder='Last Name' />
//         </div>
//         <input required type="email" onChange={onChangeHandler} value={formData.email} name='email' className='bg-gray-100 hover:bg-gray-200 focus:bg-white focus:ring-2 focus:ring-blue-300 rounded py-1.5 px-3.5 w-full' placeholder='Email Address' />
//         <input required type="text" onChange={onChangeHandler} value={formData.street} name='street' className='bg-gray-100 hover:bg-gray-200 focus:bg-white focus:ring-2 focus:ring-blue-300 rounded py-1.5 px-3.5 w-full' placeholder='Street Address' />

//         <div className='flex gap-3'>
//           <input required type="text" onChange={onChangeHandler} value={formData.city} name='city' className='bg-gray-100 hover:bg-gray-200 focus:bg-white focus:ring-2 focus:ring-blue-300 rounded py-1.5 px-3.5 w-full' placeholder='City ' />
//           <input type="text" onChange={onChangeHandler} value={formData.state} name='state' className='bg-gray-100 hover:bg-gray-200 focus:bg-white focus:ring-2 focus:ring-blue-300 rounded py-1.5 px-3.5 w-full' placeholder='State ' />
//         </div>

//         <div className='flex gap-3'>
//           <input required type="number" onChange={onChangeHandler} name='zipcode' value={formData.zipcode} className='bg-gray-100 hover:bg-gray-200 focus:bg-white focus:ring-2 focus:ring-blue-300 rounded py-1.5 px-3.5 w-full' placeholder='Pincode ' />
//           <input required type="text" onChange={onChangeHandler} name='country' value={formData.country} className='bg-gray-100 hover:bg-gray-200 focus:bg-white focus:ring-2 focus:ring-blue-300 rounded py-1.5 px-3.5 w-full' placeholder='Country ' />
//         </div>

//         <input required type="number" onChange={onChangeHandler} name='phone' value={formData.phone} className='bg-gray-100 hover:bg-gray-200 focus:bg-white focus:ring-2 focus:ring-blue-300 rounded py-1.5 px-3.5 w-full' placeholder='Phone ' />

//       </div>

//       {/* Right side */}

//       <div className='mt-8'>
//         <div className='mt-8 min-w-80'>
//           <CartTotal />
//         </div>

//         <div className='mt-12'>
//           <Title text1={'PAYMENT'} text2={'METHODS'} />
//           {/* pyment method selection */}

//           <div className='flex flex-col lg:flex-row gap-3'>
//             <div onClick={() => setMethod('stripe')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
//               <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-400' : ''}`}></p>
//               <img className='h-5 mx-4' src={assets.stripe_logo} alt="" />
//             </div>

//             <div onClick={() => setMethod('razorpay')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
//               <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-green-400' : ''}`}></p>
//               <img className='h-5 mx-4' src={assets.razorpay_logo} alt="" />
//             </div>

//             <div onClick={() => setMethod('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
//               <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`}></p>
//               <p className='text-gray text-sm font-medium mx-4'>CASH ON DELIVERY</p>
//             </div>
//           </div>

//           <div className='w-full text-end mt-8'>
//             <button type='submit' className='bg-black text-white px-16 py-3 text-sm '>PLACE ORDER</button>
//           </div>
//         </div>
//       </div>

//     </form>
//   )
// }

// export default PlaceOrder



// import React, { useContext, useState } from 'react'
// import Title from '../components/Title'
// import CartTotal from '../components/CartTotal'
// import { assets } from '../assets/assets'
// import { ShopContext } from '../context/ShopContext'
// import axios from 'axios'
// import { toast } from 'react-toastify'

// const PlaceOrder = () => {
//   const { navigate, backendUrl, token, cartitems, setCartItems, getCartAmount, delivery_fee, products } = useContext(ShopContext);
//   const [method, setMethod] = useState('cod');

//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     street: '',
//     city: '',
//     state: '',
//     zipcode: '',
//     country: '',
//     phone: ''
//   });

//   const onChangeHandler = (e) => {
//     const name = e.target.name;
//     const value = e.target.value;
//     setFormData(data => ({ ...data, [name]: value }));
//   };

//   // for razorpay
//   const initPay = (order) => {
//     const options = {
//       key: import.meta.env.VITE_RAZORPAY_KEY_ID,
//       amount: order.amount,
//       currency: order.currency,
//       name: 'Order Payment',
//       description: 'Order Payment',
//       order_id: order.id,
//       receipt: order.receipt,
//       handler: async (response) => {
//         console.log(response);
//         try {
//           // Include the order ID in verification
//           const verifyData = {
//             ...response,
//             orderId: order.receipt // This should be your MongoDB order ID
//           };
          
//           const { data } = await axios.post(backendUrl + '/api/order/verifyRazorpay', verifyData, { headers: { token } });
//           if (data.success) {
//             setCartItems({});
//             navigate('/orders');
//             toast.success("Payment successful!");
//           }
//         } catch (error) {
//           console.log(error);
//           toast.error("Failed to verify payment");
//         }
//       }
//     }
//     const razorpay = new window.Razorpay(options);
//     razorpay.open();
//   }
  
//   const onSubmitHandler = async (e) => {
//     e.preventDefault();
//     try {
//       let orderItem = [];
      
//       // Process cart items to include SKU ID and image URL
//       for (const productId in cartitems) {
//         for (const size in cartitems[productId]) {
//           if (cartitems[productId][size] > 0) {
//             const product = products.find(p => p._id === productId);
//             if (product) {
//               // Find the specific size variant to get its SKU ID and price
//               const sizeVariant = product.sizes.find(s => s.size === size);
              
//               if (sizeVariant) {
//                 orderItem.push({
//                   productId: product._id,
//                   productName: product.name,
//                   size: size,
//                   sku_id: sizeVariant.sku_id,
//                   price: sizeVariant.price,
//                   quantity: cartitems[productId][size],
//                   image: product.image && product.image.length > 0 ? product.image[0] : ''
//                 });
//               }
//             }
//           }
//         }
//       }
      
//       let orderData = {
//         userId: token, // Assuming token contains user ID or authentication info
//         address: formData,
//         items: orderItem,
//         amount: getCartAmount() + delivery_fee,
//       }

//       switch (method) {
//         // API call for COD
//         case 'cod':
//           const response = await axios.post(backendUrl + '/api/order/place', orderData, { headers: { token } });
//           if (response.data.success) {
//             setCartItems({});
//             toast.success("Order placed successfully!");
//             navigate('/orders');
//           } else {
//             toast.error(response.data.message || "Failed to place order");
//           }
//           break;
          
//         // API call for Stripe
//         case 'stripe':
//           const stripeResponse = await axios.post(backendUrl + '/api/order/stripe', orderData, { headers: { token } });
//           if (stripeResponse.data.success) {
//             // Store order ID in localStorage for verification after return from Stripe
//             if (stripeResponse.data.orderId) {
//               localStorage.setItem('pendingOrderId', stripeResponse.data.orderId);
//             }
//             // Redirect to Stripe checkout
//             window.location.replace(stripeResponse.data.session_url);
//           } else {
//             toast.error(stripeResponse.data.message || "Failed to initialize payment");
//           }
//           break;
          
//         // API call for Razorpay
//         case 'razorpay':
//           const responseRazorpay = await axios.post(backendUrl + '/api/order/razorpay', orderData, { headers: { token } });
//           if (responseRazorpay.data.success) {
//             // Store order ID for verification after payment
//             localStorage.setItem('pendingOrderId', responseRazorpay.data.orderId);
//             initPay(responseRazorpay.data.order);
//           } else {
//             toast.error(responseRazorpay.data.message || "Failed to initialize payment");
//           }
//           break;

//         default:
//           toast.error("Please select a payment method");
//           break;
//       }

//     } catch (error) {
//       console.log(error);
//       toast.error(error.response?.data?.message || "Failed to place order");
//     }
//   }
  
//   return (
//     <form onSubmit={onSubmitHandler} className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t '>
//       {/* left side */}
//       <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>

//         <div className='text-xl sm:text-2xl my-3'>
//           <Title text1={'DELIVERY'} text2={'INFORMATION'} />
//         </div>

//         <div className='flex gap-3'>
//           <input required onChange={onChangeHandler} name='firstName' value={formData.firstName} type="text" className='bg-gray-100 hover:bg-gray-200 focus:bg-white focus:ring-2 focus:ring-blue-300 rounded py-1.5 px-3.5 w-full' placeholder='First Name' />
//           <input required onChange={onChangeHandler} name='lastName' value={formData.lastName} type="text" className='bg-gray-100 hover:bg-gray-200 focus:bg-white focus:ring-2 focus:ring-blue-300 rounded py-1.5 px-3.5 w-full' placeholder='Last Name' />
//         </div>
//         <input required type="email" onChange={onChangeHandler} value={formData.email} name='email' className='bg-gray-100 hover:bg-gray-200 focus:bg-white focus:ring-2 focus:ring-blue-300 rounded py-1.5 px-3.5 w-full' placeholder='Email Address' />
//         <input required type="text" onChange={onChangeHandler} value={formData.street} name='street' className='bg-gray-100 hover:bg-gray-200 focus:bg-white focus:ring-2 focus:ring-blue-300 rounded py-1.5 px-3.5 w-full' placeholder='Street Address' />

//         <div className='flex gap-3'>
//           <input required type="text" onChange={onChangeHandler} value={formData.city} name='city' className='bg-gray-100 hover:bg-gray-200 focus:bg-white focus:ring-2 focus:ring-blue-300 rounded py-1.5 px-3.5 w-full' placeholder='City ' />
//           <input type="text" onChange={onChangeHandler} value={formData.state} name='state' className='bg-gray-100 hover:bg-gray-200 focus:bg-white focus:ring-2 focus:ring-blue-300 rounded py-1.5 px-3.5 w-full' placeholder='State ' />
//         </div>

//         <div className='flex gap-3'>
//           <input required type="number" onChange={onChangeHandler} name='zipcode' value={formData.zipcode} className='bg-gray-100 hover:bg-gray-200 focus:bg-white focus:ring-2 focus:ring-blue-300 rounded py-1.5 px-3.5 w-full' placeholder='Pincode ' />
//           <input required type="text" onChange={onChangeHandler} name='country' value={formData.country} className='bg-gray-100 hover:bg-gray-200 focus:bg-white focus:ring-2 focus:ring-blue-300 rounded py-1.5 px-3.5 w-full' placeholder='Country ' />
//         </div>

//         <input required type="number" onChange={onChangeHandler} name='phone' value={formData.phone} className='bg-gray-100 hover:bg-gray-200 focus:bg-white focus:ring-2 focus:ring-blue-300 rounded py-1.5 px-3.5 w-full' placeholder='Phone ' />

//       </div>

//       {/* Right side */}

//       <div className='mt-8'>
//         <div className='mt-8 min-w-80'>
//           <CartTotal />
//         </div>

//         <div className='mt-12'>
//           <Title text1={'PAYMENT'} text2={'METHODS'} />
//           {/* payment method selection */}

//           <div className='flex flex-col lg:flex-row gap-3'>
//             <div onClick={() => setMethod('stripe')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
//               <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-400' : ''}`}></p>
//               <img className='h-5 mx-4' src={assets.stripe_logo} alt="" />
//             </div>

//             <div onClick={() => setMethod('razorpay')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
//               <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-green-400' : ''}`}></p>
//               <img className='h-5 mx-4' src={assets.razorpay_logo} alt="" />
//             </div>

//             <div onClick={() => setMethod('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
//               <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`}></p>
//               <p className='text-gray text-sm font-medium mx-4'>CASH ON DELIVERY</p>
//             </div>
//           </div>

//           <div className='w-full text-end mt-8'>
//             <button type='submit' className='bg-black text-white px-16 py-3 text-sm '>PLACE ORDER</button>
//           </div>
//         </div>
//       </div>

//     </form>
//   )
// }

// export default PlaceOrder



import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const PlaceOrder = () => {
  const { navigate, backendUrl, token, cartitems, setCartItems, getCartAmount, delivery_fee, products } = useContext(ShopContext);
  const [method, setMethod] = useState('cod');

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
    phone: ''
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData(data => ({ ...data, [name]: value }));
  };

  // for razorpay
  const initPay = (order) => {
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: 'Order Payment',
      description: 'Order Payment',
      order_id: order.id,
      receipt: order.receipt,
      handler: async (response) => {
        console.log(response);
        try {
          // Include the order ID in verification
          const verifyData = {
            ...response,
            orderId: order.receipt // This should be your MongoDB order ID
          };
          
          const { data } = await axios.post(backendUrl + '/api/order/verifyRazorpay', verifyData, { headers: { token } });
          if (data.success) {
            setCartItems({});
            navigate('/orders');
            toast.success("Payment successful!");
          }
        } catch (error) {
          console.log(error);
          toast.error("Failed to verify payment");
        }
      }
    }
    const razorpay = new window.Razorpay(options);
    razorpay.open();
  }
  
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      let orderItem = [];
      
      // Process cart items to include SKU ID and image URL
      for (const productId in cartitems) {
        for (const size in cartitems[productId]) {
          if (cartitems[productId][size] > 0) {
            const product = products.find(p => p._id === productId);
            if (product) {
              // Find the specific size variant to get its SKU ID and price
              const sizeVariant = product.sizes.find(s => s.size === size);
              
              if (sizeVariant) {
                // Ensure image is always a valid string
                const imageUrl = product.image && product.image.length > 0 
                  ? product.image[0] 
                  : ''; // Fallback empty string if no image
                  
                // Validate we have all required fields before adding to order
                if (product._id && product.name && size && sizeVariant.sku_id && 
                    sizeVariant.price && cartitems[productId][size] && imageUrl) {
                  
                  orderItem.push({
                    productId: product._id,
                    productName: product.name,
                    size: size,
                    sku_id: sizeVariant.sku_id,
                    price: sizeVariant.price,
                    quantity: cartitems[productId][size],
                    image: imageUrl
                  });
                } else {
                  // Throw error if any required field is missing
                  throw new Error(`Missing required field for product: ${product.name || 'Unknown'}`);
                }
              } else {
                throw new Error(`Size variant not found for product: ${product.name}`);
              }
            } else {
              throw new Error(`Product not found: ${productId}`);
            }
          }
        }
      }
      
      let orderData = {
        userId: token, // Assuming token contains user ID or authentication info
        address: formData,
        items: orderItem,
        amount: getCartAmount() + delivery_fee,
      }

      switch (method) {
        // API call for COD
        case 'cod':
          const response = await axios.post(backendUrl + '/api/order/place', orderData, { headers: { token } });
          if (response.data.success) {
            setCartItems({});
            toast.success("Order placed successfully!");
            navigate('/orders');
          } else {
            toast.error(response.data.message || "Failed to place order");
          }
          break;
          

          
        // API call for Razorpay
        case 'razorpay':
          // Check if orderItems is valid and has all required fields
          if (!orderItem.length) {
            toast.error("Your cart is empty or items are invalid");
            return;
          }
          
          // Validate each item has all required fields before sending
          const isValid = orderItem.every(item => 
            item.productId && item.productName && item.size && 
            item.sku_id && item.price && item.quantity && item.image
          );
          
          if (!isValid) {
            toast.error("Some items in your cart are missing required information");
            return;
          }
          
          // Log the exact data being sent to the backend
          console.log("Sending to Razorpay endpoint:", orderData);
          
          const responseRazorpay = await axios.post(backendUrl + '/api/order/razorpay', orderData, { headers: { token } });
          if (responseRazorpay.data.success) {
            // Store order ID for verification after payment
            localStorage.setItem('pendingOrderId', responseRazorpay.data.orderId);
            initPay(responseRazorpay.data.order);
          } else {
            toast.error(responseRazorpay.data.message || "Failed to initialize payment");
          }
          break;

        default:
          toast.error("Please select a payment method");
          break;
      }

    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || error.message || "Failed to place order");
    }
  }
  
  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t '>
      {/* left side */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>

        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={'DELIVERY'} text2={'INFORMATION'} />
        </div>

        <div className='flex gap-3'>
          <input required onChange={onChangeHandler} name='firstName' value={formData.firstName} type="text" className='bg-gray-100 hover:bg-gray-200 focus:bg-white focus:ring-2 focus:ring-blue-300 rounded py-1.5 px-3.5 w-full' placeholder='First Name' />
          <input required onChange={onChangeHandler} name='lastName' value={formData.lastName} type="text" className='bg-gray-100 hover:bg-gray-200 focus:bg-white focus:ring-2 focus:ring-blue-300 rounded py-1.5 px-3.5 w-full' placeholder='Last Name' />
        </div>
        <input required type="email" onChange={onChangeHandler} value={formData.email} name='email' className='bg-gray-100 hover:bg-gray-200 focus:bg-white focus:ring-2 focus:ring-blue-300 rounded py-1.5 px-3.5 w-full' placeholder='Email Address' />
        <input required type="text" onChange={onChangeHandler} value={formData.street} name='street' className='bg-gray-100 hover:bg-gray-200 focus:bg-white focus:ring-2 focus:ring-blue-300 rounded py-1.5 px-3.5 w-full' placeholder='Street Address' />

        <div className='flex gap-3'>
          <input required type="text" onChange={onChangeHandler} value={formData.city} name='city' className='bg-gray-100 hover:bg-gray-200 focus:bg-white focus:ring-2 focus:ring-blue-300 rounded py-1.5 px-3.5 w-full' placeholder='City ' />
          <input type="text" onChange={onChangeHandler} value={formData.state} name='state' className='bg-gray-100 hover:bg-gray-200 focus:bg-white focus:ring-2 focus:ring-blue-300 rounded py-1.5 px-3.5 w-full' placeholder='State ' />
        </div>

        <div className='flex gap-3'>
          <input required type="number" onChange={onChangeHandler} name='zipcode' value={formData.zipcode} className='bg-gray-100 hover:bg-gray-200 focus:bg-white focus:ring-2 focus:ring-blue-300 rounded py-1.5 px-3.5 w-full' placeholder='Pincode ' />
          <input required type="text" onChange={onChangeHandler} name='country' value={formData.country} className='bg-gray-100 hover:bg-gray-200 focus:bg-white focus:ring-2 focus:ring-blue-300 rounded py-1.5 px-3.5 w-full' placeholder='Country ' />
        </div>

        <input required type="number" onChange={onChangeHandler} name='phone' value={formData.phone} className='bg-gray-100 hover:bg-gray-200 focus:bg-white focus:ring-2 focus:ring-blue-300 rounded py-1.5 px-3.5 w-full' placeholder='Phone ' />

      </div>

      {/* Right side */}

      <div className='mt-8'>
        <div className='mt-8 min-w-80'>
          <CartTotal />
        </div>

        <div className='mt-12'>
          <Title text1={'PAYMENT'} text2={'METHODS'} />
          {/* payment method selection */}

          <div className='flex flex-col lg:flex-row gap-3'>
           
            <div onClick={() => setMethod('razorpay')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-green-400' : ''}`}></p>
              <img className='h-5 mx-4' src={assets.razorpay_logo} alt="" />
            </div>

            <div onClick={() => setMethod('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`}></p>
              <p className='text-gray text-sm font-medium mx-4'>CASH ON DELIVERY</p>
            </div>
          </div>

          <div className='w-full text-end mt-8'>
            <button type='submit' className='bg-black text-white px-16 py-3 text-sm '>PLACE ORDER</button>
          </div>
        </div>
      </div>

    </form>
  )
}

export default PlaceOrder
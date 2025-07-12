// import React, { useContext, useEffect, useState } from 'react'
// import { ShopContext } from '../context/ShopContext'
// import Title from '../components/Title';
// import axios from 'axios';

// const Orders = () => {
//   const {backendUrl,token, currency} = useContext(ShopContext);
//   const [orderData, setOrderData] = useState([]);


//   const loadOrderData = async () => {
//     try {
//       if (!token) {
//         return null;
//       }
  
//       const response = await axios.post(backendUrl + '/api/order/userorders', {}, { headers: { token } });
  
//       if (response.data.success) {
//         let allOrdersItem = [];
  
//         response.data.orders.forEach((order) => {
//           order.items.forEach((item) => {
//             item['status'] = order.status;
//             item['payment'] = order.payment;
//             item['paymentMethod'] = order.paymentMethod;
//             item['date'] = order.date;
//             allOrdersItem.push(item);
//           });
//         });
//         setOrderData(allOrdersItem.reverse());
//       }
//     } catch (error) {
//       console.error(error);
//       toast.error("Failed to load orders");
//     }
//   };
  
//   useEffect(() => {
//     loadOrderData();
//   }, [token])

//   return (
//     <div className='border-t pt-16'>
      
//       <div className='text-2xl'>
//         <Title text1={'MY'}  text2={'ORDERS'}/>
//       </div>

//       <div>
//         {
//           orderData.map((item,index)=>(
//             <div key={index} className='py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4 '>
              
//               <div className='flex items-start gap-6 text-sm'>
//                 <img src={item.image[0]} className='w-16 sm:w-20' alt="" />
//                 <div>
//                   <p className='sm:text-base font-medium'>{item.name}</p>
//                   <div className='flex items-center gap-3 mt-1 text-base text-gray-700'>
//                       <p>{currency}{item.price}</p>
//                       <p>Quantity: {item.quantity}</p>
//                       <p>Size : {item.size}</p>
//                   </div>
//                   <p className='mt-1'>Date: <span className='text-gray-400'>{new Date(item.date).toDateString()}</span></p>
//                   <p className='mt-1'>Payment: <span className='text-gray-400'>{(item.paymentMethod)}</span></p>
//                 </div>
//               </div>
//               <div className='flex justify-between md:w-1/2 '>
//                 <div className='flex items-center gap-2'>
//                   <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
//                   <p className='text-sm md:text-base'>{item.status}</p>
//                 </div>
//                 <button onClick={loadOrderData} className='border px-4 py-2 text-sm font-medium rounded-sm'>Track Order</button>
//               </div>
            
//             </div>
//           ))
//         }
//       </div>

//     </div>
//   )
// }

// export default Orders


// import React, { useContext, useEffect, useState } from 'react';
// import { ShopContext } from '../context/ShopContext';
// import Title from '../components/Title';
// import axios from 'axios';
// import { toast } from 'react-toastify';

// const Orders = () => {
//   const { backendUrl, token, currency } = useContext(ShopContext);
//   const [orderData, setOrderData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const loadOrderData = async () => {
//     try {
//       if (!token) {
//         setLoading(false);
//         return null;
//       }

//       const response = await axios.post(backendUrl + '/api/order/userorders', {}, { headers: { token } });

//       if (response.data.success) {
//         let allOrdersItem = [];

//         response.data.orders.forEach((order) => {
//           if (order.items && Array.isArray(order.items)) {
//             order.items.forEach((item) => {
//               // Make sure item is a valid object before adding properties
//               if (item) {
//                 item['status'] = order.status;
//                 item['payment'] = order.payment;
//                 item['paymentMethod'] = order.paymentMethod;
//                 item['date'] = order.date;
//                 allOrdersItem.push(item);
//               }
//             });
//           }
//         });
//         setOrderData(allOrdersItem.reverse());
//       }
//       setLoading(false);
//     } catch (error) {
//       console.error(error);
//       toast.error("Failed to load orders");
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     loadOrderData();
//   }, [token]);

//   return (
//     <div className='border-t pt-16'>
//       <div className='text-2xl'>
//         <Title text1={'MY'} text2={'ORDERS'} />
//       </div>

//       {loading ? (
//         <div className="flex justify-center items-center py-10">
//           <p>Loading your orders...</p>
//         </div>
//       ) : orderData.length === 0 ? (
//         <div className="flex flex-col items-center justify-center py-10">
//           <p className="text-gray-500 mb-4">You don't have any orders yet</p>
//           <button onClick={() => navigate('/shop')} className="bg-black text-white px-6 py-2">
//             Shop Now
//           </button>
//         </div>
//       ) : (
//         <div>
//           {orderData.map((item, index) => (
//             <div key={index} className='py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
//               <div className='flex items-start gap-6 text-sm'>
//                 {/* Check if item.image exists and has at least one element */}
//                 <img 
//                   src={item.image && item.image.length > 0 ? item.image[0] : '/placeholder-image.jpg'} 
//                   className='w-16 sm:w-20' 
//                   alt={item.name || "Product"} 
//                 />
//                 <div>
//                   <p className='sm:text-base font-medium'>{item.name || 'Product Name'}</p>
//                   <div className='flex items-center gap-3 mt-1 text-base text-gray-700'>
//                     <p>{currency}{item.price || 0}</p>
//                     <p>Quantity: {item.quantity || 1}</p>
//                     <p>Size: {item.size || 'Standard'}</p>
//                     {item.sku_id && <p>SKU: {item.sku_id}</p>}
//                   </div>
//                   <p className='mt-1'>Date: <span className='text-gray-400'>
//                     {item.date ? new Date(item.date).toDateString() : 'Unknown'}
//                   </span></p>
//                   <p className='mt-1'>Payment: <span className='text-gray-400'>
//                     {item.paymentMethod || 'Unknown'}
//                   </span></p>
//                 </div>
//               </div>
//               <div className='flex justify-between md:w-1/2'>
//                 <div className='flex items-center gap-2'>
//                   <p className={`min-w-2 h-2 rounded-full ${
//                     item.status === 'Delivered' ? 'bg-green-500' : 
//                     item.status === 'Shipped' ? 'bg-blue-500' : 'bg-yellow-500'
//                   }`}></p>
//                   <p className='text-sm md:text-base'>{item.status || 'Processing'}</p>
//                 </div>
//                 <button onClick={loadOrderData} className='border px-4 py-2 text-sm font-medium rounded-sm'>
//                   Track Order
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Orders;



// import React, { useContext, useEffect, useState } from 'react';
// import { ShopContext } from '../context/ShopContext';
// import Title from '../components/Title';
// import axios from 'axios';
// import { toast } from 'react-toastify';

// const Orders = () => {
//   const { backendUrl, token, currency, navigate } = useContext(ShopContext);
//   const [orderData, setOrderData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const loadOrderData = async () => {
//     try {
//       if (!token) {
//         setLoading(false);
//         return null;
//       }

//       const response = await axios.post(backendUrl + '/api/order/userorders', {}, { headers: { token } });

//       if (response.data.success) {
//         let allOrdersItem = [];

//         response.data.orders.forEach((order) => {
//           if (order.items && Array.isArray(order.items)) {
//             order.items.forEach((item) => {
//               // Make sure item is a valid object before adding properties
//               if (item) {
//                 item['status'] = order.status;
//                 item['payment'] = order.payment;
//                 item['paymentMethod'] = order.paymentMethod;
//                 item['date'] = order.date;
//                 allOrdersItem.push(item);
//               }
//             });
//           }
//         });
//         setOrderData(allOrdersItem.reverse());
//       }
//       setLoading(false);
//     } catch (error) {
//       console.error(error);
//       toast.error("Failed to load orders");
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     loadOrderData();
//   }, [token]);

//   return (
//     <div className='border-t pt-16'>
//       <div className='text-2xl'>
//         <Title text1={'MY'} text2={'ORDERS'} />
//       </div>

//       {loading ? (
//         <div className="flex justify-center items-center py-10">
//           <p>Loading your orders...</p>
//         </div>
//       ) : orderData.length === 0 ? (
//         <div className="flex flex-col items-center justify-center py-10">
//           <p className="text-gray-500 mb-4">You don't have any orders yet</p>
//           <button onClick={() => navigate('/shop')} className="bg-black text-white px-6 py-2">
//             Shop Now
//           </button>
//         </div>
//       ) : (
//         <div>
//           {orderData.map((item, index) => (
//             <div key={index} className='py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
//               <div className='flex items-start gap-6 text-sm'>
//                 {/* Use the image property directly now that it's a string */}
//                 <img 
//                   src={item.image || '/placeholder-image.jpg'} 
//                   className='w-16 sm:w-20' 
//                   alt={item.productName || "Product"} 
//                 />
//                 <div>
//                   <p className='sm:text-base font-medium'>{item.productName || 'Product Name'}</p>
//                   <div className='flex items-center gap-3 mt-1 text-base text-gray-700'>
//                     <p>{currency}{item.price || 0}</p>
//                     <p>Quantity: {item.quantity || 1}</p>
//                     <p>Size: {item.size || 'Standard'}</p>
//                     {item.sku_id && <p>SKU: {item.sku_id}</p>}
//                   </div>
//                   <p className='mt-1'>Date: <span className='text-gray-400'>
//                     {item.date ? new Date(item.date).toDateString() : 'Unknown'}
//                   </span></p>
//                   <p className='mt-1'>Payment: <span className='text-gray-400'>
//                     {item.paymentMethod || 'Unknown'}
//                   </span></p>
//                 </div>
//               </div>
//               <div className='flex justify-between md:w-1/2'>
//                 <div className='flex items-center gap-2'>
//                   <p className={`min-w-2 h-2 rounded-full ${
//                     item.status === 'Delivered' ? 'bg-green-500' : 
//                     item.status === 'Shipped' ? 'bg-blue-500' : 'bg-yellow-500'
//                   }`}></p>
//                   <p className='text-sm md:text-base'>{item.status || 'Processing'}</p>
//                 </div>
//                 <button onClick={loadOrderData} className='border px-4 py-2 text-sm font-medium rounded-sm'>
//                   Track Order
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Orders;





// import React, { useContext, useEffect, useState } from 'react';
// import { ShopContext } from '../context/ShopContext';
// import Title from '../components/Title';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import { PDFDownloadLink } from '@react-pdf/renderer';
// import InvoicePDF from './InvoicePDF'; // Adjust the path as needed

// const Orders = () => {
//   const { backendUrl, token, currency, navigate } = useContext(ShopContext);
//   const [orderData, setOrderData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [fullOrders, setFullOrders] = useState([]); // Store full order objects for invoice generation

//   const loadOrderData = async () => {
//     try {
//       if (!token) {
//         setLoading(false);
//         return null;
//       }

//       const response = await axios.post(backendUrl + '/api/order/userorders', {}, { headers: { token } });

//       if (response.data.success) {
//         // Store full orders for invoice generation
//         setFullOrders(response.data.orders);
        
//         let allOrdersItem = [];

//         response.data.orders.forEach((order) => {
//           if (order.items && Array.isArray(order.items)) {
//             order.items.forEach((item) => {
//               // Make sure item is a valid object before adding properties
//               if (item) {
//                 item['orderId'] = order._id; // Save the order ID for invoice reference
//                 item['status'] = order.status;
//                 item['payment'] = order.payment;
//                 item['paymentMethod'] = order.paymentMethod;
//                 item['date'] = order.date;
//                 item['address'] = order.address; // Include address for invoice
//                 allOrdersItem.push(item);
//               }
//             });
//           }
//         });
//         setOrderData(allOrdersItem.reverse());
//       }
//       setLoading(false);
//     } catch (error) {
//       console.error(error);
//       toast.error("Failed to load orders");
//       setLoading(false);
//     }
//   };

//   // Find the full order data for an item
//   const findFullOrderForItem = (item) => {
//     const order = fullOrders.find(order => order._id === item.orderId);
//     if (!order) return item; // Fallback to item if order not found
    
//     // Create a complete order object with all needed data for the invoice
//     return {
//       ...item,
//       _id: item.orderId,
//       address: order.address,
//       date: order.date,
//       payment: order.payment,
//       paymentMethod: order.paymentMethod,
//       status: order.status
//     };
//   };

//   useEffect(() => {
//     loadOrderData();
//   }, [token]);

//   return (
//     <div className='border-t pt-16'>
//       <div className='text-2xl'>
//         <Title text1={'MY'} text2={'ORDERS'} />
//       </div>

//       {loading ? (
//         <div className="flex justify-center items-center py-10">
//           <p>Loading your orders...</p>
//         </div>
//       ) : orderData.length === 0 ? (
//         <div className="flex flex-col items-center justify-center py-10">
//           <p className="text-gray-500 mb-4">You don't have any orders yet</p>
//           <button onClick={() => navigate('/shop')} className="bg-black text-white px-6 py-2">
//             Shop Now
//           </button>
//         </div>
//       ) : (
//         <div>
//           {orderData.map((item, index) => (
//             <div key={index} className='py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
//               <div className='flex items-start gap-6 text-sm'>
//                 <img 
//                   src={item.image || '/placeholder-image.jpg'} 
//                   className='w-16 sm:w-20' 
//                   alt={item.productName || "Product"} 
//                 />
//                 <div>
//                   <p className='sm:text-base font-medium'>{item.productName || 'Product Name'}</p>
//                   <div className='flex items-center gap-3 mt-1 text-base text-gray-700'>
//                     <p>{currency}{item.price || 0}</p>
//                     <p>Quantity: {item.quantity || 1}</p>
//                     <p>Size: {item.size || 'Standard'}</p>
//                     {item.sku_id && <p>SKU: {item.sku_id}</p>}
//                   </div>
//                   <p className='mt-1'>Date: <span className='text-gray-400'>
//                     {item.date ? new Date(item.date).toDateString() : 'Unknown'}
//                   </span></p>
//                   <p className='mt-1'>Payment: <span className='text-gray-400'>
//                     {item.paymentMethod || 'Unknown'}
//                   </span></p>
//                 </div>
//               </div>
//               <div className='flex flex-col md:flex-row justify-between md:w-1/2 gap-2'>
//                 <div className='flex items-center gap-2'>
//                   <p className={`min-w-2 h-2 rounded-full ${
//                     item.status === 'Delivered' ? 'bg-green-500' : 
//                     item.status === 'Shipped' ? 'bg-blue-500' : 'bg-yellow-500'
//                   }`}></p>
//                   <p className='text-sm md:text-base'>{item.status || 'Processing'}</p>
//                 </div>
//                 <div className='flex gap-2'>
//                   <button onClick={loadOrderData} className='border px-4 py-2 text-sm font-medium rounded-sm'>
//                     Track Order
//                   </button>
                  
//                   {/* Download Invoice Button */}
//                   <PDFDownloadLink 
//                     document={<InvoicePDF orderData={findFullOrderForItem(item)} />}
//                     fileName={`invoice-${item.orderId || 'order'}.pdf`}
//                     className='border px-4 py-2 text-sm font-medium rounded-sm bg-black text-white'
//                   >
//                     {({ blob, url, loading, error }) =>
//                       loading ? 'Loading...' : 'Download Invoice'
//                     }
//                   </PDFDownloadLink>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Orders;

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



// import React, { useContext, useEffect, useState } from 'react';
// import { ShopContext } from '../context/ShopContext';
// import Title from '../components/Title';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import { PDFDownloadLink } from '@react-pdf/renderer';
// import InvoicePDF from './InvoicePDF'; // Adjust the path as needed

// const Orders = () => {
//   const { backendUrl, token, currency, navigate } = useContext(ShopContext);
//   const [orderData, setOrderData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [fullOrders, setFullOrders] = useState([]); // Store full order objects for invoice generation

//   const loadOrderData = async () => {
//     try {
//       if (!token) {
//         setLoading(false);
//         return null;
//       }

//       const response = await axios.post(backendUrl + '/api/order/userorders', {}, { headers: { token } });

//       if (response.data.success) {
//         // Store full orders for invoice generation
//         setFullOrders(response.data.orders);
        
//         let allOrdersItem = [];

//         response.data.orders.forEach((order) => {
//           if (order.items && Array.isArray(order.items)) {
//             order.items.forEach((item) => {
//               // Make sure item is a valid object before adding properties
//               if (item) {
//                 item['orderId'] = order._id; // Save the order ID for invoice reference
//                 item['status'] = order.status;
//                 item['payment'] = order.payment;
//                 item['paymentMethod'] = order.paymentMethod;
//                 item['date'] = order.date;
//                 item['address'] = order.address; // Include address for invoice
//                 item['awb_no'] = order.awb_no; // Add AWB number from order
//                 allOrdersItem.push(item);
//               }
//             });
//           }
//         });
//         setOrderData(allOrdersItem.reverse());
//       }
//       setLoading(false);
//     } catch (error) {
//       console.error(error);
//       toast.error("Failed to load orders");
//       setLoading(false);
//     }
//   };

//   // Find the full order data for an item
//   const findFullOrderForItem = (item) => {
//     const order = fullOrders.find(order => order._id === item.orderId);
//     if (!order) return item; // Fallback to item if order not found
    
//     // Create a complete order object with all needed data for the invoice
//     return {
//       ...item,
//       _id: item.orderId,
//       address: order.address,
//       date: order.date,
//       payment: order.payment,
//       paymentMethod: order.paymentMethod,
//       status: order.status,
//       awb_no: order.awb_no // Include AWB number
//     };
//   };

//   useEffect(() => {
//     loadOrderData();
//   }, [token]);

//   return (
//     <div className='border-t pt-16'>
//       <div className='text-2xl'>
//         <Title text1={'MY'} text2={'ORDERS'} />
//       </div>

//       {loading ? (
//         <div className="flex justify-center items-center py-10">
//           <p>Loading your orders...</p>
//         </div>
//       ) : orderData.length === 0 ? (
//         <div className="flex flex-col items-center justify-center py-10">
//           <p className="text-gray-500 mb-4">You don't have any orders yet</p>
//           <button onClick={() => navigate('/shop')} className="bg-black text-white px-6 py-2">
//             Shop Now
//           </button>
//         </div>
//       ) : (
//         <div>
//           {orderData.map((item, index) => (
//             <div key={index} className='py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
//               <div className='flex items-start gap-6 text-sm'>
//                 <img 
//                   src={item.image || '/placeholder-image.jpg'} 
//                   className='w-16 sm:w-20' 
//                   alt={item.productName || "Product"} 
//                 />
//                 <div>
//                   <p className='sm:text-base font-medium'>{item.productName || 'Product Name'}</p>
//                   <div className='flex items-center gap-3 mt-1 text-base text-gray-700'>
//                     <p>{currency}{item.price || 0}</p>
//                     <p>Quantity: {item.quantity || 1}</p>
//                     <p>Size: {item.size || 'Standard'}</p>
//                     {item.sku_id && <p>SKU: {item.sku_id}</p>}
//                   </div>
//                   <p className='mt-1'>Date: <span className='text-gray-400'>
//                     {item.date ? new Date(item.date).toDateString() : 'Unknown'}
//                   </span></p>
//                   <p className='mt-1'>Payment: <span className='text-gray-400'>
//                     {item.paymentMethod || 'Unknown'}
//                   </span></p>
//                   {/* Display AWB number if it exists */}
//                   {item.awb_no && (
//                     <p className='mt-1'><span className='text-blue-600 font-medium'>
//                       DHL AWB No.: {item.awb_no}
//                     </span></p>
//                   )}
//                 </div>
//               </div>
//               <div className='flex flex-col md:flex-row justify-between md:w-1/2 gap-2'>
//                 <div className='flex items-center gap-2'>
//                   <p className={`min-w-2 h-2 rounded-full ${
//                     item.status === 'Delivered' ? 'bg-green-500' : 
//                     item.status === 'Shipped' ? 'bg-blue-500' : 'bg-yellow-500'
//                   }`}></p>
//                   <p className='text-sm md:text-base'>{item.status || 'Processing'}</p>
//                 </div>
                // <div className='flex gap-2'>
                //   <button onClick={loadOrderData} className='border px-4 py-2 text-sm font-medium rounded-sm'>
                //     Track Order
                //   </button>
                  
                //   {/* Download Invoice Button */}
                //   <PDFDownloadLink 
                //     document={<InvoicePDF orderData={findFullOrderForItem(item)} />}
                //     fileName={`invoice-${item.orderId || 'order'}.pdf`}
                //     className='border px-4 py-2 text-sm font-medium rounded-sm bg-black text-white'
                //   >
                //     {({ blob, url, loading, error }) =>
                //       loading ? 'Loading...' : 'Download Invoice'
                //     }
                //   </PDFDownloadLink>
                // </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Orders;

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



// import React, { useContext, useEffect, useState } from 'react';
// import { ShopContext } from '../context/ShopContext';
// import Title from '../components/Title';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import { PDFDownloadLink } from '@react-pdf/renderer';
// import InvoicePDF from './InvoicePDF'; // Adjust the path as needed

// const Orders = () => {
//   const { backendUrl, token, currency, navigate } = useContext(ShopContext);
//   const [orderData, setOrderData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [fullOrders, setFullOrders] = useState([]); // Store full order objects for invoice generation

//   const loadOrderData = async () => {
//     try {
//       if (!token) {
//         setLoading(false);
//         return null;
//       }

//       const response = await axios.post(backendUrl + '/api/order/userorders', {}, { headers: { token } });

//       if (response.data.success) {
//         // Store full orders for invoice generation
//         setFullOrders(response.data.orders);
        
//         let allOrdersItem = [];

//         response.data.orders.forEach((order) => {
//           if (order.items && Array.isArray(order.items)) {
//             order.items.forEach((item) => {
//               // Make sure item is a valid object before adding properties
//               if (item) {
//                 item['orderId'] = order._id; // Save the order ID for invoice reference
//                 item['status'] = order.status;
//                 item['payment'] = order.payment;
//                 item['paymentMethod'] = order.paymentMethod;
//                 item['date'] = order.date;
//                 item['address'] = order.address; // Include address for invoice
//                 item['awb_no'] = order.awb_no; // Add AWB number from order
//                 allOrdersItem.push(item);
//               }
//             });
//           }
//         });
//         setOrderData(allOrdersItem.reverse());
//       }
//       setLoading(false);
//     } catch (error) {
//       console.error(error);
//       toast.error("Failed to load orders");
//       setLoading(false);
//     }
//   };

//   // Find the full order data for an item
//   const findFullOrderForItem = (item) => {
//     const order = fullOrders.find(order => order._id === item.orderId);
//     if (!order) return item; // Fallback to item if order not found
    
//     // Create a complete order object with all needed data for the invoice
//     return {
//       ...item,
//       _id: item.orderId,
//       address: order.address,
//       date: order.date,
//       payment: order.payment,
//       paymentMethod: order.paymentMethod,
//       status: order.status,
//       awb_no: order.awb_no // Include AWB number
//     };
//   };

//   useEffect(() => {
//     loadOrderData();
//   }, [token]);

//   return (
//     <div className='border-t pt-16'>
//       <div className='text-2xl'>
//         <Title text1={'MY'} text2={'ORDERS'} />
//       </div>

//       {loading ? (
//         <div className="flex justify-center items-center py-10">
//           <p>Loading your orders...</p>
//         </div>
//       ) : orderData.length === 0 ? (
//         <div className="flex flex-col items-center justify-center py-10">
//           <p className="text-gray-500 mb-4">You don't have any orders yet</p>
//           <button onClick={() => navigate('/shop')} className="bg-black text-white px-6 py-2">
//             Shop Now
//           </button>
//         </div>
//       ) : (
//         <div>
//           {orderData.map((item, index) => (
//             <div key={index} className='py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
//               <div className='flex items-start gap-6 text-sm'>
//                 <img 
//                   src={item.image || '/placeholder-image.jpg'} 
//                   className='w-16 sm:w-20' 
//                   alt={item.productName || "Product"} 
//                 />
//                 <div>
//                   <p className='sm:text-base font-medium'>{item.productName || 'Product Name'}</p>
//                   <div className='flex items-center gap-3 mt-1 text-base text-gray-700'>
//                     <p>{currency}{item.price || 0}</p>
//                     <p>Quantity: {item.quantity || 1}</p>
//                     <p>Size: {item.size || 'Standard'}</p>
//                     {item.sku_id && <p>SKU: {item.sku_id}</p>}
//                   </div>
//                   <p className='mt-1'>Date: <span className='text-gray-400'>
//                     {item.date ? new Date(item.date).toDateString() : 'Unknown'}
//                   </span></p>
//                   <p className='mt-1'>Payment: <span className='text-gray-400'>
//                     {item.paymentMethod || 'Unknown'}
//                   </span></p>
//                   {/* Removed AWB number from here */}
//                 </div>
//               </div>
//               <div className='flex flex-col md:flex-row justify-between md:w-1/2 gap-2'>
//                 <div className='flex flex-col'>
//                   <div className='flex items-center gap-2'>
//                     <p className={`min-w-2 h-2 rounded-full ${
//                       item.status === 'Delivered' ? 'bg-green-500' : 
//                       item.status === 'Shipped' ? 'bg-blue-500' : 'bg-yellow-500'
//                     }`}></p>
//                     <p className='text-sm md:text-base'>{item.status || 'Processing'}</p>
//                   </div>
//                   {/* Moved AWB number to appear right below the status indicator */}
//                   {item.awb_no && (
//                     <p className='text-blue-600 font-medium text-sm mt-1 ml-4'>
//                       VIA DHL AWB No.: {item.awb_no}
//                     </p>
//                   )}
//                 </div>
//                 <div className='flex gap-2'>
//                   <button onClick={loadOrderData} className='border px-4 py-2 text-sm font-medium rounded-sm'>
//                     Track Order
//                   </button>
                  
//                   {/* Download Invoice Button */}
//                   <PDFDownloadLink 
//                     document={<InvoicePDF orderData={findFullOrderForItem(item)} />}
//                     fileName={`invoice-${item.orderId || 'order'}.pdf`}
//                     className='border px-4 py-2 text-sm font-medium text-center rounded-sm bg-black text-white'
//                   >
//                     {({ blob, url, loading, error }) =>
//                       loading ? 'Loading...' : 'Download Invoice'
//                     }
//                   </PDFDownloadLink>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Orders;


// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// import React, { useContext, useEffect, useState } from 'react';
// import { ShopContext } from '../context/ShopContext';
// import Title from '../components/Title';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import { PDFDownloadLink } from '@react-pdf/renderer';
// import InvoicePDF from './InvoicePDF'; // Make sure this path is correct

// const Orders = () => {
//   const { backendUrl, token, currency,profile, navigate } = useContext(ShopContext);
//   const [orders, setOrders] = useState([]); // Store full orders
//   const [loading, setLoading] = useState(true);


//   const loadOrderData = async () => {
//     try {
//       if (!token) {
//         setLoading(false);
//         return null;
//       }

//       const response = await axios.post(backendUrl + '/api/order/userorders', {}, { headers: { token } });

//       if (response.data.success) {
//         // Process orders and add currency information to each one
//         const processedOrders = response.data.orders.map(order => ({
//           ...order,
//           currency // Add currency from context to each order
//         }));
        
//         // Sort orders by date (newest first)
//         const sortedOrders = processedOrders.sort((a, b) => 
//           new Date(b.date) - new Date(a.date)
//         );
        
//         setOrders(sortedOrders);
//       }
//       setLoading(false);
//     } catch (error) {
//       console.error(error);
//       toast.error("Failed to load orders");
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     loadOrderData();
//   }, [token]);

//   // Calculate total amount for an order
//   const calculateOrderTotal = (order) => {
//     if (order.payment && order.payment.amount) {
//       return order.payment.amount;
//     }
    
//     return order.items?.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0) || 0;
//   };

//   return (
//     <div className='border-t pt-16'>
//       <div className='text-2xl'>
//         <Title text1={'MY'} text2={'ORDERS'} />
//       </div>

//       {loading ? (
//         <div className="flex justify-center items-center py-10">
//           <p>Loading your orders...</p>
//         </div>
//       ) : orders.length === 0 ? (
//         <div className="flex flex-col items-center justify-center py-10">
//           <p className="text-gray-500 mb-4">You don't have any orders yet</p>
//           <button onClick={() => navigate('/collection')} className="bg-black text-white px-6 py-2">
//             Shop Now
//           </button>
//         </div>
//       ) : (
//         <div>
//           {orders.map((order, orderIndex) => (
//             <div key={orderIndex} className="mb-8 border-b pb-6">
//               {/* Order Header */}
//               <div className="bg-gray-50 p-4 mb-4">
//                 <div className="flex justify-between items-center">
//                   <div>
//                     {/* <p className="font-medium">Order #{order._id}</p> */}
//                     <p className="font-medium">Order Details </p>

//                     <p className="text-sm text-gray-500">
//                       Date: {new Date(order.date).toDateString()}
//                     </p>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <p className={`w-2 h-2 rounded-full ${
//                       order.status === 'Delivered' ? 'bg-green-500' : 
//                       order.status === 'Shipped' ? 'bg-blue-500' : 'bg-yellow-500'
//                     }`}></p>
//                     <p className="text-sm md:text-base">{order.status || 'Processing'}</p>
//                   </div>
//                 </div>
//                 {order.awb_no && (
//                   <p className="text-blue-600 font-medium text-sm mt-1">
//                     VIA DHL AWB No.: {order.awb_no}
//                   </p>
//                 )}
//                 <p className="text-sm mt-1">
//                   Total: <span className="font-medium">{currency}{calculateOrderTotal(order).toFixed(2)}</span>
//                 </p>
//               </div>

//               {/* Order Items */}
//               {order.items && order.items.map((item, itemIndex) => (
//                 <div key={itemIndex} className="py-4 text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
//                   <div className="flex items-start gap-6 text-sm">
//                     <img 
//                       src={item.image || '/placeholder-image.jpg'} 
//                       className="w-16 sm:w-20" 
//                       alt={item.productName || "Product"} 
//                     />
//                     <div>
//                       <p className="sm:text-base font-medium">{item.productName || 'Product Name'}</p>
//                       <div className="flex items-center gap-3 mt-1 text-base text-gray-700">
//                         <p>{currency}{item.price || 0}</p>
//                         <p>Quantity: {item.quantity || 1}</p>
//                         <p>Size: {item.size || 'Standard'}</p>
//                         {item.sku_id && <p>SKU: {item.sku_id}</p>}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}

//               {/* Order Footer */}
//               <div className="flex justify-between items-center mt-4 pt-4 border-t">
//                 <div>
//                   <p className="text-sm">Payment: <span className="text-gray-500">{order.paymentMethod || 'Unknown'}</span></p>
//                 </div>
//                 <div className="flex gap-2">
//                   <button onClick={loadOrderData} className="border px-4 py-2 text-sm font-medium rounded-sm">
//                     Track Order
//                   </button>
                  
//                   {/* Download Invoice Button - Now passes the entire order object */}
//                   <PDFDownloadLink 
//                     document={<InvoicePDF orderData={order} />}
//                     fileName={`invoice-${order._id || 'order'}.pdf`}
//                     className="border px-4 py-2 text-sm font-medium text-center rounded-sm bg-black text-white"
//                   >
//                     {({ blob, url, loading, error }) =>
//                       loading ? 'Loading...' : 'Download Invoice'
//                     }
//                   </PDFDownloadLink>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Orders;

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// import React, { useContext, useEffect, useState } from 'react';
// import { ShopContext } from '../context/ShopContext';
// import Title from '../components/Title';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import { PDFDownloadLink } from '@react-pdf/renderer';
// import InvoicePDF from './InvoicePDF'; // Make sure this path is correct

// const Orders = () => {
//   const { backendUrl, token, currency, profile, navigate } = useContext(ShopContext);
//   const [orders, setOrders] = useState([]); // Store full orders
//   const [loading, setLoading] = useState(true);
//   const [sendingEmail, setSendingEmail] = useState({}); // Track which order is sending email

//   const loadOrderData = async () => {
//     try {
//       if (!token) {
//         setLoading(false);
//         return null;
//       }

//       const response = await axios.post(backendUrl + '/api/order/userorders', {}, { headers: { token } });

//       if (response.data.success) {
//         // Process orders and add currency information to each one
//         const processedOrders = response.data.orders.map(order => ({
//           ...order,
//           currency // Add currency from context to each order
//         }));
        
//         // Sort orders by date (newest first)
//         const sortedOrders = processedOrders.sort((a, b) => 
//           new Date(b.date) - new Date(a.date)
//         );
        
//         setOrders(sortedOrders);
//       }
//       setLoading(false);
//     } catch (error) {
//       console.error(error);
//       toast.error("Failed to load orders");
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     loadOrderData();
//   }, [token]);

//   // Calculate total amount for an order
//   const calculateOrderTotal = (order) => {
//     if (order.payment && order.payment.amount) {
//       return order.payment.amount;
//     }
    
//     return order.items?.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0) || 0;
//   };

//   // Send order details email
//   const sendOrderEmail = async (order) => {
//     if (!profile || !profile.email) {
//       toast.error("Email address not found. Please update your profile.");
//       return;
//     }

//     try {
//       setSendingEmail({ ...sendingEmail, [order._id]: true });
      
//       // Calculate total for the email
//       const total = calculateOrderTotal(order);
      
//       // Prepare order details for email
//       const emailData = {
//         orderId: order._id,
//         email: profile.email,
//         userId: profile.userId || profile._id,
//         orderDetails: {
//           ...order,
//           total,
//           date: order.date,
//           status: order.status || 'Processing',
//           paymentMethod: order.paymentMethod || 'Online Payment',
//           items: order.items || []
//         }
//       };

//       // Send request to backend
//       const response = await axios.post(
//         `${backendUrl}/api/email/send-order-details`,
//         emailData,
//         { headers: { token } }
//       );

//       if (response.data.success) {
//         toast.success("Order details sent to your email!");
//       } else {
//         toast.error(response.data.message || "Failed to send email");
//       }
//     } catch (error) {
//       console.error("Email sending error:", error);
//       toast.error("Could not send order details to email");
//     } finally {
//       setSendingEmail({ ...sendingEmail, [order._id]: false });
//     }
//   };

//   return (
//     <div className='border-t pt-16'>
//       <div className='text-2xl'>
//         <Title text1={'MY'} text2={'ORDERS'} />
//       </div>

//       {loading ? (
//         <div className="flex justify-center items-center py-10">
//           <p>Loading your orders...</p>
//         </div>
//       ) : orders.length === 0 ? (
//         <div className="flex flex-col items-center justify-center py-10">
//           <p className="text-gray-500 mb-4">You don't have any orders yet</p>
//           <button onClick={() => navigate('/collection')} className="bg-black text-white px-6 py-2">
//             Shop Now
//           </button>
//         </div>
//       ) : (
//         <div>
//           {orders.map((order, orderIndex) => (
//             <div key={orderIndex} className="mb-8 border-b pb-6">
//               {/* Order Header */}
//               <div className="bg-gray-50 p-4 mb-4">
//                 <div className="flex justify-between items-center">
//                   <div>
//                     <p className="font-medium">Order Details </p>
//                     <p className="text-sm text-gray-500">
//                       Date: {new Date(order.date).toDateString()}
//                     </p>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <p className={`w-2 h-2 rounded-full ${
//                       order.status === 'Delivered' ? 'bg-green-500' : 
//                       order.status === 'Shipped' ? 'bg-blue-500' : 'bg-yellow-500'
//                     }`}></p>
//                     <p className="text-sm md:text-base">{order.status || 'Processing'}</p>
//                   </div>
//                 </div>
//                 {order.awb_no && (
//                   <p className="text-blue-600 font-medium text-sm mt-1">
//                     VIA DHL AWB No.: {order.awb_no}
//                   </p>
//                 )}
//                 <p className="text-sm mt-1">
//                   Total: <span className="font-medium">{currency}{calculateOrderTotal(order).toFixed(2)}</span>
//                 </p>
//               </div>

//               {/* Order Items */}
//               {order.items && order.items.map((item, itemIndex) => (
//                 <div key={itemIndex} className="py-4 text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
//                   <div className="flex items-start gap-6 text-sm">
//                     <img 
//                       src={item.image || '/placeholder-image.jpg'} 
//                       className="w-16 sm:w-20" 
//                       alt={item.productName || "Product"} 
//                     />
//                     <div>
//                       <p className="sm:text-base font-medium">{item.productName || 'Product Name'}</p>
//                       <div className="flex items-center gap-3 mt-1 text-base text-gray-700">
//                         <p>{currency}{item.price || 0}</p>
//                         <p>Quantity: {item.quantity || 1}</p>
//                         <p>Size: {item.size || 'Standard'}</p>
//                         {item.sku_id && <p>SKU: {item.sku_id}</p>}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}

//               {/* Order Footer */}
//               <div className="flex justify-between items-center mt-4 pt-4 border-t">
//                 <div>
//                   <p className="text-sm">Payment: <span className="text-gray-500">{order.paymentMethod || 'Unknown'}</span></p>
//                 </div>
//                 <div className="flex gap-2">
//                   <button onClick={loadOrderData} className="border px-4 py-2 text-sm font-medium rounded-sm">
//                     Track Order
//                   </button>
                  
//                   {/* New Send Email Button */}
//                   <button 
//                     onClick={() => sendOrderEmail(order)} 
//                     disabled={sendingEmail[order._id]}
//                     className="border px-4 py-2 text-sm font-medium rounded-sm bg-blue-500 text-white hover:bg-blue-600 disabled:bg-blue-300 disabled:cursor-not-allowed"
//                   >
//                     {sendingEmail[order._id] ? 'Sending...' : 'Send to Email'}
//                   </button>
                  
//                   {/* Download Invoice Button */}
//                   <PDFDownloadLink 
//                     document={<InvoicePDF orderData={order} />}
//                     fileName={`invoice-${order._id || 'order'}.pdf`}
//                     className="border px-4 py-2 text-sm font-medium text-center rounded-sm bg-black text-white"
//                   >
//                     {({ blob, url, loading, error }) =>
//                       loading ? 'Loading...' : 'Download Invoice'
//                     }
//                   </PDFDownloadLink>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Orders;

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import axios from 'axios';
import { toast } from 'react-toastify';
import { PDFDownloadLink } from '@react-pdf/renderer';
import InvoicePDF from './InvoicePDF'; // Make sure this path is correct

const Orders = () => {
  const { backendUrl, token, currency, profile, navigate } = useContext(ShopContext);
  const [orders, setOrders] = useState([]); // Store full orders
  const [loading, setLoading] = useState(true);
  const [sendingEmail, setSendingEmail] = useState({}); // Track which order is sending email
  const [processedOrderEmails, setProcessedOrderEmails] = useState([]); // Track which orders have had emails sent

  const loadOrderData = async () => {
    try {
      if (!token) {
        setLoading(false);
        return null;
      }

      const response = await axios.post(backendUrl + '/api/order/userorders', {}, { headers: { token } });

      if (response.data.success) {
        // Process orders and add currency information to each one
        const processedOrders = response.data.orders.map(order => ({
          ...order,
          currency // Add currency from context to each order
        }));
        
        // Sort orders by date (newest first)
        const sortedOrders = processedOrders.sort((a, b) => 
          new Date(b.date) - new Date(a.date)
        );
        
        setOrders(sortedOrders);
        
        // Check for newly placed orders that need automatic emails
        sortedOrders.forEach(order => {
          if (
            order.status === 'Order Placed' && 
            !processedOrderEmails.includes(order._id)
          ) {
            // Send email automatically for new orders with "Order Placed" status
            sendOrderEmail(order, true);
            // Add to processed list
            setProcessedOrderEmails(prev => [...prev, order._id]);
          }
        });
      }
      setLoading(false);
    } catch (error) {
      console.error(error);
      toast.error("Failed to load orders");
      setLoading(false);
    }
  };

  useEffect(() => {
    loadOrderData();
  }, [token]);

  // Calculate total amount for an order
  const calculateOrderTotal = (order) => {
    if (order.payment && order.payment.amount) {
      return order.payment.amount;
    }
    
    return order.items?.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0) || 0;
  };

  // Send order details email
  const sendOrderEmail = async (order, isAutomatic = false) => {
    if (!profile || !profile.email) {
      toast.error("Email address not found. Please update your profile.");
      return;
    }

    try {
      setSendingEmail({ ...sendingEmail, [order._id]: true });
      
      // Calculate total for the email
      const total = calculateOrderTotal(order);
      
      // Prepare order details for email
      const emailData = {
        orderId: order._id,
        email: profile.email,
        userId: profile.userId || profile._id,
        orderDetails: {
          ...order,
          total,
          date: order.date,
          status: order.status || 'Processing',
          paymentMethod: order.paymentMethod || 'Online Payment',
          items: order.items || []
        }
      };

      // Send request to backend
      const response = await axios.post(
        `${backendUrl}/api/email/send-order-details`,
        emailData,
        { headers: { token } }
      );

      if (response.data.success) {
        if (!isAutomatic) {
          toast.success("Order details sent to your email!");
        } else {
          // Only show toast for automatic emails if you want users to be notified
          toast.info("Order confirmation sent to your email");
        }
      } else {
        if (!isAutomatic) {
          toast.error(response.data.message || "Failed to send email");
        } else {
          console.error("Automatic email sending failed:", response.data.message);
        }
      }
    } catch (error) {
      console.error("Email sending error:", error);
      if (!isAutomatic) {
        toast.error("Could not send order details to email");
      }
    } finally {
      setSendingEmail({ ...sendingEmail, [order._id]: false });
    }
  };

  return (
    <div className='border-t pt-16'>
      <div className='text-2xl'>
        <Title text1={'MY'} text2={'ORDERS'} />
      </div>

      {loading ? (
        <div className="flex justify-center items-center py-10">
          <p>Loading your orders...</p>
        </div>
      ) : orders.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-10">
          <p className="text-gray-500 mb-4">You don't have any orders yet</p>
          <button onClick={() => navigate('/collection')} className="bg-black text-white px-6 py-2">
            Shop Now
          </button>
        </div>
      ) : (
        <div>
          {orders.map((order, orderIndex) => (
            <div key={orderIndex} className="mb-8 border-b pb-6">
              {/* Order Header */}
              <div className="bg-gray-50 p-4 mb-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Order Details </p>
                    <p className="text-sm text-gray-500">
                      Date: {new Date(order.date).toDateString()}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className={`w-2 h-2 rounded-full ${
                      order.status === 'Delivered' ? 'bg-green-500' : 
                      order.status === 'Shipped' ? 'bg-blue-500' :
                      order.status === 'Order Placed' ? 'bg-purple-500' : 'bg-yellow-500'
                    }`}></p>
                    <p className="text-sm md:text-base">{order.status || 'Processing'}</p>
                  </div>
                </div>
                {order.awb_no && (
                  <p className="text-blue-600 font-medium text-sm mt-1">
                    VIA DHL AWB No.: {order.awb_no}
                  </p>
                )}
                <p className="text-sm mt-1">
                  Total: <span className="font-medium">{currency}{calculateOrderTotal(order).toFixed(2)}</span>
                </p>
              </div>

              {/* Order Items */}
              {order.items && order.items.map((item, itemIndex) => (
                <div key={itemIndex} className="py-4 text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-start gap-6 text-sm">
                    <img 
                      src={item.image || '/placeholder-image.jpg'} 
                      className="w-16 sm:w-20" 
                      alt={item.productName || "Product"} 
                    />
                    <div>
                      <p className="sm:text-base font-medium">{item.productName || 'Product Name'}</p>
                      <div className="flex items-center gap-3 mt-1 text-base text-gray-700">
                        <p>{currency}{item.price || 0}</p>
                        <p>Quantity: {item.quantity || 1}</p>
                        <p>Size: {item.size || 'Standard'}</p>
                        {/* {item.sku_id && <p>SKU: {item.sku_id}</p>} */}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Order Footer */}
              <div className="flex justify-between items-center mt-4 pt-4 border-t">
                <div>
                  <p className="text-sm">Payment: <span className="text-gray-500">{order.paymentMethod || 'Unknown'}</span></p>
                </div>
                <div className="flex gap-2">
                  <button onClick={loadOrderData} className="border px-4 py-2 text-sm font-medium rounded-sm">
                    Track Order
                  </button>
                  
                  {/* Manual Send Email Button */}
                  <button 
                    onClick={() => sendOrderEmail(order)} 
                    disabled={sendingEmail[order._id]}
                    className="border px-4 py-2 text-sm font-medium rounded-sm bg-blue-500 text-white hover:bg-blue-600 disabled:bg-blue-300 disabled:cursor-not-allowed"
                  >
                    {sendingEmail[order._id] ? 'Sending...' : 'Send to Email'}
                  </button>
                  
                  {/* Download Invoice Button */}
                  <PDFDownloadLink 
                    document={<InvoicePDF orderData={order} />}
                    fileName={`invoice-${order._id || 'order'}.pdf`}
                    className="border px-4 py-2 text-sm font-medium text-center rounded-sm bg-black text-white"
                  >
                    {({ blob, url, loading, error }) =>
                      loading ? 'Loading...' : 'Download Invoice'
                    }
                  </PDFDownloadLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
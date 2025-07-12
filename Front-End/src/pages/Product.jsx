// import React, { useContext, useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { ShopContext } from "../context/ShopContext";
// import { assets } from "../assets/assets";
// import RelatedProduct from "../components/RelatedProduct";

// const Product = () => {
//   const { productId } = useParams();
//   const { products,currency,delivery_fee,addToCart} = useContext(ShopContext);
//   const [productData, setProductData] = useState(false);
//   const [image,setImage] = useState(''); 
//   const [size,setSize] = useState('');

//   const fetchProductData = async () => {
//     products.map((item)=>{
//       if(item._id === productId ){
//         setProductData(item);
//         setImage(item.image[0]);
//         // console.log(item);
//         return null;
//       }
//     })
//   }
//   useEffect(() => {
//     fetchProductData();
//   }, [productId]);

//   return productData ? (
//     <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100" >
//       {/* product data */}
//       <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row"> 
//         {/* product image */}
//         <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row  "> 
//             <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full   ">
//               {
//                 productData.image.map((item,index)=>(
//                   <img key={index} onClick={()=>setImage(item)} src={item} alt="product" className="w-[24%]  sm:w-full sm:mb-3 flex-shrink cursor-pointer "/>
//                 ))
//               }
//             </div>
//             <div className="w-full sm;w-[80%]"> 
//               <img className="w-full h-auto" src={image} alt="" />
//             </div>
//         </div>

//         {/* product details */}
//         <div className="flex-1">
//           <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
//           <div className="flex items-center gap-1 mt-2">
//             <img src={assets.star_icon}  className='w-3.5' alt="" />
//             <img src={assets.star_icon}  className='w-3.5' alt="" />
//             <img src={assets.star_icon}  className='w-3.5' alt="" />
//             <img src={assets.star_icon}  className='w-3.5' alt="" />
//             <img src={assets.star_dull_icon}  className='w-3.5' alt="" />
//             <p className="pl-2">(122)</p>
//           </div>

//             <p className="mt-5 text-3xl font-medium">{currency}{productData.price}</p>
//             <p className="mt-5 text-gray-500 md:w-4/5">{productData.description}</p>
//             <div className="flex flex-col gap-4 my-8">
//               <p>Select Size</p>
//               <div className="flex gap-2">
//                 {productData.sizes.map((item,index)=>(
//                   <button onClick={()=> setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500' : '' } `} key={index}>{item}</button>
//                 ))}
//               </div>
//               <button onClick={()=>addToCart(productData._id,size)} className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700">ADD TO CART</button>
//               <hr className="mt-8 sm:4/5"/>
//               <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
//                     <p>100% Original product</p>
//                     <p>Cash on delivery is available for this product</p>
//                     <p>Easy return and exchange policy within 7 days</p>
//               </div>
//             </div>
//         </div>



//       </div>
//         {/* description and preview  section */}
//         <div className="mt-20">
//           <div className="flex">
//             <b className="border text-sm px-5 py-3">Description</b>
//             <p className="border text-sm px-5 py-3">Reviews (122)</p>
//           </div>
//           <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500 ">
//                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quis corporis impedit alias quaerat, esse totam vero accusantium dignissimos laborum?</p>
//                 <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae fugit officiis possimus obcaecati veritatis molestiae atque consequuntur sint, harum asperiores?</p>
//           </div>
//         </div>

//         {/* disly related product */}
//         <RelatedProduct category={productData.category} subCategory={productData.subCategory} />
      
//     </div>
//   ) : <div className="opacity-0"></div>
// };

// export default Product;

// import React, { useContext, useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { ShopContext } from "../context/ShopContext";
// import { assets } from "../assets/assets";
// import RelatedProduct from "../components/RelatedProduct";

// const Product = () => {
//   const { productId } = useParams();
//   const { products, currency, delivery_fee, addToCart } = useContext(ShopContext);
//   const [productData, setProductData] = useState(false);
//   const [image, setImage] = useState('');
//   const [selectedSize, setSelectedSize] = useState('');
//   const [selectedSizePrice, setSelectedSizePrice] = useState(null);

//   const fetchProductData = async () => {
//     products.forEach((item) => {
//       if (item._id === productId) {
//         setProductData(item);
//         setImage(item.image[0]);
        
//         // Set default selected size if available
//         if (item.sizes && item.sizes.length > 0) {
//           setSelectedSize(item.sizes[0].size);
//           setSelectedSizePrice(item.sizes[0].price);
//         }
//       }
//     });
//   };

//   // Update selected size price when size changes
//   const handleSizeChange = (size, price) => {
//     setSelectedSize(size);
//     setSelectedSizePrice(price);
//   };

//   useEffect(() => {
//     fetchProductData();
//   }, [productId, products]);

//   return productData ? (
//     <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
//       {/* product data */}
//       <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
//         {/* product image */}
//         <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
//           <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
//             {
//               productData.image.map((item, index) => (
//                 <img
//                   key={index}
//                   onClick={() => setImage(item)}
//                   src={item}
//                   alt="product"
//                   className="w-[24%] sm:w-full sm:mb-3 flex-shrink cursor-pointer"
//                 />
//               ))
//             }
//           </div>
//           <div className="w-full sm:w-[80%]">
//             <img className="w-full h-auto" src={image} alt="" />
//           </div>
//         </div>

//         {/* product details */}
//         <div className="flex-1">
//           <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
//           <div className="flex items-center gap-1 mt-2">
//             <img src={assets.star_icon} className='w-3.5' alt="" />
//             <img src={assets.star_icon} className='w-3.5' alt="" />
//             <img src={assets.star_icon} className='w-3.5' alt="" />
//             <img src={assets.star_icon} className='w-3.5' alt="" />
//             <img src={assets.star_dull_icon} className='w-3.5' alt="" />
//             <p className="pl-2">(122)</p>
//           </div>

//           {/* Display selected size price */}
//           <p className="mt-5 text-3xl font-medium">
//             {currency}{selectedSizePrice !== null ? selectedSizePrice.toFixed(2) : ''}
//           </p>
          
//           <p className="mt-5 text-gray-500 md:w-4/5">{productData.description}</p>
          
//           <div className="flex flex-col gap-4 my-8">
//             <p>Select Size</p>
//             <div className="flex flex-wrap gap-2">
//               {productData.sizes.map((item, index) => (
//                 <button
//                   onClick={() => handleSizeChange(item.size, item.price)}
//                   className={`border py-2 px-4 bg-gray-100 ${item.size === selectedSize ? 'border-orange-500' : ''}`}
//                   key={index}
//                 >
//                   {item.size}
//                 </button>
//               ))}
//             </div>
            
//             <button 
//               onClick={() => addToCart(productData._id, selectedSize, selectedSizePrice)}
//               className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700"
//             >
//               ADD TO CART
//             </button>
            
//             <hr className="mt-8 sm:4/5" />
//             <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
//               <p>100% Original product</p>
//               <p>Cash on delivery is available for this product</p>
//               <p>Easy return and exchange policy within 7 days</p>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       {/* description and preview section */}
//       <div className="mt-20">
//         <div className="flex">
//           <b className="border text-sm px-5 py-3">Description</b>
//           <p className="border text-sm px-5 py-3">Reviews (122)</p>
//         </div>
//         <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
//           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quis corporis impedit alias quaerat, esse totam vero accusantium dignissimos laborum?</p>
//           <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae fugit officiis possimus obcaecati veritatis molestiae atque consequuntur sint, harum asperiores?</p>
//         </div>
//       </div>

//       {/* display related product */}
//       <RelatedProduct category={productData.category} subCategory={productData.subCategory} />
//     </div>
//   ) : <div className="opacity-0"></div>;
// };

// export default Product;


// import React, { useContext, useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { ShopContext } from "../context/ShopContext";
// import { assets } from "../assets/assets";
// import RelatedProduct from "../components/RelatedProduct";

// const Product = () => {
//   const { productId } = useParams();
//   const { products, currency, delivery_fee, addToCart } = useContext(ShopContext);
//   const [productData, setProductData] = useState(false);
//   const [image, setImage] = useState('');
//   const [selectedSize, setSelectedSize] = useState('');
//   const [selectedSizePrice, setSelectedSizePrice] = useState(null);
//   const [selectedSizeMrp, setSelectedSizeMrp] = useState(null);

//   const fetchProductData = async () => {
//     products.forEach((item) => {
//       if (item._id === productId) {
//         setProductData(item);
//         setImage(item.image[0]);
        
//         // Set default selected size if available
//         if (item.sizes && item.sizes.length > 0) {
//           setSelectedSize(item.sizes[0].size);
//           setSelectedSizePrice(item.sizes[0].price);
//           setSelectedSizeMrp(item.sizes[0].mrp);
//         }
//       }
//     });
//   };

//   // Update selected size price and mrp when size changes
//   const handleSizeChange = (size, price, mrp) => {
//     setSelectedSize(size);
//     setSelectedSizePrice(price);
//     setSelectedSizeMrp(mrp);
//   };

//   // Calculate discount percentage
//   const calculateDiscount = () => {
//     if (selectedSizePrice && selectedSizeMrp) {
//       const mrpValue = parseFloat(selectedSizeMrp);
//       const priceValue = selectedSizePrice;
      
//       if (mrpValue > priceValue) {
//         const discount = ((mrpValue - priceValue) / mrpValue) * 100;
//         return Math.round(discount);
//       }
//     }
//     return 0;
//   };

//   useEffect(() => {
//     fetchProductData();
//   }, [productId, products]);

//   return productData ? (
//     <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
//       {/* product data */}
//       <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
//         {/* product image */}
//         <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
//           <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
//             {
//               productData.image.map((item, index) => (
//                 <img
//                   key={index}
//                   onClick={() => setImage(item)}
//                   src={item}
//                   alt="product"
//                   className="w-[24%] sm:w-full sm:mb-3 flex-shrink cursor-pointer"
//                 />
//               ))
//             }
//           </div>
//           <div className="w-full sm:w-[80%]">
//             <img className="w-full h-auto" src={image} alt="" />
//           </div>
//         </div>

//         {/* product details */}
//         <div className="flex-1">
//           <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
//           <div className="flex items-center gap-1 mt-2">
//             <img src={assets.star_icon} className='w-3.5' alt="" />
//             <img src={assets.star_icon} className='w-3.5' alt="" />
//             <img src={assets.star_icon} className='w-3.5' alt="" />
//             <img src={assets.star_icon} className='w-3.5' alt="" />
//             <img src={assets.star_dull_icon} className='w-3.5' alt="" />
//             <p className="pl-2">(122)</p>
//           </div>

//           {/* Display price and MRP with discount */}
//           <div className="mt-5 flex items-center gap-3">
//             <p className="text-3xl font-medium">
//               {currency}{selectedSizePrice !== null ? selectedSizePrice.toFixed(2) : ''}
//             </p>
//             {selectedSizeMrp && selectedSizePrice < parseFloat(selectedSizeMrp) && (
//               <>
//                 <p className="text-gray-500 line-through">{currency}{selectedSizeMrp}</p>
//                 <p className="text-green-600">({calculateDiscount()}% OFF)</p>
//               </>
//             )}
//           </div>
          
//           <p className="mt-5 text-gray-500 md:w-4/5">{productData.description}</p>
          
//           <div className="flex flex-col gap-4 my-8">
//             <p>Select Size</p>
//             <div className="flex flex-wrap gap-2">
//               {productData.sizes.map((item, index) => (
//                 <button
//                   onClick={() => handleSizeChange(item.size, item.price, item.mrp)}
//                   className={`border flex  py-2 px-4 bg-gray-100 ${item.size === selectedSize ? 'border-orange-500' : ''}`}
//                   key={index}
//                 >
//                   {item.size}
//                 </button>
//               ))}
//             </div>
            
//             <button 
//               onClick={() => addToCart(productData._id, selectedSize, selectedSizePrice)}
//               className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700"
//             >
//               ADD TO CART
//             </button>
            
//             <hr className="mt-8 sm:4/5" />
//             <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
//               <p>100% Original product</p>
//               <p>Cash on delivery is available for this product</p>
//               <p>Easy return and exchange policy within 7 days</p>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       {/* description and preview section */}
//       <div className="mt-20">
//         <div className="flex">
//           <b className="border text-sm px-5 py-3">Description</b>
//           <p className="border text-sm px-5 py-3">Reviews (122)</p>
//         </div>
//         <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
//           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quis corporis impedit alias quaerat, esse totam vero accusantium dignissimos laborum?</p>
//           <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae fugit officiis possimus obcaecati veritatis molestiae atque consequuntur sint, harum asperiores?</p>
//         </div>
//       </div>

//       {/* display related product */}
//       <RelatedProduct category={productData.category} subCategory={productData.subCategory} />
//     </div>
//   ) : <div className="opacity-0"></div>;
// };

// export default Product;


import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProduct from "../components/RelatedProduct";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, delivery_fee, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedSizePrice, setSelectedSizePrice] = useState(null);
  const [selectedSizeMrp, setSelectedSizeMrp] = useState(null);

  const fetchProductData = async () => {
    products.forEach((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        
        // Set default selected size if available
        if (item.sizes && item.sizes.length > 0) {
          setSelectedSize(item.sizes[0].size);
          setSelectedSizePrice(item.sizes[0].price);
          setSelectedSizeMrp(item.sizes[0].mrp);
        }
      }
    });
  };

  // Update selected size price and mrp when size changes
  const handleSizeChange = (size, price, mrp) => {
    setSelectedSize(size);
    setSelectedSizePrice(price);
    setSelectedSizeMrp(mrp);
  };

  // Calculate discount percentage
  const calculateDiscount = () => {
    if (selectedSizePrice && selectedSizeMrp) {
      const mrpValue = parseFloat(selectedSizeMrp);
      const priceValue = selectedSizePrice;
      
      if (mrpValue > priceValue) {
        const discount = ((mrpValue - priceValue) / mrpValue) * 100;
        return Math.round(discount);
      }
    }
    return 0;
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* product data */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* product image */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {
              productData.image.map((item, index) => (
                <img
                  key={index}
                  onClick={() => setImage(item)}
                  src={item}
                  alt="product"
                  className="w-[24%] sm:w-full sm:mb-3 flex-shrink cursor-pointer"
                />
              ))
            }
          </div>
          <div className="w-full sm:w-[80%]">
            <img className="w-full h-auto" src={image} alt="" />
          </div>
        </div>

        {/* product details */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} className='w-3.5' alt="" />
            <img src={assets.star_icon} className='w-3.5' alt="" />
            <img src={assets.star_icon} className='w-3.5' alt="" />
            <img src={assets.star_icon} className='w-3.5' alt="" />
            <img src={assets.star_dull_icon} className='w-3.5' alt="" />
            <p className="pl-2">(122)</p>
          </div>

          {/* Modified price and MRP display - MRP shown below */}
          <div className="mt-5">
            <div className="flex items-center gap-3">
              <p className="text-3xl font-medium">
                {currency}{selectedSizePrice !== null ? selectedSizePrice.toFixed(2) : ''}
              </p>
              {selectedSizeMrp && selectedSizePrice < parseFloat(selectedSizeMrp) && (
                <p className="text-green-600">({calculateDiscount()}% OFF)</p>
              )}
            </div>
            {/* MRP displayed below */}
            {selectedSizeMrp && selectedSizePrice < parseFloat(selectedSizeMrp) && (
              <p className="text-gray-500 line-through text-sm mt-1">
                MRP: {currency}{selectedSizeMrp}
              </p>
            )}
          </div>
          
          <p className="mt-5 text-gray-500 md:w-4/5">{productData.description}</p>
          
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex flex-wrap gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => handleSizeChange(item.size, item.price, item.mrp)}
                  className={`border flex  py-2 px-4 bg-gray-100 ${item.size === selectedSize ? 'border-orange-500' : ''}`}
                  key={index}
                >
                  {item.size}
                </button>
              ))}
            </div>
            
            <button 
              onClick={() => addToCart(productData._id, selectedSize, selectedSizePrice)}
              className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700"
            >
              ADD TO CART
            </button>
            
            <hr className="mt-8 sm:4/5" />
            <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
              <p>100% Original product</p>
              <p>Cash on delivery is available for this product</p>
              <p>Easy return and exchange policy within 7 days</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* description and preview section */}
      <div className="mt-20">
        <div className="flex">
          <b className="border text-sm px-5 py-3">Description</b>
          <p className="border text-sm px-5 py-3">Reviews (122)</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quis corporis impedit alias quaerat, esse totam vero accusantium dignissimos laborum?</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae fugit officiis possimus obcaecati veritatis molestiae atque consequuntur sint, harum asperiores?</p>
        </div>
      </div>

      {/* display related product */}
      <RelatedProduct category={productData.category} subCategory={productData.subCategory} />
    </div>
  ) : <div className="opacity-0"></div>;
};

export default Product;
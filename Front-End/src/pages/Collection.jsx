// import React, { useContext, useEffect, useState } from 'react';
// import Footer from '../components/Footer';
// import { ShopContext } from '../context/ShopContext';
// import { assets } from '../assets/assets';
// import Title from '../components/Title';
// import ProductItem from '../components/ProductItem';

// const Collection = () => {
//   const { products } = useContext(ShopContext);
//   const [showFilter, setShowFilter] = useState(false);
//   const [filterProducts, setFilterProducts] = useState([]);
//   const [category,setCategory] = useState([]);
//   const [subCategory,setSubCategory] = useState([]);
//   const [sortType, setSortType] = useState('relavent');


//   const toggleCategory  = (e) =>{
//     if(category.includes(e.target.value)){
//       setCategory(category.filter(item=>item!==e.target.value))
//     }
//     else{
//       setCategory(prev => [...prev, e.target.value]);
//     }
//   }

//   const toggleSubCategory = (e) =>{
//     if(subCategory.includes(e.target.value)){
//       setSubCategory(prev => prev.filter(item=>item!==e.target.value))
//     } 
//     else{
//       setSubCategory(prev => [...prev, e.target.value]);
//     } 
//   }

//   // useEffect(()=>{
//   //   setFilterProducts(products);
//   // },[])

//   const applyFilter = () => {
//     let productCopy = products.slice();
//     if(category.length > 0){
//       productCopy = productCopy.filter(item => category.includes(item.category));
//     }
//     if(subCategory.length > 0){
//       productCopy = productCopy.filter(item => subCategory.includes(item.subCategory));   
//     }
//     setFilterProducts(productCopy);
//   }  

//   const sortProduct = () => {
//     let fpCopy = filterProducts.slice();
//     switch(sortType){
//       case 'low-high':
//         setFilterProducts(fpCopy.sort((a,b)=>a.price - b.price));
//         break;
//       case 'high-low':
//         setFilterProducts(fpCopy.sort((a,b)=>b.price - a.price));
//         break;
//       default:
//          applyFilter();
//          break;
//     }
//   } 

//   useEffect(()=>{
//     applyFilter();
//   },[category,subCategory,products]);

//   useEffect(()=>{ 
//     sortProduct();
//   },[sortType]);

//   return (
//     <div>
//       <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">

//         {/* Left Side - Filter Option */}
//         <div className="min-w-[240px]">
//           <p onClick={() => setShowFilter(!showFilter)} className="my-2 text-xl flex items-center cursor-pointer gap-2">
//             FILTERS
//             <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
//           </p>

//           {/* Category Filter */}
//           <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
//             <p className="mb-3 text-sm font-medium">CATEGORIES</p>
//             <div className="flex flex-col text-sm gap-2 font-light text-gray-700">
//               <p className="flex gap-2">
//                 <input type="checkbox" className="w-3" value={"Blended spices"}  onChange={toggleCategory}/> Blended spices
//               </p>
//               <p className="flex gap-2">
//                 <input type="checkbox" className="w-3" value={"Pure spices"} onChange={toggleCategory} /> Pure spices
//               </p>
//               <p className="flex gap-2">
//                 <input type="checkbox" className="w-3" value={"Premix Products"} onChange={toggleCategory} /> Premix Products
//               </p>
//               <p className="flex gap-2">
//                 <input type="checkbox" className="w-3" value={"Herb Mix Products"} onChange={toggleCategory} />Herb Mix Products 
//               </p>
//               <p className="flex gap-2">
//                 <input type="checkbox" className="w-3" value={"Sesonings"} onChange={toggleCategory} /> Sesonings
//               </p>
//               <p className="flex gap-2">
//                 <input type="checkbox" className="w-3" value={"Dehydrated Vegetables"} onChange={toggleCategory} />Dehydrated Vegetables 
//               </p>

//             </div>
//           </div>

//           {/* Type Filter */}
//           <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
//             <p className="mb-3 text-sm font-medium">TYPE</p>
//             <div className="flex flex-col text-sm gap-2 font-light text-gray-700">
//               <p className="flex gap-2">
//                 <input type="checkbox" className="w-3" value={"Powder"} onChange={toggleSubCategory} /> Powder
//               </p>

//               <p className="flex gap-2">
//                 <input type="checkbox" className="w-3" value={"Pest"} onChange={toggleSubCategory} /> Pest
//               </p>
//               <p className="flex gap-2">
//                 <input type="checkbox" className="w-3" value={"Masala"} onChange={toggleSubCategory} /> Masala 
//               </p>           
//             </div>
//           </div>
//         </div>

//         {/* Right Side - Product Collection */}
//         <div className="flex-1 ">
//           <div className="flex justify-between items-center text-base sm:text-2xl mb-4">
//             <Title text1={'ALL'} text2={'COLLECTIONS'} />

//             {/* Product Sort */}
//             <select onChange={(e)=>setSortType(e.target.value)} className="border-2 border-gray-300 text-sm p-2">
//               <option value="relavent">Sort by: Relevant</option>
//               <option value="low-high">Sort by: Low-High</option>
//               <option value="high-low">Sort by: High-Low</option>
//             </select>
//           </div>

//           {/* Map Product */}
//           <div className='grid gird-cols-2 md:gird-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
//               {
//                 filterProducts.map((item, index) => (
//                   <ProductItem key={index} name={item.name} id={item._id} image={item.image}  />
//                 ))
//               }
//           </div>

//         </div>

//       </div>

//     </div>
//   );
// };

// export default Collection;





// import React, { useContext, useEffect, useState } from 'react';
// import Footer from '../components/Footer';
// import { ShopContext } from '../context/ShopContext';
// import { assets } from '../assets/assets';
// import Title from '../components/Title';
// import ProductItem from '../components/ProductItem';

// const Collection = () => {
//   const { products } = useContext(ShopContext);
//   const [showFilter, setShowFilter] = useState(false);
//   const [filterProducts, setFilterProducts] = useState([]);
//   const [category, setCategory] = useState([]);
//   const [subCategory, setSubCategory] = useState([]);
//   const [sortType, setSortType] = useState('relavent');


//   const toggleCategory = (e) => {
//     if(category.includes(e.target.value)){
//       setCategory(category.filter(item => item !== e.target.value))
//     }
//     else{
//       setCategory(prev => [...prev, e.target.value]);
//     }
//   }

//   const toggleSubCategory = (e) => {
//     if(subCategory.includes(e.target.value)){
//       setSubCategory(prev => prev.filter(item => item !== e.target.value))
//     } 
//     else{
//       setSubCategory(prev => [...prev, e.target.value]);
//     } 
//   }

//   const applyFilter = () => {
//     let productCopy = products.slice();
//     if(category.length > 0){
//       productCopy = productCopy.filter(item => category.includes(item.category));
//     }
//     if(subCategory.length > 0){
//       productCopy = productCopy.filter(item => subCategory.includes(item.subCategory));   
//     }
//     setFilterProducts(productCopy);
//   }  

//   const sortProduct = () => {
//     let fpCopy = filterProducts.slice();
//     switch(sortType){
//       case 'low-high':
//         // Sort by the price of the first size option
//         setFilterProducts(fpCopy.sort((a, b) => {
//           const priceA = a.sizes && a.sizes.length > 0 ? a.sizes[0].price : 0;
//           const priceB = b.sizes && b.sizes.length > 0 ? b.sizes[0].price : 0;
//           return priceA - priceB;
//         }));
//         break;
//       case 'high-low':
//         // Sort by the price of the first size option in descending order
//         setFilterProducts(fpCopy.sort((a, b) => {
//           const priceA = a.sizes && a.sizes.length > 0 ? a.sizes[0].price : 0;
//           const priceB = b.sizes && b.sizes.length > 0 ? b.sizes[0].price : 0;
//           return priceB - priceA;
//         }));
//         break;
//       default:
//          applyFilter();
//          break;
//     }
//   } 

//   useEffect(() => {
//     applyFilter();
//   }, [category, subCategory, products]);

//   useEffect(() => { 
//     sortProduct();
//   }, [sortType]);

//   return (
//     <div>
//       <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">

//         {/* Left Side - Filter Option */}
//         <div className="min-w-[240px]">
//           <p onClick={() => setShowFilter(!showFilter)} className="my-2 text-xl flex items-center cursor-pointer gap-2">
//             FILTERS
//             <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
//           </p>

//           {/* Category Filter */}
//           <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
//             <p className="mb-3 text-sm font-medium">CATEGORIES</p>
//             <div className="flex flex-col text-sm gap-2 font-light text-gray-700">
//               <p className="flex gap-2">
//                 <input type="checkbox" className="w-3" value={"Blended spices"} onChange={toggleCategory}/> Blended spices
//               </p>
//               <p className="flex gap-2">
//                 <input type="checkbox" className="w-3" value={"Pure spices"} onChange={toggleCategory} /> Pure spices
//               </p>
//               <p className="flex gap-2">
//                 <input type="checkbox" className="w-3" value={"Premix Products"} onChange={toggleCategory} /> Premix Products
//               </p>
//               <p className="flex gap-2">
//                 <input type="checkbox" className="w-3" value={"Herb Mix Products"} onChange={toggleCategory} />Herb Mix Products 
//               </p>
//               <p className="flex gap-2">
//                 <input type="checkbox" className="w-3" value={"Sesonings"} onChange={toggleCategory} /> Sesonings
//               </p>
//               <p className="flex gap-2">
//                 <input type="checkbox" className="w-3" value={"Dehydrated Vegetables"} onChange={toggleCategory} />Dehydrated Vegetables 
//               </p>
//             </div>
//           </div>

//           {/* Type Filter */}
//           <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
//             <p className="mb-3 text-sm font-medium">TYPE</p>
//             <div className="flex flex-col text-sm gap-2 font-light text-gray-700">
//               <p className="flex gap-2">
//                 <input type="checkbox" className="w-3" value={"Powder"} onChange={toggleSubCategory} /> Powder
//               </p>
//               <p className="flex gap-2">
//                 <input type="checkbox" className="w-3" value={"Pest"} onChange={toggleSubCategory} /> Pest
//               </p>
//               <p className="flex gap-2">
//                 <input type="checkbox" className="w-3" value={"Masala"} onChange={toggleSubCategory} /> Masala 
//               </p>           
//             </div>
//           </div>
//         </div>

//         {/* Right Side - Product Collection */}
//         <div className="flex-1">
//           <div className="flex justify-between items-center text-base sm:text-2xl mb-4">
//             <Title text1={'ALL'} text2={'COLLECTIONS'} />

//             {/* Product Sort */}
//             <select onChange={(e) => setSortType(e.target.value)} className="border-2 border-gray-300 text-sm p-2">
//               <option value="relavent">Sort by: Relevant</option>
//               <option value="low-high">Sort by: Low-High</option>
//               <option value="high-low">Sort by: High-Low</option>
//             </select>
//           </div>

//           {/* Map Product */}
//           <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
//             {filterProducts.map((item) => (
//               <ProductItem 
//                 key={item._id} 
//                 id={item._id} 
//                 name={item.name} 
//                 image={item.image}
//                 sizes={item.sizes}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Collection;


// import React, { useContext, useEffect, useState } from 'react';
// import Footer from '../components/Footer';
// import { ShopContext } from '../context/ShopContext';
// import { assets } from '../assets/assets';
// import Title from '../components/Title';
// import ProductItem from '../components/ProductItem';

// const Collection = () => {
//   const { products } = useContext(ShopContext);
//   const [showFilter, setShowFilter] = useState(false);
//   const [filterProducts, setFilterProducts] = useState([]);
//   const [category, setCategory] = useState([]);
//   const [subCategory, setSubCategory] = useState([]);
//   const [sortType, setSortType] = useState('relavent');

//   const toggleCategory = (e) => {
//     if(category.includes(e.target.value)){
//       setCategory(category.filter(item => item !== e.target.value))
//     }
//     else{
//       setCategory(prev => [...prev, e.target.value]);
//     }
//   }

//   const toggleSubCategory = (e) => {
//     if(subCategory.includes(e.target.value)){
//       setSubCategory(prev => prev.filter(item => item !== e.target.value))
//     } 
//     else{
//       setSubCategory(prev => [...prev, e.target.value]);
//     } 
//   }

//   const applyFilter = () => {
//     let productCopy = products.slice();
//     if(category.length > 0){
//       productCopy = productCopy.filter(item => category.includes(item.category));
//     }
//     if(subCategory.length > 0){
//       productCopy = productCopy.filter(item => subCategory.includes(item.subCategory));   
//     }
//     setFilterProducts(productCopy);
//   }  

//   const sortProduct = () => {
//     let fpCopy = filterProducts.slice();
//     switch(sortType){
//       case 'low-high':
//         // Sort by the price of the first size option
//         setFilterProducts(fpCopy.sort((a, b) => {
//           const priceA = a.sizes && a.sizes.length > 0 ? a.sizes[0].price : 0;
//           const priceB = b.sizes && b.sizes.length > 0 ? b.sizes[0].price : 0;
//           return priceA - priceB;
//         }));
//         break;
//       case 'high-low':
//         // Sort by the price of the first size option in descending order
//         setFilterProducts(fpCopy.sort((a, b) => {
//           const priceA = a.sizes && a.sizes.length > 0 ? a.sizes[0].price : 0;
//           const priceB = b.sizes && b.sizes.length > 0 ? b.sizes[0].price : 0;
//           return priceB - priceA;
//         }));
//         break;
//       default:
//          applyFilter();
//          break;
//     }
//   } 

//   useEffect(() => {
//     applyFilter();
//   }, [category, subCategory, products]);

//   useEffect(() => { 
//     sortProduct();
//   }, [sortType]);

//   return (
//     <div className="container mx-auto px-4 pb-16">
//       <div className="flex flex-col sm:flex-row gap-5 lg:gap-10 pt-6 md:pt-10 border-t">

//         {/* Left Side - Filter Option */}
//         <div className="w-full sm:w-64">
//           <button 
//             onClick={() => setShowFilter(!showFilter)} 
//             className="w-full sm:w-auto flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors py-3 px-4 rounded-lg my-3 text-lg font-medium sm:bg-transparent sm:p-0 sm:justify-start sm:hover:bg-transparent"
//           >
//             <span className="flex items-center gap-2">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                 <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
//               </svg>
//               FILTERS
//             </span>
//             <svg 
//               className={`h-5 w-5 transform transition-transform duration-200 sm:hidden ${showFilter ? 'rotate-180' : ''}`} 
//               xmlns="http://www.w3.org/2000/svg" 
//               viewBox="0 0 20 20" 
//               fill="currentColor"
//             >
//               <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
//             </svg>
//           </button>

//           {/* Category Filter */}
//           <div className={`${showFilter ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 sm:max-h-screen sm:opacity-100'} overflow-hidden transition-all duration-300 ease-in-out`}>
//             <div className="border border-gray-200 rounded-lg p-4 mt-4 bg-white shadow-sm">
//               <p className="mb-4 text-sm font-semibold uppercase tracking-wide">Categories</p>
//               <div className="flex flex-col text-sm gap-3 font-light text-gray-700">
//                 {[
//                   "Blended spices", 
//                   "Pure spices", 
//                   "Premix Products", 
//                   "Herb Mix Products", 
//                   "Sesonings", 
//                   "Dehydrated Vegetables"
//                 ].map((item) => (
//                   <label key={item} className="flex items-center gap-3 hover:text-black cursor-pointer">
//                     <input 
//                       type="checkbox" 
//                       className="w-4 h-4 accent-amber-600" 
//                       value={item} 
//                       checked={category.includes(item)}
//                       onChange={toggleCategory}
//                     /> 
//                     <span>{item}</span>
//                   </label>
//                 ))}
//               </div>
//             </div>

//             {/* Type Filter */}
//             <div className="border border-gray-200 rounded-lg p-4 mt-4 bg-white shadow-sm">
//               <p className="mb-4 text-sm font-semibold uppercase tracking-wide">Type</p>
//               <div className="flex flex-col text-sm gap-3 font-light text-gray-700">
//                 {["Powder", "Pest", "Masala"].map((item) => (
//                   <label key={item} className="flex items-center gap-3 hover:text-black cursor-pointer">
//                     <input 
//                       type="checkbox" 
//                       className="w-4 h-4 accent-amber-600" 
//                       value={item}
//                       checked={subCategory.includes(item)}
//                       onChange={toggleSubCategory}
//                     /> 
//                     <span>{item}</span>
//                   </label>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Right Side - Product Collection */}
//         <div className="flex-1">
//           <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
//             <Title text1={'ALL'} text2={'COLLECTIONS'} />

//             {/* Product Sort */}
//             <div className="w-full sm:w-auto">
//               <select 
//                 onChange={(e) => setSortType(e.target.value)} 
//                 className="w-full sm:w-auto border-2 border-gray-200 rounded-lg text-sm p-2.5 pr-8 bg-white hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
//               >
//                 <option value="relavent">Sort by: Relevant</option>
//                 <option value="low-high">Sort by: Price Low-High</option>
//                 <option value="high-low">Sort by: Price High-Low</option>
//               </select>
//             </div>
//           </div>

//           {/* Products Display */}
//           {filterProducts.length === 0 ? (
//             <div className="bg-gray-50 rounded-lg p-8 text-center">
//               <p className="text-lg text-gray-500">No products match your filters</p>
//               <button 
//                 onClick={() => {
//                   setCategory([]);
//                   setSubCategory([]);
//                 }} 
//                 className="mt-4 px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
//               >
//                 Clear Filters
//               </button>
//             </div>
//           ) : (
//             <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
//               {filterProducts.map((item) => (
//                 <ProductItem 
//                   key={item._id} 
//                   id={item._id} 
//                   name={item.name} 
//                   image={item.image}
//                   sizes={item.sizes}
//                 />
//               ))}
//             </div>
//           )}

//           {/* Products Count */}
//           <div className="mt-6 text-sm text-gray-500">
//             Showing {filterProducts.length} {filterProducts.length === 1 ? 'product' : 'products'}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Collection;














// import React, { useContext, useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import { ShopContext } from '../context/ShopContext';
// import { assets } from '../assets/assets';
// import Title from '../components/Title';
// import ProductItem from '../components/ProductItem';

// const Collection = () => {
//   const location = useLocation();
//   const { products } = useContext(ShopContext);
//   const [showFilter, setShowFilter] = useState(false);
//   const [filterProducts, setFilterProducts] = useState([]);
//   const [category, setCategory] = useState([]);
//   const [subCategory, setSubCategory] = useState([]);
//   const [sortType, setSortType] = useState('relavent');
//   const [showSearchField, setShowSearchField] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');

//   // Check for search parameter in URL
//   useEffect(() => {
//     const queryParams = new URLSearchParams(location.search);
//     if (queryParams.get('search') === 'true') {
//       setShowSearchField(true);
//     }
//   }, [location]);

//   const toggleCategory = (e) => {
//     if (category.includes(e.target.value)) {
//       setCategory(category.filter(item => item !== e.target.value));
//     }
//     else {
//       setCategory(prev => [...prev, e.target.value]);
//     }
//   };

//   const toggleSubCategory = (e) => {
//     if (subCategory.includes(e.target.value)) {
//       setSubCategory(prev => prev.filter(item => item !== e.target.value));
//     }
//     else {
//       setSubCategory(prev => [...prev, e.target.value]);
//     }
//   };

//   // Function to handle search
//   const handleSearch = (e) => {
//     setSearchQuery(e.target.value);

//     // Apply search filter
//     if (e.target.value.trim()) {
//       const searchResults = products.filter(product =>
//         product.name.toLowerCase().includes(e.target.value.toLowerCase())
//       );
//       setFilterProducts(searchResults);
//     } else {
//       applyFilter(); // Reset to normal filtered view
//     }
//   };

//   // Clear search
//   const clearSearch = () => {
//     setSearchQuery('');
//     applyFilter();
//   };

//   const applyFilter = () => {
//     let productCopy = products.slice();

//     // Apply category filter
//     if (category.length > 0) {
//       productCopy = productCopy.filter(item => category.includes(item.category));
//     }

//     // Apply subcategory filter
//     if (subCategory.length > 0) {
//       productCopy = productCopy.filter(item => subCategory.includes(item.subCategory));
//     }

//     // Apply search filter if exists
//     if (searchQuery.trim()) {
//       productCopy = productCopy.filter(product =>
//         product.name.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//     }

//     setFilterProducts(productCopy);
//   };

//   const sortProduct = () => {
//     let fpCopy = filterProducts.slice();
//     switch (sortType) {
//       case 'low-high':
//         // Sort by the price of the first size option
//         setFilterProducts(fpCopy.sort((a, b) => {
//           const priceA = a.sizes && a.sizes.length > 0 ? a.sizes[0].price : 0;
//           const priceB = b.sizes && b.sizes.length > 0 ? b.sizes[0].price : 0;
//           return priceA - priceB;
//         }));
//         break;
//       case 'high-low':
//         // Sort by the price of the first size option in descending order
//         setFilterProducts(fpCopy.sort((a, b) => {
//           const priceA = a.sizes && a.sizes.length > 0 ? a.sizes[0].price : 0;
//           const priceB = b.sizes && b.sizes.length > 0 ? b.sizes[0].price : 0;
//           return priceB - priceA;
//         }));
//         break;
//       default:
//         applyFilter();
//         break;
//     }
//   };

//   // Apply filters when category, subcategory, or products change
//   useEffect(() => {
//     applyFilter();
//   }, [category, subCategory, products, searchQuery]);

//   // Apply sorting when sort type changes
//   useEffect(() => {
//     sortProduct();
//   }, [sortType]);

//   // Initialize products on mount
//   useEffect(() => {
//     if (products.length > 0) {
//       setFilterProducts(products);
//     }
//   }, [products]);

//   return (
//     <div className="container mx-auto px-4 pb-16">


//       {/* Search Field */}
//       {showSearchField && (
//         <div className="w-full flex items-center justify-center  mb-5 pt-3">
//           <div className="relative w-full max-w-full sm:max-w-xl lg:max-w-2xl">
//             <div className="flex items-center">
//               {/* Search Input */}
//               <input
//                 type="text"
//                 placeholder="Search products..."
//                 value={searchQuery}
//                 onChange={handleSearch}
//                 className="w-full border border-gray-300 bg-white rounded-xl py-2.5 px-5 pr-12 shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200"
//                 autoFocus
//               />

//               {/* Clear Search Button (inside input) */}
//               {searchQuery && (
//                 <button
//                   className="absolute right-12 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-amber-500 transition-colors"
//                   onClick={clearSearch}
//                   aria-label="Clear search"
//                 >
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                     <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
//                   </svg>
//                 </button>
//               )}

//               {/* Close Search Panel Button (positioned to the right) */}
//               <button
//                 className="ml-2 p-2 text-gray-400 hover:text-red-500 transition-colors"
//                 onClick={() => setShowSearchField(false)}
//                 aria-label="Close search panel"
//               >
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>
//       )}



//       <div className="flex flex-col sm:flex-row gap-5 lg:gap-10 pt-6 md:pt-10 border-t">

//         {/* Left Side - Filter Option */}
//         <div className="w-full sm:w-64">
//           <button
//             onClick={() => setShowFilter(!showFilter)}
//             className="w-full sm:w-auto flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors py-3 px-4 rounded-lg my-3 text-lg font-medium sm:bg-transparent sm:p-0 sm:justify-start sm:hover:bg-transparent"
//           >
//             <span className="flex items-center gap-2">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                 <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
//               </svg>
//               FILTERS
//             </span>
//             <svg
//               className={`h-5 w-5 transform transition-transform duration-200 sm:hidden ${showFilter ? 'rotate-180' : ''}`}
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 20 20"
//               fill="currentColor"
//             >
//               <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
//             </svg>
//           </button>

//           {/* Category Filter */}
//           <div className={`${showFilter ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 sm:max-h-screen sm:opacity-100'} overflow-hidden transition-all duration-300 ease-in-out`}>
//             <div className="border border-gray-200 rounded-lg p-4 mt-4 bg-white shadow-sm">
//               <p className="mb-4 text-sm font-semibold uppercase tracking-wide">Categories</p>
//               <div className="flex flex-col text-sm gap-3 font-light text-gray-700">
//                 {[
//                   "Blended spices",
//                   "Pure spices",
//                   "Premix Products",
//                   "Herb Mix Products",
//                   "Sesonings",
//                   "Dehydrated Vegetables"
//                 ].map((item) => (
//                   <label key={item} className="flex items-center gap-3 hover:text-black cursor-pointer">
//                     <input
//                       type="checkbox"
//                       className="w-4 h-4 accent-amber-600"
//                       value={item}
//                       checked={category.includes(item)}
//                       onChange={toggleCategory}
//                     />
//                     <span>{item}</span>
//                   </label>
//                 ))}
//               </div>
//             </div>

//             {/* Type Filter */}
//             <div className="border border-gray-200 rounded-lg p-4 mt-4 bg-white shadow-sm">
//               <p className="mb-4 text-sm font-semibold uppercase tracking-wide">Type</p>
//               <div className="flex flex-col text-sm gap-3 font-light text-gray-700">
//                 {["Powder", "Pest", "Masala"].map((item) => (
//                   <label key={item} className="flex items-center gap-3 hover:text-black cursor-pointer">
//                     <input
//                       type="checkbox"
//                       className="w-4 h-4 accent-amber-600"
//                       value={item}
//                       checked={subCategory.includes(item)}
//                       onChange={toggleSubCategory}
//                     />
//                     <span>{item}</span>
//                   </label>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Right Side - Product Collection */}
//         <div className="flex-1">
//           <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
//             <Title text1={'ALL'} text2={'COLLECTIONS'} />

//             {/* Product Sort */}
//             <div className="w-full sm:w-auto">
//               <select
//                 onChange={(e) => setSortType(e.target.value)}
//                 className="w-full sm:w-auto border-2 border-gray-200 rounded-lg text-sm p-2.5 pr-8 bg-white hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
//               >
//                 <option value="relavent">Sort by: Relevant</option>
//                 <option value="low-high">Sort by: Price Low-High</option>
//                 <option value="high-low">Sort by: Price High-Low</option>
//               </select>
//             </div>
//           </div>

//           {/* Products Display */}
//           {filterProducts.length === 0 ? (
//             <div className="bg-gray-50 rounded-lg p-8 text-center">
//               <p className="text-lg text-gray-500">
//                 {searchQuery ? `No products match "${searchQuery}"` : "No products match your filters"}
//               </p>
//               <button
//                 onClick={() => {
//                   setCategory([]);
//                   setSubCategory([]);
//                   setSearchQuery('');
//                 }}
//                 className="mt-4 px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
//               >
//                 Clear All Filters
//               </button>
//             </div>
//           ) : (
//             <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
//               {filterProducts.map((item) => (
//                 <ProductItem
//                   key={item._id}
//                   id={item._id}
//                   name={item.name}
//                   image={item.image}
//                   sizes={item.sizes}
//                 />
//               ))}
//             </div>
//           )}

//           {/* Products Count */}
//           <div className="mt-6 text-sm text-gray-500">
//             Showing {filterProducts.length} {filterProducts.length === 1 ? 'product' : 'products'}
//             {searchQuery && <span> for "{searchQuery}"</span>}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Collection;



// import React, { useContext, useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import { ShopContext } from '../context/ShopContext';
// import { assets } from '../assets/assets';
// import Title from '../components/Title';
// import ProductItem from '../components/ProductItem';

// const Collection = () => {
//   const location = useLocation();
//   const { products } = useContext(ShopContext);
//   const [showFilter, setShowFilter] = useState(false);
//   const [filterProducts, setFilterProducts] = useState([]);
//   const [category, setCategory] = useState([]);
//   const [subCategory, setSubCategory] = useState([]);
//   const [sortType, setSortType] = useState('relavent');
//   const [showSearchField, setShowSearchField] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');

//   // Check for search parameter in URL
//   useEffect(() => {
//     const queryParams = new URLSearchParams(location.search);
//     if (queryParams.get('search') === 'true') {
//       setShowSearchField(true);
//     }
//   }, [location]);

//   const toggleCategory = (e) => {
//     if (category.includes(e.target.value)) {
//       setCategory(category.filter(item => item !== e.target.value));
//     }
//     else {
//       setCategory(prev => [...prev, e.target.value]);
//     }
//   };

//   const toggleSubCategory = (e) => {
//     if (subCategory.includes(e.target.value)) {
//       setSubCategory(prev => prev.filter(item => item !== e.target.value));
//     }
//     else {
//       setSubCategory(prev => [...prev, e.target.value]);
//     }
//   };

//   // Function to handle search
//   const handleSearch = (e) => {
//     setSearchQuery(e.target.value);

//     // Apply search filter
//     if (e.target.value.trim()) {
//       const searchResults = products.filter(product =>
//         product.name.toLowerCase().includes(e.target.value.toLowerCase())
//       );
//       setFilterProducts(searchResults);
//     } else {
//       applyFilter(); // Reset to normal filtered view
//     }
//   };

//   // Clear search
//   const clearSearch = () => {
//     setSearchQuery('');
//     applyFilter();
//   };

//   const applyFilter = () => {
//     let productCopy = products.slice();

//     // Apply category filter
//     if (category.length > 0) {
//       productCopy = productCopy.filter(item => category.includes(item.category));
//     }

//     // Apply subcategory filter
//     if (subCategory.length > 0) {
//       productCopy = productCopy.filter(item => subCategory.includes(item.subCategory));
//     }

//     // Apply search filter if exists
//     if (searchQuery.trim()) {
//       productCopy = productCopy.filter(product =>
//         product.name.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//     }

//     setFilterProducts(productCopy);
//   };

//   const sortProduct = () => {
//     let fpCopy = filterProducts.slice();
//     switch (sortType) {
//       case 'low-high':
//         // Sort by the price of the first size option
//         setFilterProducts(fpCopy.sort((a, b) => {
//           const priceA = a.sizes && a.sizes.length > 0 ? a.sizes[0].price : 0;
//           const priceB = b.sizes && b.sizes.length > 0 ? b.sizes[0].price : 0;
//           return priceA - priceB;
//         }));
//         break;
//       case 'high-low':
//         // Sort by the price of the first size option in descending order
//         setFilterProducts(fpCopy.sort((a, b) => {
//           const priceA = a.sizes && a.sizes.length > 0 ? a.sizes[0].price : 0;
//           const priceB = b.sizes && b.sizes.length > 0 ? b.sizes[0].price : 0;
//           return priceB - priceA;
//         }));
//         break;
//       default:
//         applyFilter();
//         break;
//     }
//   };

//   // Apply filters when category, subcategory, or products change
//   useEffect(() => {
//     applyFilter();
//   }, [category, subCategory, products, searchQuery]);

//   // Apply sorting when sort type changes
//   useEffect(() => {
//     sortProduct();
//   }, [sortType]);

//   // Initialize products on mount
//   useEffect(() => {
//     if (products.length > 0) {
//       setFilterProducts(products);
//     }
//   }, [products]);

//   return (
//     <div className="container mx-auto px-4 pb-16">

//       {/* Search Field */}
//       {showSearchField && (
//         <div className="w-full flex items-center justify-center mb-5 pt-3">
//           <div className="relative w-full max-w-full sm:max-w-xl lg:max-w-2xl">
//             <div className="flex items-center">
//               {/* Search Input */}
//               <input
//                 type="text"
//                 placeholder="Search products..."
//                 value={searchQuery}
//                 onChange={handleSearch}
//                 className="w-full border border-gray-300 bg-white rounded-xl py-2.5 px-5 pr-12 shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200"
//                 autoFocus
//               />

//               {/* Clear Search Button (inside input) */}
//               {searchQuery && (
//                 <button
//                   className="absolute right-12 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-amber-500 transition-colors"
//                   onClick={clearSearch}
//                   aria-label="Clear search"
//                 >
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                     <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
//                   </svg>
//                 </button>
//               )}

//               {/* Close Search Panel Button (positioned to the right) */}
//               <button
//                 className="ml-2 p-2 text-gray-400 hover:text-red-500 transition-colors"
//                 onClick={() => setShowSearchField(false)}
//                 aria-label="Close search panel"
//               >
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       <div className="flex flex-col sm:flex-row gap-5 lg:gap-10 pt-6 md:pt-10 border-t">

//         {/* Left Side - Filter Option */}
//         <div className="w-full sm:w-64">
//           <button
//             onClick={() => setShowFilter(!showFilter)}
//             className="w-full sm:w-auto flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors py-3 px-4 rounded-lg my-3 text-lg font-medium sm:bg-transparent sm:p-0 sm:justify-start sm:hover:bg-transparent"
//           >
//             <span className="flex items-center gap-2">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                 <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
//               </svg>
//               FILTERS
//             </span>
//             <svg
//               className={`h-5 w-5 transform transition-transform duration-200 sm:hidden ${showFilter ? 'rotate-180' : ''}`}
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 20 20"
//               fill="currentColor"
//             >
//               <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
//             </svg>
//           </button>

//           {/* Category Filter */}
//           <div className={`${showFilter ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 sm:max-h-screen sm:opacity-100'} overflow-hidden transition-all duration-300 ease-in-out`}>
//             <div className="border border-gray-200 rounded-lg p-4 mt-4 bg-white shadow-sm">
//               <p className="mb-4 text-sm font-semibold uppercase tracking-wide">Categories</p>
//               <div className="flex flex-col text-sm gap-3 font-light text-gray-700">
//                 {[
//                   "Blended spices",
//                   "Pure spices",
//                   "Premix Products",
//                   "Herb Mix Products",
//                   "Sesonings",
//                   "Dehydrated Vegetables"
//                 ].map((item) => (
//                   <label key={item} className="flex items-center gap-3 hover:text-black cursor-pointer">
//                     <input
//                       type="checkbox"
//                       className="w-4 h-4 accent-amber-600"
//                       value={item}
//                       checked={category.includes(item)}
//                       onChange={toggleCategory}
//                     />
//                     <span>{item}</span>
//                   </label>
//                 ))}
//               </div>
//             </div>

//             {/* Type Filter */}
//             <div className="border border-gray-200 rounded-lg p-4 mt-4 bg-white shadow-sm">
//               <p className="mb-4 text-sm font-semibold uppercase tracking-wide">Type</p>
//               <div className="flex flex-col text-sm gap-3 font-light text-gray-700">
//                 {["Powder", "Pest", "Masala"].map((item) => (
//                   <label key={item} className="flex items-center gap-3 hover:text-black cursor-pointer">
//                     <input
//                       type="checkbox"
//                       className="w-4 h-4 accent-amber-600"
//                       value={item}
//                       checked={subCategory.includes(item)}
//                       onChange={toggleSubCategory}
//                     />
//                     <span>{item}</span>
//                   </label>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Right Side - Product Collection */}
//         <div className="flex-1">
//           <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
//             <Title text1={'ALL'} text2={'COLLECTIONS'} />

//             {/* Product Sort */}
//             <div className="w-full sm:w-auto">
//               <select
//                 onChange={(e) => setSortType(e.target.value)}
//                 className="w-full sm:w-auto border-2 border-gray-200 rounded-lg text-sm p-2.5 pr-8 bg-white hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
//               >
//                 <option value="relavent">Sort by: Relevant</option>
//                 <option value="low-high">Sort by: Price Low-High</option>
//                 <option value="high-low">Sort by: Price High-Low</option>
//               </select>
//             </div>
//           </div>

//           {/* Products Display */}
//           {filterProducts.length === 0 ? (
//             <div className="bg-gray-50 rounded-lg p-8 text-center">
//               <p className="text-lg text-gray-500">
//                 {searchQuery ? `No products match "${searchQuery}"` : "No products match your filters"}
//               </p>
//               <button
//                 onClick={() => {
//                   setCategory([]);
//                   setSubCategory([]);
//                   setSearchQuery('');
//                 }}
//                 className="mt-4 px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
//               >
//                 Clear All Filters
//               </button>
//             </div>
//           ) : (
//             <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5 divide-x divide-y divide-gray-200 border border-gray-200 rounded-lg overflow-hidden bg-white">
//               {filterProducts.map((item, index) => (
//                 <div key={item._id} className={`p-2 ${index % 2 === 0 ? 'border-l' : ''} ${index < 2 ? 'border-t' : ''}`}>
//                   <ProductItem
//                     id={item._id}
//                     name={item.name}
//                     image={item.image}
//                     sizes={item.sizes}
//                   />
//                 </div>
//               ))}
//             </div>
//           )}

//           {/* Products Count */}
//           <div className="mt-6 text-sm text-gray-500">
//             Showing {filterProducts.length} {filterProducts.length === 1 ? 'product' : 'products'}
//             {searchQuery && <span> for "{searchQuery}"</span>}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Collection;


import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {
  const location = useLocation();
  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relavent');
  const [showSearchField, setShowSearchField] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Check for search parameter in URL
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    if (queryParams.get('search') === 'true') {
      setShowSearchField(true);
    }
  }, [location]);

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(category.filter(item => item !== e.target.value));
    }
    else {
      setCategory(prev => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev => prev.filter(item => item !== e.target.value));
    }
    else {
      setSubCategory(prev => [...prev, e.target.value]);
    }
  };

  // Function to handle search
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);

    // Apply search filter
    if (e.target.value.trim()) {
      const searchResults = products.filter(product =>
        product.name.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setFilterProducts(searchResults);
    } else {
      applyFilter(); // Reset to normal filtered view
    }
  };

  // Handle search cancel - clear search and close search panel
  const handleSearchCancel = () => {
    setSearchQuery('');
    setShowSearchField(false);
    applyFilter(); // Reset filter
  };

  const applyFilter = () => {
    let productCopy = products.slice();

    // Apply category filter
    if (category.length > 0) {
      productCopy = productCopy.filter(item => category.includes(item.category));
    }

    // Apply subcategory filter
    if (subCategory.length > 0) {
      productCopy = productCopy.filter(item => subCategory.includes(item.subCategory));
    }

    // Apply search filter if exists
    if (searchQuery.trim()) {
      productCopy = productCopy.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilterProducts(productCopy);
  };

  const sortProduct = () => {
    let fpCopy = filterProducts.slice();
    switch (sortType) {
      case 'low-high':
        // Sort by the price of the first size option
        setFilterProducts(fpCopy.sort((a, b) => {
          const priceA = a.sizes && a.sizes.length > 0 ? a.sizes[0].price : 0;
          const priceB = b.sizes && b.sizes.length > 0 ? b.sizes[0].price : 0;
          return priceA - priceB;
        }));
        break;
      case 'high-low':
        // Sort by the price of the first size option in descending order
        setFilterProducts(fpCopy.sort((a, b) => {
          const priceA = a.sizes && a.sizes.length > 0 ? a.sizes[0].price : 0;
          const priceB = b.sizes && b.sizes.length > 0 ? b.sizes[0].price : 0;
          return priceB - priceA;
        }));
        break;
      default:
        applyFilter();
        break;
    }
  };

  // Apply filters when category, subcategory, or products change
  useEffect(() => {
    applyFilter();
  }, [category, subCategory, products, searchQuery]);

  // Apply sorting when sort type changes
  useEffect(() => {
    sortProduct();
  }, [sortType]);

  // Initialize products on mount
  useEffect(() => {
    if (products.length > 0) {
      setFilterProducts(products);
    }
  }, [products]);

  return (
    <div className="container mx-auto px-4 pb-16">

      {/* Search Field */}
      {showSearchField && (
        <div className="w-full flex items-center justify-center mb-5 pt-3">
          <div className="relative w-full max-w-full sm:max-w-xl lg:max-w-2xl">
            <div className="flex items-center">
              {/* Search Input */}
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={handleSearch}
                  className="w-full border border-gray-300 bg-white rounded-xl py-2.5 px-5 pr-10 shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200"
                  autoFocus
                />
              </div>

              {/* Single Cancel Button that handles both clearing text and closing search */}
              <button
                className="ml-2 p-2 text-gray-400 hover:text-red-500 transition-colors"
                onClick={handleSearchCancel}
                aria-label="Cancel search"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-col sm:flex-row gap-5 lg:gap-10 pt-6 md:pt-10 border-t">

        {/* Left Side - Filter Option */}
        <div className="w-full sm:w-64">
          <button
            onClick={() => setShowFilter(!showFilter)}
            className="w-full sm:w-auto flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors py-3 px-4 rounded-lg my-3 text-lg font-medium sm:bg-transparent sm:p-0 sm:justify-start sm:hover:bg-transparent"
          >
            <span className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
              </svg>
              FILTERS
            </span>
            <svg
              className={`h-5 w-5 transform transition-transform duration-200 sm:hidden ${showFilter ? 'rotate-180' : ''}`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>

          {/* Category Filter */}
          <div className={`${showFilter ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 sm:max-h-screen sm:opacity-100'} overflow-hidden transition-all duration-300 ease-in-out`}>
            <div className="border border-gray-200 rounded-lg p-4 mt-4 bg-white shadow-sm">
              <p className="mb-4 text-sm font-semibold uppercase tracking-wide">Categories</p>
              <div className="flex flex-col text-sm gap-3 font-light text-gray-700">
                {[
                  "Blended spices",
                  "Pure spices",
                  "Premix Products",
                  "Herb Mix Products",
                  "Sesonings",
                  "Dehydrated Vegetables"
                ].map((item) => (
                  <label key={item} className="flex items-center gap-3 hover:text-black cursor-pointer">
                    <input
                      type="checkbox"
                      className="w-4 h-4 accent-amber-600"
                      value={item}
                      checked={category.includes(item)}
                      onChange={toggleCategory}
                    />
                    <span>{item}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Type Filter */}
            <div className="border border-gray-200 rounded-lg p-4 mt-4 bg-white shadow-sm">
              <p className="mb-4 text-sm font-semibold uppercase tracking-wide">Type</p>
              <div className="flex flex-col text-sm gap-3 font-light text-gray-700">
                {["Powder", "Pest", "Masala"].map((item) => (
                  <label key={item} className="flex items-center gap-3 hover:text-black cursor-pointer">
                    <input
                      type="checkbox"
                      className="w-4 h-4 accent-amber-600"
                      value={item}
                      checked={subCategory.includes(item)}
                      onChange={toggleSubCategory}
                    />
                    <span>{item}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Product Collection */}
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <Title text1={'ALL'} text2={'COLLECTIONS'} />

            {/* Product Sort */}
            <div className="w-full sm:w-auto">
              <select
                onChange={(e) => setSortType(e.target.value)}
                className="w-full sm:w-auto border-2 border-gray-200 rounded-lg text-sm p-2.5 pr-8 bg-white hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
              >
                <option value="relavent">Sort by: Relevant</option>
                <option value="low-high">Sort by: Price Low-High</option>
                <option value="high-low">Sort by: Price High-Low</option>
              </select>
            </div>
          </div>

          {/* Products Display */}
          {filterProducts.length === 0 ? (
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <p className="text-lg text-gray-500">
                {searchQuery ? `No products match "${searchQuery}"` : "No products match your filters"}
              </p>
              <button
                onClick={() => {
                  setCategory([]);
                  setSubCategory([]);
                  setSearchQuery('');
                }}
                className="mt-4 px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5 divide-x divide-y divide-gray-200 border border-gray-200 rounded-lg overflow-hidden bg-white">
              {filterProducts.map((item, index) => (
                <div key={item._id} className={`p-2 ${index % 2 === 0 ? 'border-l' : ''} ${index < 2 ? 'border-t' : ''}`}>
                  <ProductItem
                    id={item._id}
                    name={item.name}
                    image={item.image}
                    sizes={item.sizes}
                  />
                </div>
              ))}
            </div>
          )}

          {/* Products Count */}
          <div className="mt-6 text-sm text-gray-500">
            Showing {filterProducts.length} {filterProducts.length === 1 ? 'product' : 'products'}
            {searchQuery && <span> for "{searchQuery}"</span>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
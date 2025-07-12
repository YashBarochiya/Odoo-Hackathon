import React, { useContext } from 'react';
import { assets } from '../assets/assets';
import { ShopContext } from '../context/ShopContext';
import ProductItem from '../components/ProductItem';
import Title from '../components/Title'; 

const Blended_Spices = () => {
  const {products} = useContext(ShopContext);
  const blendedSpices = products.filter(product => product.category === 'Blended spices');
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <img
          src={assets.a}
          alt="Blended Spices"
          className="w-full h-64 sm:h-80 object-cover"
        />
        <div className="p-6">
          <h1 className="text-2xl md:text-3xl font-bold mb-4 text-center sm:text-left">Blended Spices</h1>
          <p className="text-gray-700 leading-relaxed">
            Blended Spice is a term often used to describe a well-balanced blend of spices that can be used to enhance the flavor of various dishes. Typically, such spice blends are carefully crafted to provide a harmonious mix of aromas, flavors, and textures, catering to specific cuisines or dishes.
          </p>
        </div>
      </div>
      <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
            <Title text1={'LATEST'} text2={'COLLECTIONS'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim itaque hic officiis?
            </p>
        </div>
        
        {/* rendering product */}
        <div className='grid gird-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 gap-y-6'>
            {
                blendedSpices.map((item,index)=>(
                    <ProductItem key={item._id}
                    id={item._id}
                    image={item.image}
                    name={item.name}
                    sizes={item.sizes}  />
                )) 
            }
        </div>
      </div>
    </div>
  );
};

export default Blended_Spices;
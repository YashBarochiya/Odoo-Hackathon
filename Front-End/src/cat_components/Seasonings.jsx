import React, { useContext } from 'react';
import { assets } from '../assets/assets';
import { ShopContext } from '../context/ShopContext';
import ProductItem from '../components/ProductItem';
import Title from '../components/Title';

const Seasonings = () => {
  const { products } = useContext(ShopContext);
  const seasonings = products.filter(product => product.category === 'Sesonings');
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <img
          src={assets.c}
          alt="Seasonings"
          className="w-full h-64 sm:h-80 object-cover"
        />
        <div className="p-6">
          <h1 className="text-2xl md:text-3xl font-bold mb-4 text-center sm:text-left">Seasonings</h1>
          <p className="text-gray-700 leading-relaxed">
            Seasonings are flavor enhancers designed to add depth and complexity to various dishes. Unlike pure spices, seasonings often combine multiple ingredients including herbs, spices, salt, and sometimes additives like MSG or yeast extract. They're formulated to provide complete flavor profiles for specific cuisines or dishes, making them convenient for everyday cooking.
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
            seasonings.map((item, index) => (
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

export default Seasonings;
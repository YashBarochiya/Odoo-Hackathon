import React, { useContext } from 'react';
import { assets } from '../assets/assets';
import { ShopContext } from '../context/ShopContext';
import ProductItem from '../components/ProductItem';
import Title from '../components/Title';

const Whole_Spices = () => {
  const { products } = useContext(ShopContext);
  const wholeSpices = products.filter(product => product.category === 'Whole spices');
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <img
          src={assets.c}
          alt="Whole Spices"
          className="w-full h-64 sm:h-80 object-cover"
        />
        <div className="p-6">
          <h1 className="text-2xl md:text-3xl font-bold mb-4 text-center sm:text-left">Whole Spices</h1>
          <p className="text-gray-700 leading-relaxed">
            Whole spices are intact, unground forms of spices like cardamom pods, cinnamon sticks, cloves, and nutmeg. These preserve their essential oils and flavors much longer than ground versions. Ideal for slow-cooking methods, they release complex flavors gradually and can be easily removed before serving, providing aromatic depth without overwhelming the dish.
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
            wholeSpices.map((item, index) => (
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

export default Whole_Spices;
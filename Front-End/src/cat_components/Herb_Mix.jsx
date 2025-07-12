import React, { useContext } from 'react'; // Added missing useContext import
import { assets } from '../assets/assets';
import { ShopContext } from '../context/ShopContext';
import ProductItem from '../components/ProductItem';
import Title from '../components/Title';

const Herb_Mix = () => {
  const {products} = useContext(ShopContext);
  const herbMixProducts = products.filter(product => product.category === 'Herb Mix Products');
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <img
          src={assets.cat6}
          alt="Herb Mix"
          className="w-full h-64 sm:h-80 object-cover"
        />
        <div className="p-6">
          <h1 className="text-2xl md:text-3xl font-bold mb-4 text-center sm:text-left">Herb Mix</h1>
          <p className="text-gray-700 leading-relaxed">
            Herb mixes are aromatic blends of dried herbs like basil, oregano, thyme, and rosemary, often combined with complementary spices. These versatile combinations add fresh, garden-inspired flavors to a wide range of dishes. Particularly popular in Mediterranean and European cuisines, herb mixes bring balance and depth to everything from salad dressings and marinades to roasted vegetables and grilled meats.
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
            herbMixProducts.map((item,index)=>(
              
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

export default Herb_Mix;
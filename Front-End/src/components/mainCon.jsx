import React, { useEffect } from 'react';

const MainContent = () => {
  useEffect(() => {
    // Carousel navigation functionality
    const carousel = document.querySelector('.carousel');
    const prevBtn = document.querySelector('.fa-chevron-left')?.parentElement;
    const nextBtn = document.querySelector('.fa-chevron-right')?.parentElement;
    
    if (prevBtn && nextBtn && carousel) {
      prevBtn.addEventListener('click', () => {
        carousel.scrollBy({ left: -300, behavior: 'smooth' });
      });
      
      nextBtn.addEventListener('click', () => {
        carousel.scrollBy({ left: 300, behavior: 'smooth' });
      });
    }
  }, []);

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
          
          body {
            font-family: 'Poppins', sans-serif;
            background-color: #f9fafb;
          }
          
          .hero-gradient {
            background: linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 50%, #f5f3ff 100%);
          }
          
          .item-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          }
          
          .carousel-slide {
            scroll-snap-align: start;
          }
          
          .carousel {
            scroll-snap-type: x mandatory;
          }
        `}
      </style>

      {/* Hero Section */}
      <div className="hero-gradient">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Swap Clothes,</span>
              <span className="block text-emerald-600">Save the Planet</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Join our sustainable fashion community to exchange clothes you no longer wear for items you'll love.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <a href="#" className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 md:py-4 md:text-lg md:px-10">
                Start Swapping
              </a>
              <a href="#" className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-emerald-700 bg-emerald-100 hover:bg-emerald-200 md:py-4 md:text-lg md:px-10">
                Browse Items
              </a>
              <a href="#" className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-500 hover:bg-emerald-600 md:py-4 md:text-lg md:px-10">
                List an Item
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-emerald-600 font-semibold tracking-wide uppercase">Sustainable Fashion</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              How ReWear Works
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              <div className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-emerald-500 text-white">
                  <i className="fas fa-tshirt text-xl"></i>
                </div>
                <div className="mt-5">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">List Your Items</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Upload clothes you no longer wear with photos and details about condition and size.
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-emerald-500 text-white">
                  <i className="fas fa-exchange-alt text-xl"></i>
                </div>
                <div className="mt-5">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Find New Favorites</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Browse thousands of items from our community and request swaps or redeem with points.
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-emerald-500 text-white">
                  <i className="fas fa-leaf text-xl"></i>
                </div>
                <div className="mt-5">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Sustainable Impact</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Each swap reduces textile waste and helps build a circular fashion economy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Items Carousel */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-8">
            <h2 className="text-base text-emerald-600 font-semibold tracking-wide uppercase">Trending Now</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Featured Items
            </p>
          </div>
          
          <div className="relative">
            <div className="carousel flex overflow-x-auto pb-4 scrollbar-hide space-x-6" style={{ scrollBehavior: 'smooth' }}>
              {/* Item 1 */}
              <div className="carousel-slide flex-shrink-0 w-72 bg-white rounded-lg overflow-hidden shadow-md item-card transition-transform duration-300">
                <div className="relative h-64 overflow-hidden flex justify-center items-center">
                  <img className="w-50px h-full" src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRbQp0N0vXoODGmqtczaJN98sVVFSkYwP_O816o3DUxO3r3bXRr-dPZzCU81VL_EP6-5ZKfj2HGDqrU_1PQbXFew9jAs4xamkTSrdx8M9k" alt="Light blue denim jacket with distressed details and metal buttons" />
                  <div className="absolute top-2 right-2 bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded-full font-semibold">
                    120 pts
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900">Denim Jacket</h3>
                  <p className="text-sm text-gray-500">Women's • Medium • Excellent</p>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-900">By: FashionLover22</span>
                    <button className="text-xs bg-emerald-500 text-white px-3 py-1 rounded-full hover:bg-emerald-600 transition">Request Swap</button>
                  </div>
                </div>
              </div>
              
              {/* Item 2 */}
              <div className="carousel-slide flex-shrink-0 w-72 bg-white rounded-lg overflow-hidden shadow-md item-card transition-transform duration-300">
                <div className="relative h-64 overflow-hidden flex justify-center items-center">
                  <img className="w-50px h-full object-cover" src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRgOY3oPNVSQ0n0UwnHafrplsO_BzeEeDu3DiR-SilYMlt8DrTV4bjtwsFzM0VD1yt-8Z99_bhqgSzbK23L2KsavSq2FsHhgzwNHXad4ifFWv_FiiR3mlE8" alt="Beige linen midi dress with short sleeves and belt loops" />
                  <div className="absolute top-2 right-2 bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded-full font-semibold">
                    80 pts
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900">Linen Dress</h3>
                  <p className="text-sm text-gray-500">Women's • Small • Good</p>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-900">By: EcoChic</span>
                    <button className="text-xs bg-emerald-500 text-white px-3 py-1 rounded-full hover:bg-emerald-600 transition">Request Swap</button>
                  </div>
                </div>
              </div>
              
              {/* Item 3 */}
              <div className="carousel-slide flex-shrink-0 w-72 bg-white rounded-lg overflow-hidden shadow-md item-card transition-transform duration-300">
                <div className="relative h-64 overflow-hidden flex justify-center items-center">
                  <img className="w-50px h-full object-cover" src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ1kZi2xXI5aLVtZ5buwMAA3SFDQcuNSf2R3NhwnD-RTp-yY4rloHCiFUOaBnQTQ0fOtS0IVN_9zlSSWInP96bgTMt4BFhH_ZPqYQtDuds" alt="Red and black flannel shirt with snap buttons and chest pocket" />
                  <div className="absolute top-2 right-2 bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded-full font-semibold">
                    60 pts
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900">Plaid Shirt</h3>
                  <p className="text-sm text-gray-500">Men's • Large • Like New</p>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-900">By: ThriftKing</span>
                    <button className="text-xs bg-emerald-500 text-white px-3 py-1 rounded-full hover:bg-emerald-600 transition">Request Swap</button>
                  </div>
                </div>
              </div>
              
              {/* Item 4 */}
              <div className="carousel-slide flex-shrink-0 w-72 bg-white rounded-lg overflow-hidden shadow-md item-card transition-transform duration-300">
                <div className="relative h-64 overflow-hidden flex justify-center items-center">
                  <img className="w-50px h-full" src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSHoRdktgKbVqXAiLa8_0hFPAQFTH-w0Cu2Y2Ro5OnFrmaAofsO0bP9TOnvchcsSbxbBRGWBZ9ycB7Cs0gHwLDVXPiKvIzpIDG3JHXlt5jf3HBWkpQJbjg8GZc" alt="Black leather ankle boots with chunky soles and side zipper" />
                  <div className="absolute top-2 right-2 bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded-full font-semibold">
                    150 pts
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900">Leather Boots</h3>
                  <p className="text-sm text-gray-500">Women's • 8 • Very Good</p>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-900">By: BootsLover</span>
                    <button className="text-xs bg-emerald-500 text-white px-3 py-1 rounded-full hover:bg-emerald-600 transition">Request Swap</button>
                  </div>
                </div>
              </div>
            </div>
            
            <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-md p-2 -ml-4 z-10">
              <i className="fas fa-chevron-left text-gray-600"></i>
            </button>
            <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-md p-2 -mr-4 z-10">
              <i className="fas fa-chevron-right text-gray-600"></i>
            </button>
          </div>
          
          <div className="mt-8 text-center">
            <a href="#" className="text-emerald-600 hover:text-emerald-700 font-semibold">Browse All Items →</a>
          </div>
        </div>
      </div>

      {/* Impact Stats */}
      <div className="bg-emerald-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 text-center">
            <div>
              <div className="text-4xl font-bold">3,247+</div>
              <div className="text-lg mt-2">Items Swapped</div>
            </div>
            <div>
              <div className="text-4xl font-bold">1.2K+</div>
              <div className="text-lg mt-2">Community Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold">3.5T+</div>
              <div className="text-lg mt-2">Textile Waste Saved</div>
            </div>
          </div>
        </div>
      </div>

      {/* List Item CTA */}
      <div className="bg-gradient-to-r from-emerald-500 to-teal-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready to list your first item?</span>
          </h2>
          <p className="mt-4 text-xl text-emerald-100">
            It only takes a few minutes to upload and start earning points immediately.
          </p>
          <div className="mt-8">
            <a href="#" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-emerald-600 bg-white hover:bg-emerald-50">
              <i className="fas fa-plus mr-2"></i> List an Item
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainContent; 
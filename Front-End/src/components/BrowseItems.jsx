import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BrowseItems = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('newest');

  // Sample items data
  const items = [
    {
      id: 1,
      name: "Denim Jacket",
      category: "jackets",
      size: "Medium",
      condition: "Excellent",
      points: 120,
      owner: "FashionLover22",
      image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRbQp0N0vXoODGmqtczaJN98sVVFSkYwP_O816o3DUxO3r3bXRr-dPZzCU81VL_EP6-5ZKfj2HGDqrU_1PQbXFew9jAs4xamkTSrdx8M9k",
      description: "Light blue denim jacket with distressed details and metal buttons"
    },
    {
      id: 2,
      name: "Linen Dress",
      category: "dresses",
      size: "Small",
      condition: "Good",
      points: 80,
      owner: "EcoChic",
      image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRgOY3oPNVSQ0n0UwnHafrplsO_BzeEeDu3DiR-SilYMlt8DrTV4bjtwsFzM0VD1yt-8Z99_bhqgSzbK23L2KsavSq2FsHhgzwNHXad4ifFWv_FiiR3mlE8",
      description: "Beige linen midi dress with short sleeves and belt loops"
    },
    {
      id: 3,
      name: "Plaid Shirt",
      category: "shirts",
      size: "Large",
      condition: "Like New",
      points: 60,
      owner: "ThriftKing",
      image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ1kZi2xXI5aLVtZ5buwMAA3SFDQcuNSf2R3NhwnD-RTp-yY4rloHCiFUOaBnQTQ0fOtS0IVN_9zlSSWInP96bgTMt4BFhH_ZPqYQtDuds",
      description: "Red and black flannel shirt with snap buttons and chest pocket"
    },
    {
      id: 4,
      name: "Leather Boots",
      category: "shoes",
      size: "8",
      condition: "Very Good",
      points: 150,
      owner: "BootsLover",
      image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSHoRdktgKbVqXAiLa8_0hFPAQFTH-w0Cu2Y2Ro5OnFrmaAofsO0bP9TOnvchcsSbxbBRGWBZ9ycB7Cs0gHwLDVXPiKvIzpIDG3JHXlt5jf3HBWkpQJbjg8GZc",
      description: "Black leather ankle boots with chunky soles and side zipper"
    },
    {
      id: 5,
      name: "Knit Sweater",
      category: "sweaters",
      size: "Medium",
      condition: "Good",
      points: 90,
      owner: "CozyStyle",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
      description: "Soft knit sweater in forest green with ribbed texture"
    },
    {
      id: 6,
      name: "High-Waist Jeans",
      category: "pants",
      size: "28",
      condition: "Excellent",
      points: 110,
      owner: "DenimQueen",
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop",
      description: "Classic high-waist jeans with perfect fit and vintage wash"
    },
    {
      id: 7,
      name: "Silk Blouse",
      category: "tops",
      size: "Small",
      condition: "Like New",
      points: 95,
      owner: "ElegantStyle",
      image: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=400&h=400&fit=crop",
      description: "Elegant silk blouse in cream with subtle pattern"
    },
    {
      id: 8,
      name: "Canvas Sneakers",
      category: "shoes",
      size: "9",
      condition: "Good",
      points: 70,
      owner: "SneakerHead",
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop",
      description: "Classic canvas sneakers in white with rubber sole"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Items' },
    { id: 'jackets', name: 'Jackets' },
    { id: 'dresses', name: 'Dresses' },
    { id: 'shirts', name: 'Shirts' },
    { id: 'sweaters', name: 'Sweaters' },
    { id: 'tops', name: 'Tops' },
    { id: 'pants', name: 'Pants' },
    { id: 'shoes', name: 'Shoes' }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? items 
    : items.filter(item => item.category === selectedCategory);

  const sortedItems = [...filteredItems].sort((a, b) => {
    switch (sortBy) {
      case 'points-low':
        return a.points - b.points;
      case 'points-high':
        return b.points - a.points;
      case 'newest':
        return b.id - a.id;
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            {/* Back Button */}
            <div className="flex justify-start mb-4">
              <Link 
                to="/" 
                className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium transition-colors"
              >
                <i className="fas fa-arrow-left mr-2"></i>
                Back to Home
              </Link>
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Browse Items
            </h1>
            <p className="mt-2 text-lg text-gray-600">
              Discover amazing clothes from our sustainable fashion community
            </p>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-emerald-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2">
              <label className="text-sm font-medium text-gray-700">Sort by:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="newest">Newest First</option>
                <option value="points-low">Points: Low to High</option>
                <option value="points-high">Points: High to Low</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Items Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {sortedItems.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <i className="fas fa-search text-6xl"></i>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No items found</h3>
            <p className="text-gray-500">Try adjusting your filters or check back later for new items.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sortedItems.map((item) => (
              <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.description}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded-full font-semibold">
                    {item.points} pts
                  </div>
                  <div className="absolute top-2 left-2 bg-white bg-opacity-90 text-gray-700 text-xs px-2 py-1 rounded-full font-medium">
                    {item.condition}
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.name}</h3>
                  <p className="text-sm text-gray-500 mb-2">
                    {item.size} • {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                  </p>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">{item.description}</p>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-900">By: {item.owner}</span>
                    <button className="text-xs bg-emerald-500 text-white px-3 py-1 rounded-full hover:bg-emerald-600 transition">Request Swap</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Load More Button */}
        {sortedItems.length > 0 && (
          <div className="text-center mt-8">
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-md font-medium transition-colors">
              Load More Items
            </button>
          </div>
        )}
      </div>

      {/* Stats Section */}
      <div className="bg-emerald-700 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold">{sortedItems.length}</div>
              <div className="text-lg mt-1">Items Available</div>
            </div>
            <div>
              <div className="text-3xl font-bold">{categories.length - 1}</div>
              <div className="text-lg mt-1">Categories</div>
            </div>
            <div>
              <div className="text-3xl font-bold">24h</div>
              <div className="text-lg mt-1">Average Response Time</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseItems; 
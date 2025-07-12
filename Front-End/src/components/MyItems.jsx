import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MyItems = () => {
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [showAddItem, setShowAddItem] = useState(false);

  // Sample user's items data
  const userItems = [
    {
      id: 1,
      name: "Vintage Denim Jacket",
      category: "jackets",
      size: "Medium",
      condition: "Excellent",
      points: 120,
      status: "active",
      views: 45,
      requests: 3,
      image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRbQp0N0vXoODGmqtczaJN98sVVFSkYwP_O816o3DUxO3r3bXRr-dPZzCU81VL_EP6-5ZKfj2HGDqrU_1PQbXFew9jAs4xamkTSrdx8M9k",
      description: "Light blue denim jacket with distressed details and metal buttons",
      listedDate: "2024-01-15"
    },
    {
      id: 2,
      name: "Summer Linen Dress",
      category: "dresses",
      size: "Small",
      condition: "Good",
      points: 80,
      status: "pending",
      views: 12,
      requests: 0,
      image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRgOY3oPNVSQ0n0UwnHafrplsO_BzeEeDu3DiR-SilYMlt8DrTV4bjtwsFzM0VD1yt-8Z99_bhqgSzbK23L2KsavSq2FsHhgzwNHXad4ifFWv_FiiR3mlE8",
      description: "Beige linen midi dress with short sleeves and belt loops",
      listedDate: "2024-01-20"
    },
    {
      id: 3,
      name: "Classic Plaid Shirt",
      category: "shirts",
      size: "Large",
      condition: "Like New",
      points: 60,
      status: "swapped",
      views: 78,
      requests: 5,
      image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ1kZi2xXI5aLVtZ5buwMAA3SFDQcuNSf2R3NhwnD-RTp-yY4rloHCiFUOaBnQTQ0fOtS0IVN_9zlSSWInP96bgTMt4BFhH_ZPqYQtDuds",
      description: "Red and black flannel shirt with snap buttons and chest pocket",
      listedDate: "2024-01-10"
    },
    {
      id: 4,
      name: "Leather Ankle Boots",
      category: "shoes",
      size: "8",
      condition: "Very Good",
      points: 150,
      status: "active",
      views: 92,
      requests: 7,
      image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSHoRdktgKbVqXAiLa8_0hFPAQFTH-w0Cu2Y2Ro5OnFrmaAofsO0bP9TOnvchcsSbxbBRGWBZ9ycB7Cs0gHwLDVXPiKvIzpIDG3JHXlt5jf3HBWkpQJbjg8GZc",
      description: "Black leather ankle boots with chunky soles and side zipper",
      listedDate: "2024-01-18"
    },
    {
      id: 5,
      name: "Cozy Knit Sweater",
      category: "sweaters",
      size: "Medium",
      condition: "Good",
      points: 90,
      status: "inactive",
      views: 23,
      requests: 1,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
      description: "Soft knit sweater in forest green with ribbed texture",
      listedDate: "2024-01-12"
    }
  ];

  const statusOptions = [
    { id: 'all', name: 'All Items', count: userItems.length },
    { id: 'active', name: 'Active', count: userItems.filter(item => item.status === 'active').length },
    { id: 'pending', name: 'Pending', count: userItems.filter(item => item.status === 'pending').length },
    { id: 'swapped', name: 'Swapped', count: userItems.filter(item => item.status === 'swapped').length },
    { id: 'inactive', name: 'Inactive', count: userItems.filter(item => item.status === 'inactive').length }
  ];

  const filteredItems = selectedStatus === 'all' 
    ? userItems 
    : userItems.filter(item => item.status === selectedStatus);

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'swapped': return 'bg-blue-100 text-blue-800';
      case 'inactive': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'active': return 'fas fa-check-circle';
      case 'pending': return 'fas fa-clock';
      case 'swapped': return 'fas fa-exchange-alt';
      case 'inactive': return 'fas fa-pause-circle';
      default: return 'fas fa-circle';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <div>
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
                My Items
              </h1>
              <p className="mt-2 text-lg text-gray-600">
                Manage your listed items and track their performance
              </p>
            </div>
            <button 
              onClick={() => setShowAddItem(true)}
              className="mt-4 sm:mt-0 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-md font-medium transition-colors flex items-center gap-2"
            >
              <i className="fas fa-plus"></i>
              List New Item
            </button>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center">
              <div className="p-2 bg-emerald-100 rounded-lg">
                <i className="fas fa-tshirt text-emerald-600 text-xl"></i>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Items</p>
                <p className="text-2xl font-bold text-gray-900">{userItems.length}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <i className="fas fa-eye text-green-600 text-xl"></i>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Views</p>
                <p className="text-2xl font-bold text-gray-900">{userItems.reduce((sum, item) => sum + item.views, 0)}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <i className="fas fa-handshake text-blue-600 text-xl"></i>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Swap Requests</p>
                <p className="text-2xl font-bold text-gray-900">{userItems.reduce((sum, item) => sum + item.requests, 0)}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center">
              <div className="p-2 bg-purple-100 rounded-lg">
                <i className="fas fa-coins text-purple-600 text-xl"></i>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Points Earned</p>
                <p className="text-2xl font-bold text-gray-900">{userItems.filter(item => item.status === 'swapped').reduce((sum, item) => sum + item.points, 0)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Status Filter */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap gap-2">
            {statusOptions.map((status) => (
              <button
                key={status.id}
                onClick={() => setSelectedStatus(status.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2 ${
                  selectedStatus === status.id
                    ? 'bg-emerald-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {status.name}
                <span className="bg-white bg-opacity-20 px-2 py-1 rounded-full text-xs">
                  {status.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Items Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {filteredItems.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <i className="fas fa-box-open text-6xl"></i>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No items found</h3>
            <p className="text-gray-500 mb-6">You haven't listed any items yet or no items match your current filter.</p>
            <button 
              onClick={() => setShowAddItem(true)}
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-md font-medium transition-colors"
            >
              List Your First Item
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredItems.map((item) => (
              <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex">
                  <div className="relative w-32 h-32 flex-shrink-0">
                    <img 
                      src={item.image} 
                      alt={item.description}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 left-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>
                        <i className={`${getStatusIcon(item.status)} mr-1`}></i>
                        {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex-1 p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                      <div className="text-right">
                        <div className="text-sm font-bold text-emerald-600">{item.points} pts</div>
                        <div className="text-xs text-gray-500">{item.condition}</div>
                      </div>
                    </div>
                    
                    <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                      <span>{item.size} • {item.category.charAt(0).toUpperCase() + item.category.slice(1)}</span>
                      <span>Listed {new Date(item.listedDate).toLocaleDateString()}</span>
                    </div>
                    
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <div className="flex items-center gap-4">
                        <span><i className="fas fa-eye mr-1"></i>{item.views} views</span>
                        <span><i className="fas fa-handshake mr-1"></i>{item.requests} requests</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <button className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                        <i className="fas fa-edit mr-1"></i>Edit
                      </button>
                      <button className="flex-1 bg-gray-500 hover:bg-gray-600 text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                        <i className="fas fa-eye mr-1"></i>View
                      </button>
                      <button className="px-3 py-2 text-red-500 hover:text-red-700 transition-colors">
                        <i className="fas fa-trash"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Add Item Modal (Placeholder) */}
      {showAddItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">List New Item</h3>
              <button 
                onClick={() => setShowAddItem(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            <p className="text-gray-600 mb-4">
              This would open a form to add a new item. The form would include fields for:
            </p>
            <ul className="text-sm text-gray-600 mb-4 space-y-1">
              <li>• Item name and description</li>
              <li>• Category and size</li>
              <li>• Condition assessment</li>
              <li>• Photo upload</li>
              <li>• Points value</li>
            </ul>
            <div className="flex gap-2">
              <button 
                onClick={() => setShowAddItem(false)}
                className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 px-4 py-2 rounded-md font-medium transition-colors"
              >
                Cancel
              </button>
              <button className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-md font-medium transition-colors">
                Create Form
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyItems; 
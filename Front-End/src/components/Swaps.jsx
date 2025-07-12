import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Swaps = () => {
  const [selectedTab, setSelectedTab] = useState('pending');
  const [selectedStatus, setSelectedStatus] = useState('all');

  // Sample swaps data
  const swaps = [
    {
      id: 1,
      type: 'pending',
      status: 'awaiting_response',
      myItem: {
        name: "Vintage Denim Jacket",
        image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRbQp0N0vXoODGmqtczaJN98sVVFSkYwP_O816o3DUxO3r3bXRr-dPZzCU81VL_EP6-5ZKfj2HGDqrU_1PQbXFew9jAs4xamkTSrdx8M9k",
        points: 120,
        condition: "Excellent"
      },
      theirItem: {
        name: "Leather Ankle Boots",
        image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSHoRdktgKbVqXAiLa8_0hFPAQFTH-w0Cu2Y2Ro5OnFrmaAofsO0bP9TOnvchcsSbxbBRGWBZ9ycB7Cs0gHwLDVXPiKvIzpIDG3JHXlt5jf3HBWkpQJbjg8GZc",
        points: 150,
        condition: "Very Good"
      },
      otherUser: "BootsLover",
      date: "2024-01-25",
      message: "Love your jacket! Would you be interested in swapping for my leather boots?"
    },
    {
      id: 2,
      type: 'pending',
      status: 'awaiting_response',
      myItem: {
        name: "Summer Linen Dress",
        image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRgOY3oPNVSQ0n0UwnHafrplsO_BzeEeDu3DiR-SilYMlt8DrTV4bjtwsFzM0VD1yt-8Z99_bhqgSzbK23L2KsavSq2FsHhgzwNHXad4ifFWv_FiiR3mlE8",
        points: 80,
        condition: "Good"
      },
      theirItem: {
        name: "Silk Blouse",
        image: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=400&h=400&fit=crop",
        points: 95,
        condition: "Like New"
      },
      otherUser: "ElegantStyle",
      date: "2024-01-24",
      message: "Your dress is exactly what I'm looking for! Would love to swap for my silk blouse."
    },
    {
      id: 3,
      type: 'completed',
      status: 'successful',
      myItem: {
        name: "Classic Plaid Shirt",
        image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ1kZi2xXI5aLVtZ5buwMAA3SFDQcuNSf2R3NhwnD-RTp-yY4rloHCiFUOaBnQTQ0fOtS0IVN_9zlSSWInP96bgTMt4BFhH_ZPqYQtDuds",
        points: 60,
        condition: "Like New"
      },
      theirItem: {
        name: "Knit Sweater",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
        points: 90,
        condition: "Good"
      },
      otherUser: "CozyStyle",
      date: "2024-01-20",
      message: "Perfect swap! Both items arrived in great condition."
    },
    {
      id: 4,
      type: 'completed',
      status: 'cancelled',
      myItem: {
        name: "Leather Ankle Boots",
        image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSHoRdktgKbVqXAiLa8_0hFPAQFTH-w0Cu2Y2Ro5OnFrmaAofsO0bP9TOnvchcsSbxbBRGWBZ9ycB7Cs0gHwLDVXPiKvIzpIDG3JHXlt5jf3HBWkpQJbjg8GZc",
        points: 150,
        condition: "Very Good"
      },
      theirItem: {
        name: "High-Waist Jeans",
        image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop",
        points: 110,
        condition: "Excellent"
      },
      otherUser: "DenimQueen",
      date: "2024-01-18",
      message: "Unfortunately, the size didn't work out. Maybe next time!"
    }
  ];

  const tabs = [
    { id: 'pending', name: 'Pending', count: swaps.filter(s => s.type === 'pending').length },
    { id: 'completed', name: 'Completed', count: swaps.filter(s => s.type === 'completed').length },
    { id: 'received', name: 'Received Requests', count: swaps.filter(s => s.type === 'received').length }
  ];

  const statusOptions = [
    { id: 'all', name: 'All Statuses' },
    { id: 'awaiting_response', name: 'Awaiting Response' },
    { id: 'successful', name: 'Successful' },
    { id: 'cancelled', name: 'Cancelled' }
  ];

  const filteredSwaps = swaps.filter(swap => {
    const tabMatch = selectedTab === 'all' || swap.type === selectedTab;
    const statusMatch = selectedStatus === 'all' || swap.status === selectedStatus;
    return tabMatch && statusMatch;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'awaiting_response': return 'bg-yellow-100 text-yellow-800';
      case 'successful': return 'bg-green-100 text-green-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'awaiting_response': return 'fas fa-clock';
      case 'successful': return 'fas fa-check-circle';
      case 'cancelled': return 'fas fa-times-circle';
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
                My Swaps
              </h1>
              <p className="mt-2 text-lg text-gray-600">
                Track your swap requests and completed exchanges
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <i className="fas fa-clock text-yellow-600 text-xl"></i>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Pending</p>
                <p className="text-2xl font-bold text-gray-900">{swaps.filter(s => s.type === 'pending').length}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <i className="fas fa-check-circle text-green-600 text-xl"></i>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Completed</p>
                <p className="text-2xl font-bold text-gray-900">{swaps.filter(s => s.type === 'completed' && s.status === 'successful').length}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <i className="fas fa-handshake text-blue-600 text-xl"></i>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Swaps</p>
                <p className="text-2xl font-bold text-gray-900">{swaps.length}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center">
              <div className="p-2 bg-purple-100 rounded-lg">
                <i className="fas fa-star text-purple-600 text-xl"></i>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Success Rate</p>
                <p className="text-2xl font-bold text-gray-900">75%</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  selectedTab === tab.id
                    ? 'border-emerald-500 text-emerald-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.name}
                <span className="ml-2 bg-gray-100 text-gray-900 py-0.5 px-2 rounded-full text-xs">
                  {tab.count}
                </span>
              </button>
            ))}
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
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedStatus === status.id
                    ? 'bg-emerald-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {status.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Swaps List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {filteredSwaps.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <i className="fas fa-exchange-alt text-6xl"></i>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No swaps found</h3>
            <p className="text-gray-500 mb-6">You don't have any swaps matching your current filters.</p>
            <Link 
              to="/browse"
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-md font-medium transition-colors"
            >
              Browse Items to Swap
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {filteredSwaps.map((swap) => (
              <div key={swap.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  {/* Header */}
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(swap.status)}`}>
                          <i className={`${getStatusIcon(swap.status)} mr-1`}></i>
                          {swap.status.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                        </span>
                        <span className="text-sm text-gray-500">with {swap.otherUser}</span>
                      </div>
                      <p className="text-sm text-gray-600">{new Date(swap.date).toLocaleDateString()}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-gray-900">Swap #{swap.id}</div>
                      <div className="text-xs text-gray-500">{swap.type}</div>
                    </div>
                  </div>

                  {/* Items Comparison */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                    {/* My Item */}
                    <div className="border rounded-lg p-4">
                      <h4 className="font-medium text-gray-900 mb-2">Your Item</h4>
                      <div className="flex items-center gap-3">
                        <img 
                          src={swap.myItem.image} 
                          alt={swap.myItem.name}
                          className="w-16 h-16 object-cover rounded"
                        />
                        <div>
                          <p className="font-medium text-gray-900">{swap.myItem.name}</p>
                          <p className="text-sm text-gray-500">{swap.myItem.condition} • {swap.myItem.points} pts</p>
                        </div>
                      </div>
                    </div>

                    {/* Their Item */}
                    <div className="border rounded-lg p-4">
                      <h4 className="font-medium text-gray-900 mb-2">Their Item</h4>
                      <div className="flex items-center gap-3">
                        <img 
                          src={swap.theirItem.image} 
                          alt={swap.theirItem.name}
                          className="w-16 h-16 object-cover rounded"
                        />
                        <div>
                          <p className="font-medium text-gray-900">{swap.theirItem.name}</p>
                          <p className="text-sm text-gray-500">{swap.theirItem.condition} • {swap.theirItem.points} pts</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  {swap.message && (
                    <div className="bg-gray-50 rounded-lg p-4 mb-4">
                      <p className="text-sm text-gray-700">{swap.message}</p>
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex gap-2">
                    {swap.status === 'awaiting_response' && (
                      <>
                        <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                          Accept Swap
                        </button>
                        <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                          Decline
                        </button>
                        <button className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                          Message
                        </button>
                      </>
                    )}
                    {swap.status === 'successful' && (
                      <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                        Leave Review
                      </button>
                    )}
                    {swap.status === 'cancelled' && (
                      <button className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                        View Details
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Quick Actions */}
      <div className="bg-emerald-700 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready for More Swaps?</h2>
          <p className="text-emerald-100 mb-6">
            Browse our community's items and start new swap requests
          </p>
          <div className="flex justify-center gap-4">
            <Link 
              to="/browse"
              className="bg-white text-emerald-700 hover:bg-emerald-50 px-6 py-3 rounded-md font-medium transition-colors"
            >
              Browse Items
            </Link>
            <Link 
              to="/my-items"
              className="border border-white text-white hover:bg-white hover:text-emerald-700 px-6 py-3 rounded-md font-medium transition-colors"
            >
              Manage My Items
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Swaps; 
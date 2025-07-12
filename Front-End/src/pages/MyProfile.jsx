import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { toast } from 'react-toastify';
import axios from 'axios';

const MyProfile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const { token, backendUrl, navigate } = useContext(ShopContext);
  
  useEffect(() => {
    if (token && backendUrl) {
      fetchUserProfile();
    }
  }, [token, backendUrl]);
  
  const fetchUserProfile = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await axios.get(`${backendUrl}/api/user/profile`, { 
        headers: { 
          token: token 
        }
      });
      
      if (response.data.success) {
        setProfile(response.data.data);
        console.log("User profile data:", response.data.data);
      } else {
        setError(response.data.message || "Failed to load profile data");
        toast.error(response.data.message || "Failed to load profile data");
      }
    } catch (err) {
      console.error("Failed to load user profile:", err);
      setError(err.message || "An error occurred while fetching profile");
      toast.error(err.message || "An error occurred while fetching profile");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-center">My Profile</h1>
      
      {loading && (
        <div className="text-center py-4">Loading profile data...</div>
      )}
      
      {error && (
        <div className="text-red-500 text-center py-4">{error}</div>
      )}
      
      {!loading && !error && profile && (
        <div className="space-y-4">
          <div className="flex flex-col md:flex-row md:items-center border-b pb-4">
            <span className="font-medium w-32">Name:</span>
            <span>{profile.name}</span>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center border-b pb-4">
            <span className="font-medium w-32">Email:</span>
            <span>{profile.email}</span>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center border-b pb-4">
            <span className="font-medium w-32">Phone:</span>
            <span>{profile.phone_no || 'Not provided'}</span>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center border-b pb-4">
            <span className="font-medium w-32">Account Type:</span>
            <span className="capitalize">{profile.role}</span>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center">
            <span className="font-medium w-32">Joined:</span>
            <span>{new Date(profile.createdAt).toLocaleDateString()}</span>
          </div>
        </div>
      )}
      
      <div className="mt-8 flex justify-center">
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          onClick={() => {/* Add edit profile functionality here */}}
          disabled={loading}
        >
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default MyProfile;
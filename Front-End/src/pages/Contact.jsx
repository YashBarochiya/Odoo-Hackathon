// import React from 'react'
// import Title from '../components/Title'
// import { assets } from '../assets/assets'
// import NewsletterBox from '../components/NewsletterBox'

// const Contact = () => {
//   return (
//     <div>
//       <div className='text-center text-2xl pt-10 border-t'>
//         <Title text1={'CONTACT'} text2={'US'}/>
//       </div>

//       <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
//         <img src={assets.contact_img} className='w-full md:max-w-[480px]'/>
//         <div className='flex flex-col justify-center items-start gap-6'>
//             <p className='text-xl font-semibold'>Our Store</p>
//             <p className='text-gray-500'>123 Street Name, City, Country <br /></p>
//             <p className='text-gray-500'>Tel: +1 234 567 890 <br /> Email: contact@example.com</p>
//             <p className='font-semibold text-xl text-gray-600'></p>
//             <p className='text-gray-500'>Learn more about our teams and job openings</p>
//             <button className='border border-black text-black px-8 py-4 text-sm hover:bg-black transition-all duration-500 hover:text-white'>Explore</button>
//             <p></p>
//         </div>
//       </div>
//       <NewsletterBox/>
//     </div>
//   )
// }

// export default Contact

import React, { useState } from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'
import { toast } from 'react-toastify' // Import was missing
import axios from "axios"

// Using individual imports to reduce bundle size
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa"

const Contact = () => {
  // Using useState instead of react-hook-form to avoid dependency issues
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const validateForm = () => {
    const newErrors = {}
    if (!formData.username.trim()) newErrors.username = "Name is required"
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }
    if (!formData.message.trim()) newErrors.message = "Message is required"
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setIsSubmitting(true)
    
    const userInfo = {
      access_key: "d6d6f77c-064b-4d24-8ba6-bec3ef88f52c",
      name: formData.username,
      email: formData.email,
      message: formData.message,
    }
    
    try {
      await axios.post("https://api.web3forms.com/submit", userInfo)
      toast.success("Message sent successfully")
      // Reset form after successful submission
      setFormData({ username: '', email: '', message: '' })
    } catch (error) {
      toast.error("An error occurred while sending your message")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="w-full">
      <div className="text-center py-12 border-t border-gray-200">
        <Title text1={'CONTACT'} text2={'US'} />
      </div>

      {/* Main content section with improved responsive layout */}
      <div className="container mx-auto px-4 lg:px-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Store image section */}
          <div className="flex justify-center">
            <img 
              src={assets.contact_img} 
              alt="Our Store" 
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
          </div>

          {/* Store info section */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-8">Contact Information</h3>
            <ul className="space-y-6 mb-8">
              <li className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                  <FaPhone className="text-red-500" />
                </div>
                <div>
                  <p className="text-gray-600 text-lg">+91 8264928857</p>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
                  <FaEnvelope className="text-pink-500" />
                </div>
                <div>
                  <p className="text-gray-600 text-lg">Info@zestfoods.in</p>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <FaMapMarkerAlt className="text-green-500" />
                </div>
                <div>
                  <p className="text-gray-600 text-lg">
                    b, A-77, Siddharth Nagar Society, Nana Varachha, Surat, Gujarat 395006
                  </p>
                </div>
              </li>
            </ul>
                
            <div className="mt-8">
              <div className="rounded-lg overflow-hidden shadow-md">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.6922664826286!2d72.89177571493354!3d21.206396585902705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f66b2418d8b%3A0x5b625b1ce55c6a9e!2sSiddharth%20Nagar%20Society%2C%20Nana%20Varachha%2C%20Surat%2C%20Gujarat%20395006!5e0!3m2!1sen!2sin!4v1652967734831!5m2!1sen!2sin" 
                  className="w-full h-72 rounded-lg"
                  title="Store Location"
                  loading="lazy"
                  style={{ border: 0 }}
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Contact form section - improved styling but same structure */}
          <div className="bg-gray-50 rounded-lg shadow-md p-8 lg:col-span-2 md:col-span-2">
            <h2 className="text-2xl font-bold text-center mb-8">Send Us a Message</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                  {errors.username && (
                    <p className="mt-2 text-sm text-red-500">{errors.username}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                  {errors.email && (
                    <p className="mt-2 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter your message"
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                  {errors.message && (
                    <p className="mt-2 text-sm text-red-500">{errors.message}</p>
                  )}
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition duration-300 disabled:opacity-70 disabled:cursor-not-allowed font-medium text-lg"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
              
              {/* Contact image */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <img src={assets.whoweare} alt="About Us" className="w-full h-auto rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <NewsletterBox />
    </div>
  )
}

export default Contact
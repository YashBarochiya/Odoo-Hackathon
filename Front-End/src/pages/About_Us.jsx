import React from 'react'
import NewsletterBox from '../components/NewsletterBox'
import { assets } from '../assets/assets'

const About_Us = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* First Section - Who We Are (duplicate content) */}
      <div className="flex flex-col md:flex-row items-center mb-16 gap-8">
        <img src={assets.a1} alt="About Zest Spices" className="w-full md:w-1/2 rounded-lg shadow-md object-cover h-64 md:h-auto" />
        <div className="w-full md:w-1/2 space-y-4">
          <h1 className="text-xl md:text-2xl font-bold text-gray-800">WHO WE ARE</h1>
          <p className="text-gray-600 leading-relaxed">
            ZEST, a distinguished brand in the manufacturing, trading, and export of premium spices and seasonings, is a part of R.R Enterprise, managed by the experienced mother-son duo, Mr. Rohan Vaghani and Mrs. Rasila Vaghani, who bring over 6 years of expertise in the food industry. With a strong commitment to quality and innovation, ZEST has established a significant Supply of products in Four countries, delivering a wide range of superior products that cater to global culinary needs. Backed by R.R Enterprise's leadership, ZEST continues to uphold its reputation for excellence in the spice market.
          </p>
        </div>
      </div>



      {/* Our Journey */}
      <div className="flex flex-col md:flex-row-reverse items-center mb-16 gap-8">
        <img src={assets.a2} alt="Our Journey" className="w-full md:w-1/2 rounded-lg shadow-md object-cover h-64 md:h-auto" />
        <div className="w-full md:w-1/2 space-y-4">
          <h1 className="text-xl md:text-2xl font-bold text-gray-800">Our Journey</h1>
          <p className="text-gray-600 leading-relaxed">
            Founded in 2017, R.R Enterprise laid the groundwork for a vibrant future in the food industry. In 2023, ZEST emerged as a distinguished brand under its umbrella, driven by the expertise of the passionate mother-son duo, Mr. Rohan Vaghani and Mrs. Rasila Vaghani. With over six years of experience, they envisioned a brand dedicated to quality and innovation in the realm of spices and seasonings.
            <br /><br />
            ZEST has quickly made its mark in the manufacturing, trading, and export of premium spices, establishing a significant presence in four countries. Our commitment to excellence ensures that we deliver a diverse range of superior products, catering to the culinary needs of customers around the globe.
            <br /><br />
            Backed by the strong leadership of R.R Enterprise, ZEST is dedicated to upholding its reputation for quality and flavor. As we continue to grow, we invite you to join us on this exciting journey, where every spice tells a story and every dish becomes a celebration of taste!
          </p>
        </div>
      </div>

      {/* Why Choose ZestSpices */}
      <div className="flex flex-col md:flex-row items-center mb-16 gap-8">
        <img src={assets.a3} alt="Why Choose ZestSpices" className="w-full md:w-1/2 rounded-lg shadow-md object-cover h-64 md:h-auto" />
        <div className="w-full md:w-1/2 space-y-4">
          <h1 className="text-xl md:text-2xl font-bold text-gray-800">Why Choose ZestSpices?</h1>
          <ul className="text-gray-600 leading-relaxed list-disc pl-5 space-y-2">
            <li><span className="font-semibold">Fresh & Quality Products:</span> We carefully source fresh produce, premium meats, dairy, and pantry essentials from trusted suppliers.</li>
            <li><span className="font-semibold">Convenience at Your Fingertips:</span> Browse and shop from the comfort of your home, and enjoy quick, hassle-free delivery.</li>
            <li><span className="font-semibold">Extensive Selection:</span> From organic and local options to international brands, ZestSpices offers a diverse range of grocery products.</li>
            <li><span className="font-semibold">Affordable Prices:</span> We are committed to offering you top-quality groceries at prices that fit your budget.</li>
          </ul>
        </div>
      </div>

      {/* How ZestSpices Works */}
      <div className="flex flex-col md:flex-row-reverse items-center mb-16 gap-8">
        <img src={assets.a4} alt="How ZestSpices Works" className="w-full md:w-1/2 rounded-lg shadow-md object-cover h-64 md:h-auto" />
        <div className="w-full md:w-1/2 space-y-4">
          <h1 className="text-xl md:text-2xl font-bold text-gray-800">How ZestSpices Works:</h1>
          <ul className="text-gray-600 leading-relaxed list-disc pl-5 space-y-2">
            <li><span className="font-semibold">Sourcing:</span> We carefully select the finest raw spices from trusted farms, ensuring top-quality ingredients.</li>
            <li><span className="font-semibold">Processing:</span> Our spices are processed using state-of-the-art technology, maintaining purity and preserving flavor.</li>
            <li><span className="font-semibold">Quality Control:</span> Each batch undergoes rigorous quality checks to meet international standards of freshness and consistency.</li>
            <li><span className="font-semibold">Packaging:</span> Our products are hygienically packed to lock in freshness, ensuring they reach you in perfect condition.</li>
            <li><span className="font-semibold">Distribution:</span> With a robust supply chain, we efficiently export our products to six countries around the world.</li>
            <li><span className="font-semibold">Customer Delivery:</span> We ensure timely and reliable delivery, bringing ZEST spices from our facilities straight to your kitchen.</li>
          </ul>
        </div>
      </div>

      {/* Our Commitment to Safety */}
      <div className="flex flex-col md:flex-row items-center mb-16 gap-8">
        <img src={assets.a5} alt="Our Commitment to Safety" className="w-full md:w-1/2 rounded-lg shadow-md object-cover h-64 md:h-auto" />
        <div className="w-full md:w-1/2 space-y-4">
          <h1 className="text-xl md:text-2xl font-bold text-gray-800">Our Commitment to Safety:</h1>
          <p className="text-gray-600 leading-relaxed">
            At ZEST, we prioritize safety by following strict quality standards and hygiene protocols, sourcing certified and traceable raw materials, and ensuring safe packaging to prevent contamination. We comply with international food safety regulations and continually enhance our processes to meet industry standards and exceed customer expectations.
          </p>
        </div>
      </div>

      {/* Contact Us */}
      <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h1 className="text-xl md:text-2xl font-bold text-gray-800">Contact Us:</h1>
          <p className="text-gray-600 leading-relaxed">
            Have questions or need assistance? We're here to help! Reach out to our friendly customer service team via email at <a href="mailto:info@zestfoods.in" className="text-blue-600 hover:underline">info@zestfoods.in</a> or call us at <a href="tel:+919727547477" className="text-blue-600 hover:underline">+91 9727547477</a>. We're excited to serve you!
          </p>
        </div>
      </div>

      {/* Join the ZestSpices Community */}
    {/* Join the ZestSpices Community */}
<div className="mb-16 bg-gradient-to-r from-purple-900 to-red-500 rounded-lg overflow-hidden text-white">
  <div className="p-8 bg-black bg-opacity-30">
    <h1 className="text-xl md:text-2xl font-bold mb-4">7. Join the ZestSpices Community:</h1>
    <p className="text-lg mb-8">
      Become a part of the ZestSpices community! Follow us on social media for the latest news, tips, and special offers. Sign up for our newsletter to stay informed about new products, promotions, and exciting updates.
    </p>
    
    <div className="flex justify-center gap-8">
      {/* Facebook Icon */}
      <a href="#" className="hover:opacity-80">
        <div className="bg-white rounded-md p-3 w-16 h-16 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-8 h-8 text-gray-700">
            <path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
          </svg>
        </div>
      </a>
      
      {/* Twitter Icon */}
      <a href="#" className="hover:opacity-80">
        <div className="bg-white rounded-md p-3 w-16 h-16 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-8 h-8 text-gray-700">
            <path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/>
          </svg>
        </div>
      </a>
      
      {/* Instagram Icon */}
      <a href="#" className="hover:opacity-80">
        <div className="bg-white rounded-md p-3 w-16 h-16 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-8 h-8 text-gray-700">
            <path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
          </svg>
        </div>
      </a>
    </div>
  </div>
</div>

      {/* Newsletter Box */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <NewsletterBox />
      </div>
    </div>
  )
}

export default About_Us
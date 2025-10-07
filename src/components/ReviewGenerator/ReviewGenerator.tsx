import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, ExternalLink, Star, MapPin } from 'lucide-react';
import toast from 'react-hot-toast';

const ReviewGenerator: React.FC = () => {
  const [businessName, setBusinessName] = useState('');
  const [location, setLocation] = useState('');
  const [generatedLinks, setGeneratedLinks] = useState<any[]>([]);

  const generateReviewLinks = () => {
    if (!businessName.trim()) {
      toast.error('Please enter your business name');
      return;
    }

    const encodedBusinessName = encodeURIComponent(businessName.trim());
    const encodedLocation = location.trim() ? encodeURIComponent(location.trim()) : '';
    
    const links = [
      {
        platform: 'Google Reviews',
        url: `https://search.google.com/local/writereview?placeid=${encodedBusinessName.replace(/\s+/g, '')}`,
        description: 'Direct link to leave a Google review',
        icon: '🔍'
      },
      {
        platform: 'Google Business Profile',
        url: `https://www.google.com/search?q=${encodedBusinessName}${encodedLocation ? '+' + encodedLocation : ''}+reviews`,
        description: 'Search for your business to find review options',
        icon: '🏢'
      }
    ];

    setGeneratedLinks(links);
    toast.success('Review links generated successfully!');
  };

  const copyToClipboard = async (text: string, platform: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success(`${platform} link copied to clipboard!`);
    } catch (err) {
      toast.error('Failed to copy link');
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl mb-4">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-600 rounded-xl mb-4">
          <Star className="h-8 w-8 text-white" />
        </div>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Google Review Link Generator
        </h2>
        <p className="text-lg text-gray-600">
          Generate direct links to make it easy for customers to leave Google reviews
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="space-y-6">
          <div>
            <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-2">
              Business Name *
            </label>
            <input
              type="text"
              id="businessName"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              placeholder="Enter your business name"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
            />
          </div>

          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
              Location (Optional)
            </label>
            <div className="relative">
              <input
                type="text"
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="City, State or Address"
                className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
              />
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
          </div>

          <button
            onClick={generateReviewLinks}
            className="w-full bg-teal-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-teal-700 hover:shadow-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2"
          >
            <Star className="h-5 w-5" />
            <span>Generate Review Links</span>
          </button>

          {generatedLinks.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold text-gray-900 text-center">Your Review Links</h3>
              {generatedLinks.map((link, index) => (
                <div key={index} className="bg-white p-6 rounded-xl border border-gray-200">
                  <div className="flex items-start space-x-3 mb-4">
                    <span className="text-2xl">{link.icon}</span>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">{link.platform}</h4>
                      <p className="text-sm text-gray-600">{link.description}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 mb-3">
                    <input
                      type="text"
                      value={link.url}
                      readOnly
                      className="flex-1 px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm"
                    />
                    <button
                      onClick={() => copyToClipboard(link.url, link.platform)}
                      className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors flex items-center space-x-1"
                    >
                      <Copy className="h-4 w-4" />
                      <span>Copy</span>
                    </button>
                  </div>
                  
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>Test Link</span>
                  </a>
                </div>
              ))}
              
              <div className="bg-blue-50 p-4 rounded-xl">
                <h4 className="font-semibold text-blue-900 mb-2">How to Use These Links:</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Share these links with satisfied customers via email, SMS, or social media</li>
                  <li>• Add QR codes with these links to receipts, business cards, or flyers</li>
                  <li>• Include them in follow-up emails after completing services</li>
                  <li>• Post them on your website or social media profiles</li>
                </ul>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReviewGenerator;
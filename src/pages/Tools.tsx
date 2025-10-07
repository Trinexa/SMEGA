import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import ReviewGenerator from '../components/ReviewGenerator/ReviewGenerator';

const Tools: React.FC = () => {
  const otherTools = [
    {
      title: 'Website Speed Test',
      description: 'Analyze your website performance and get optimization recommendations',
      icon: '⚡',
      status: 'Coming Soon'
    },
    {
      title: 'SEO Audit Tool',
      description: 'Comprehensive SEO analysis to improve your search rankings',
      icon: '🔍',
      status: 'Coming Soon'
    },
    {
      title: 'Social Media Analytics',
      description: 'Track and analyze your social media performance across platforms',
      icon: '📊',
      status: 'Coming Soon'
    },
    {
      title: 'Competitor Analysis',
      description: 'Analyze your competitors\' digital strategies and find opportunities',
      icon: '🎯',
      status: 'Coming Soon'
    },
    {
      title: 'Email Marketing ROI Calculator',
      description: 'Calculate the potential return on investment for email campaigns',
      icon: '📧',
      status: 'Coming Soon'
    },
    {
      title: 'Business Name Generator',
      description: 'Generate creative and available business names for your startup',
      icon: '💡',
      status: 'Coming Soon'
    }
  ];

  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Free Business Tools
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Powerful tools to help grow your business. Get insights, generate content, 
              and optimize your online presence with our free utilities designed specifically for SMEs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Google Review Link Generator */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <ReviewGenerator />
          </motion.div>
        </div>
      </section>

      {/* Other Tools Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">More Tools Coming Soon</h2>
            <p className="text-xl text-gray-600">
              We're constantly developing new tools to help your business succeed in the digital world
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherTools.map((tool, index) => (
              <motion.div
                key={tool.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg relative overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-4">{tool.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{tool.title}</h3>
                <p className="text-gray-600 mb-4">{tool.description}</p>
                <div className="absolute top-4 right-4">
                  <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded-full">
                    {tool.status}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 opacity-20"></div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-16"
          >
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Request a Custom Tool</h3>
              <p className="text-gray-600 mb-6">
                Need a specific tool for your business? Let us know and we'll consider building it!
              </p>
              <a
                href="mailto:hello@digitalpro.com?subject=Custom Tool Request"
                href="mailto:hello@conseil.agency?subject=Custom Tool Request"
                className="inline-flex items-center space-x-2 bg-teal-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-teal-700 hover:shadow-lg transition-all duration-200 transform hover:scale-105"
              >
                <span>Contact Us</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Tools;
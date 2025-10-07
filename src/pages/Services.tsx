import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Globe, Search, Smartphone, ShoppingCart, ChartBar as BarChart, Palette, Code, TrendingUp, Users, CircleCheck as CheckCircle, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Custom websites and web applications built with cutting-edge technologies',
      features: ['Responsive Design', 'Fast Loading', 'SEO Optimized', 'Secure & Scalable'],
      price: 'Starting at $2,999',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Search,
      title: 'SEO & Digital Marketing',
      description: 'Comprehensive digital marketing strategies to increase your online visibility',
      features: ['Keyword Research', 'Content Strategy', 'Link Building', 'Analytics & Reporting'],
      price: 'Starting at $899/month',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android',
      features: ['Native Performance', 'Cross-Platform', 'App Store Optimization', 'Push Notifications'],
      price: 'Starting at $4,999',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Solutions',
      description: 'Complete online stores with payment integration and inventory management',
      features: ['Payment Integration', 'Inventory Management', 'Order Tracking', 'Customer Support'],
      price: 'Starting at $3,499',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: BarChart,
      title: 'Analytics & Optimization',
      description: 'Data-driven insights to optimize your digital presence and marketing ROI',
      features: ['Performance Tracking', 'Conversion Optimization', 'A/B Testing', 'Custom Reports'],
      price: 'Starting at $599/month',
      color: 'from-teal-500 to-teal-600'
    },
    {
      icon: Palette,
      title: 'Brand & Design',
      description: 'Professional branding and visual identity that sets you apart',
      features: ['Logo Design', 'Brand Guidelines', 'Marketing Materials', 'UI/UX Design'],
      price: 'Starting at $1,499',
      color: 'from-pink-500 to-pink-600'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Strategy',
      description: 'We analyze your business goals, target audience, and competition to create a tailored strategy.',
      icon: Users
    },
    {
      step: '02',
      title: 'Design & Development',
      description: 'Our team creates and develops your solution using the latest technologies and best practices.',
      icon: Code
    },
    {
      step: '03',
      title: 'Launch & Optimization',
      description: 'We launch your project and continuously optimize for better performance and results.',
      icon: TrendingUp
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
              Our Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive digital solutions designed specifically for small and medium enterprises. 
              Everything you need to succeed online, delivered with expertise and care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl mb-6`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-900">{service.price}</span>
                  <Link
                    to="/proposal"
                    className="flex items-center space-x-2 text-teal-600 hover:text-teal-700 font-medium transition-colors"
                  >
                    <span>Get Quote</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600">How we deliver exceptional results for your business</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="relative mb-8">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-teal-600 rounded-full mb-4">
                    <step.icon className="h-10 w-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-white border-4 border-teal-100 rounded-full w-12 h-12 flex items-center justify-center">
                    <span className="text-sm font-bold text-teal-600">{step.step}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss how we can help your business achieve its digital goals.
            </p>
            <Link
              to="/proposal"
              className="bg-teal-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-teal-700 hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2"
            >
              <span>Get Your Free Proposal</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
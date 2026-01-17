import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CircleCheck as CheckCircle, Star, TrendingUp, Users, Award, Globe, Smartphone, Palette } from 'lucide-react';

const Home: React.FC = () => {
  const [hoveredTestimonial, setHoveredTestimonial] = useState<number | null>(null);
  const services = [
    {
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies to grow your business',
      icon: Smartphone,
      features: ['Social Media', 'PPC Campaigns', 'Content Marketing', 'Analytics']
    },
    {
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies',
      icon: Globe,
      features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Secure']
    },
    {
      title: 'Brand Design',
      description: 'Professional branding and visual identity for your business',
      icon: Palette,
      features: ['Logo Design', 'Brand Guidelines', 'Marketing Materials', 'Web Design']
    }
  ];

  const stats = [
    { label: 'Happy Clients', value: '150+', icon: Users },
    { label: 'Projects Completed', value: '300+', icon: CheckCircle },
    { label: 'Years Experience', value: '2+', icon: Award },
    { label: 'Revenue Growth', value: '250%', icon: TrendingUp }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      rating: 5,
      comment: 'DigitalPro transformed our online presence completely. Our revenue increased by 180% within 6 months!'
    },
    {
      name: 'Mike Chen',
      company: 'GrowthCorp',
      rating: 5,
      comment: 'Professional, reliable, and results-driven. They delivered exactly what we needed and more.'
    },
    {
      name: 'Emma Davis',
      company: 'LocalBiz Solutions',
      rating: 5,
      comment: 'The best investment we made for our business. Highly recommend their services!'
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Transform Your Business with
                <span className="bg-gradient-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent"> Global </span>
                Digital Expertise
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We focus on real business growth — not vanity metrics. Backed by Google Singapore training and experience with 200+ brands, we deliver proven strategies that drive measurable results. Partner with us if you’re serious about scaling your business.

              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/94776632155"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-teal-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-teal-700 hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center"
                >
                  Get Free Consultation
                </a>
                {/* <Link
                  to="/case-studies"
                  className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:border-teal-600 hover:text-teal-600 transition-all duration-300 text-center flex items-center justify-center space-x-2"
                >
                  <span>View Our Work</span>
                  <ArrowRight className="h-5 w-5" />
                </Link> */}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                <img
                  src="/team/Team.jpeg"
                  alt="Digital Agency Team"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center space-x-3">
                    <div className="bg-green-100 p-2 rounded-full">
                      <TrendingUp className="h-6 w-6 text-teal-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Average Growth</p>
                      <p className="text-2xl font-bold text-gray-900">250%</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-teal-100 rounded-full mb-4">
                  <stat.icon className="h-6 w-6 text-teal-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Logo Section */}
      <section className="py-16 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Clients</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Trusted by leading brands worldwide to deliver exceptional digital solutions
            </p>
          </motion.div>
          
          <div className="relative">
            <div className="flex overflow-hidden">
              <div className="flex animate-scroll">
                {[
                  { name: 'Moose', logo: 'Moose logo.jpg' },
                  { name: 'Pan Global', logo: 'Pan Global Logo original.png' },
                  { name: 'PickMe', logo: 'pick_me.png' },
                  { name: 'Pizza Hut', logo: 'pizza-hut logo.png' },
                  { name: 'Burger King', logo: 'burger king logo.png' },
                  { name: 'Softlogic Glomark', logo: 'Softlogic Glomark.jpg' },
                  { name: 'Spa Ceylon', logo: 'spa ceylon.jpg' },
                  { name: 'Teardrop Hotels', logo: 'Teardrops logo.jpg' },
                  { name: 'Zigzag', logo: 'Zig zag.png' },
                  { name: 'Ariya Foods', logo: 'Ariya foods.jpg' },
                  { name: 'Cargills', logo: 'Cargills logo.png' },
                  { name: 'FMP', logo: 'FMP logo.png' },
                  { name: 'Fours', logo: 'Fours.png' },
                  { name: 'GK Homes', logo: 'GK HOMES GOLD 2.png' },
                  { name: 'Global Mark', logo: 'GLOBAL MARK NEW PNG.png' },
                  { name: 'Hilton', logo: 'Hilton logo.jpg' },
                  { name: 'Keells', logo: 'keells logo.png' },
                  { name: 'McDonalds', logo: 'McDonalds-Logo.png' },
                  { name: 'Mintpay', logo: 'Mintpay logo.jpg' },
                  { name: 'Quatros', logo: 'Quatros LOGO.jpg' },
                ].map((client, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 mx-8"
                  >
                    <img
                      src={`/clients/${client.logo}`}
                      alt={client.name}
                      className="h-20 w-auto object-contain"
                      style={{ transform: 'rotate(270deg)' }}
                    />
                  </div>
                ))}
                {/* Duplicate for seamless loop */}
                {[
                  { name: 'Moose', logo: 'Moose logo.jpg' },
                  { name: 'Pan Global', logo: 'Pan Global Logo original.png' },
                  { name: 'PickMe', logo: 'pick_me.png' },
                  { name: 'Pizza Hut', logo: 'pizza-hut logo.png' },
                  { name: 'Burger King', logo: 'burger king logo.png' },
                  { name: 'Softlogic Glomark', logo: 'Softlogic Glomark.jpg' },
                  { name: 'Spa Ceylon', logo: 'spa ceylon.jpg' },
                  { name: 'Teardrop Hotels', logo: 'Teardrops logo.jpg' },
                  { name: 'Zigzag', logo: 'Zig zag.png' },
                  { name: 'Ariya Foods', logo: 'Ariya foods.jpg' },
                  { name: 'Cargills', logo: 'Cargills logo.png' },
                  { name: 'FMP', logo: 'FMP logo.png' },
                  { name: 'Fours', logo: 'Fours.png' },
                  { name: 'GK Homes', logo: 'GK HOMES GOLD 2.png' },
                  { name: 'Global Mark', logo: 'GLOBAL MARK NEW PNG.png' },
                  { name: 'Hilton', logo: 'Hilton logo.jpg' },
                  { name: 'Keells', logo: 'keells logo.png' },
                  { name: 'McDonalds', logo: 'McDonalds-Logo.png' },
                  { name: 'Mintpay', logo: 'Mintpay logo.jpg' },
                  { name: 'Quatros', logo: 'Quatros LOGO.jpg' },
                ].map((client, index) => (
                  <div
                    key={`duplicate-${index}`}
                    className="flex-shrink-0 mx-8"
                  >
                    <img
                      src={`/clients/${client.logo}`}
                      alt={client.name}
                      className="h-20 w-auto object-contain"
                      style={{ transform: 'rotate(270deg)' }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Global-standard digital solutions designed specifically for ambitious growing businesses
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="mb-4">
                  <service.icon className="h-12 w-12 text-gray-900" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Success stories from businesses we've transformed globally
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                onMouseEnter={() => setHoveredTestimonial(index)}
                onMouseLeave={() => setHoveredTestimonial(null)}
                className={`bg-gray-50 p-6 rounded-xl transition-all duration-300 cursor-pointer ${
                  hoveredTestimonial === null 
                    ? 'blur-0 scale-100' 
                    : hoveredTestimonial === index 
                      ? 'blur-0 scale-105 shadow-2xl bg-white z-10' 
                      : 'blur-sm scale-95 opacity-50'
                }`}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">"{testimonial.comment}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-600 text-sm">{testimonial.company}</p>
                </div>
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
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join ambitious businesses worldwide that have achieved remarkable growth with our global expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/proposal"
                className="bg-teal-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-teal-700 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Start Your Project
              </Link>
              <a
                href="https://wa.me/94776632155"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Talk to Expert
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  const team = [
    {
      name: 'Gamini Kuruppu',
      role: 'Managing Director',
      image: '/team/Director Gamini.jpeg',
      bio: 'Leading Conseil with strategic vision and expertise in digital transformation for growing businesses.'
    },
    {
      name: 'Kavishka Dissanayake',
      role: 'Digital Marketing Executive',
      image: '/team/kavishka.jpg',
      bio: 'Driving impactful marketing strategies and campaigns that deliver measurable results for our clients.'
    },
    {
      name: 'Irushani Lakshika',
      role: 'Creative Designer',
      image: '/team/Irushani.jpg',
      bio: 'Crafting visually stunning designs that bring brand stories to life and captivate audiences.'
    },    
    {
      name: 'Rithmi De Silva',
      role: 'Project Manager',
      image: '/team/Rithmi.jpg',
      bio: 'Ensuring seamless project delivery and client satisfaction through meticulous coordination and planning.'
    },
    {
      name: 'Ashen Perera',
      role: 'HR and Finance Manager',
      image: '/team/Ashen.jpg',
      bio: 'Managing our people and financial operations to create a thriving workplace and sustainable growth.'
    },

  ];

  const values = [
    {
      icon: Target,
      title: 'Mission',
      description: 'To empower brands with strategic, performance-driven marketing systems that fuel real business growth, blending creative storytelling with data-backed execution.'
    },
    {
      icon: Lightbulb,
      title: 'Vision',
      description: 'To become the most trusted growth partner in frontier and emerging markets, known for no-nonsense strategies, measurable impact, and long-term business value.'
    }
  ];

  const services = [
    'Omni-channel Digital Strategy – Cohesive, full-funnel strategies across Google, Meta, TikTok, and LinkedIn',
    'Paid Media Advertising – High-ROI campaigns that convert and scale',
    'Influencer Marketing – Trusted creator partnerships that spark engagement',
    'Content & Creative Design – Compelling visuals and messaging built to perform',
    'Email Marketing & CRM – Automated, personalized systems that build loyalty',
    'Video Production & Storytelling – Impactful narratives that capture attention and convert'
  ];

  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              About Us
            </h1>
            <h2 className="text-3xl font-bold text-teal-600 mb-6">
              A No-Nonsense Marketing Company
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-4">
              At Conseil LLC, we cut through the noise to deliver marketing that actually drives growth.
            </p>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Founded by a former Google ads professional trained by Google Singapore, we combine global 
              expertise with sharp local insight to help ambitious brands scale with clarity, strategy, and impact.
            </p>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mt-4">
              We've partnered with over <span className="font-bold text-teal-600">200 brands</span> spanning hospitality, 
              food & beverage, retail, corporate services, and transportation—delivering work that creates 
              <span className="font-bold"> measurable results, not vanity metrics</span>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Clients Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Clients</h2>
            <p className="text-2xl font-semibold text-teal-600 mb-6">Trusted by Ambitious Brands</p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We collaborate with startups and established leaders across Sri Lanka, the United Kingdom, 
              India, and the African region.
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mt-4">
              Our clients share one thing in common: <span className="font-bold">a drive to grow</span>.
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mt-2">
              We match that ambition with strategic thinking, performance-driven execution, and an obsession with results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Purpose</h2>
            <p className="text-xl text-gray-600">Mission & Vision</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-teal-100 rounded-full mb-4">
                  <value.icon className="h-7 w-7 text-teal-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Do</h2>
            <p className="text-2xl font-semibold text-teal-600 mb-6">Performance-Driven Marketing That Works</p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We don't just run campaigns — we build scalable marketing engines.
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mt-2">
              Our services cover the full digital growth spectrum:
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="grid grid-cols-1 gap-4">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start space-x-3 bg-gray-50 p-4 rounded-lg hover:bg-teal-50 transition-colors"
                >
                  <Zap className="h-6 w-6 text-teal-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700 text-lg">{service}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">
              The experts behind your growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 justify-items-center">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 w-full max-w-sm"
              >
                <div className="aspect-w-1 aspect-h-1">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-72 object-cover transition-all duration-300"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-teal-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Work With Us
            </h2>
            <p className="text-2xl font-semibold text-white mb-6">
              Let's Build Something That Works
            </p>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Ready to stop chasing likes and start driving growth?
            </p>
            <p className="text-lg text-white/90 mb-8">
              Partner with Conseil LLC and build a marketing system designed for measurable results.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-teal-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-teal-700 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Start Your Growth Journey →
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
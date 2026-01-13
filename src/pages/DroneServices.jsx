import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Camera, Video, Building, Search, CheckCircle, Plane } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DroneServices = () => {
  const services = [
    {
      icon: <Building className="w-16 h-16" />,
      title: 'Real Estate',
      description: 'Stunning aerial photography and video tours that showcase properties from unique perspectives',
      features: [
        '4K video tours',
        'High-res photography',
        'Virtual walkthroughs',
        'Twilight shots',
      ],
    },
    {
      icon: <Search className="w-16 h-16" />,
      title: 'Inspections',
      description: 'Safe and efficient aerial inspections for roofs, towers, and hard-to-reach areas',
      features: [
        'Detailed reporting',
        'Thermal imaging',
        'Safety compliance',
        'Quick turnaround',
      ],
    },
    {
      icon: <Video className="w-16 h-16" />,
      title: 'Marketing & Events',
      description: 'Captivating aerial content for marketing campaigns, events, and promotional materials',
      features: [
        'Event coverage',
        'Promotional videos',
        'Social media content',
        'Brand storytelling',
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Drone Services - Aerial Photography & Inspections | 3d60°</title>
        <meta name="description" content="Professional aerial drone services with DJI drone. 4K video and photography for real estate, inspections, and marketing. Licensed and insured." />
      </Helmet>

      <div className="min-h-screen">
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-900/20 via-slate-950 to-cyan-900/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Aerial Drone Services
              </h1>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Professional aerial photography and videography with cutting-edge DJI drone technology
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-blue-500 transition-all duration-300"
                >
                  <div className="text-blue-400 mb-6">
                    {service.icon}
                  </div>
                  <h2 className="text-2xl font-bold mb-4 text-white">
                    {service.title}
                  </h2>
                  <p className="text-slate-300 mb-6">
                    {service.description}
                  </p>
                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-slate-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Our Equipment
              </h2>
              <p className="text-slate-400 text-lg">
                Professional-grade DJI drone for stunning results
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <Plane className="w-12 h-12 text-blue-400" />
                  <h3 className="text-2xl font-bold text-white">DJI Professional Drone</h3>
                </div>
                <p className="text-slate-300 mb-6">
                  Industry-leading drone technology for exceptional aerial content
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-slate-300">4K video recording</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-slate-300">High-resolution photography</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-slate-300">Gimbal stabilization</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-slate-300">Extended flight time</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-slate-300">Obstacle avoidance</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-slate-300">GPS positioning</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Why Aerial Content Matters
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Camera className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Unique Perspectives</h3>
                      <p className="text-slate-300">Showcase your property or project from angles impossible with traditional photography</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Video className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Engaging Content</h3>
                      <p className="text-slate-300">Aerial footage captures attention and keeps viewers engaged longer</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Building className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Professional Image</h3>
                      <p className="text-slate-300">Elevate your brand with high-quality aerial content that stands out</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <img className="rounded-xl shadow-2xl w-full h-auto" alt="Aerial drone capturing stunning 4K footage" src="https://images.unsplash.com/photo-1521405924368-64c5b84bec60" />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Our Process
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { step: '1', title: 'Planning', desc: 'We discuss your needs and plan the shoot' },
                { step: '2', title: 'Flight', desc: 'Professional drone operation and capture' },
                { step: '3', title: 'Editing', desc: 'Post-production and color grading' },
                { step: '4', title: 'Delivery', desc: 'High-quality files delivered promptly' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-300">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/20 to-cyan-900/20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Ready to Elevate Your Content?
              </h2>
              <p className="text-xl text-slate-300 mb-8">
                Let's capture stunning aerial footage for your project
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-lg px-8 py-6">
                  Get a Quote
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DroneServices;
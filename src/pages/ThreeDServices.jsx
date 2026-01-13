import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Box as Cube, Layers, Printer, Zap, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ThreeDServices = () => {
  const services = [
    {
      icon: <Cube className="w-16 h-16" />,
      title: '3D Design',
      description: 'Transform your concepts into detailed 3D models with our expert design team',
      features: [
        'Custom CAD modeling',
        'Product visualization',
        'Technical drawings',
        'Design optimization',
      ],
    },
    {
      icon: <Layers className="w-16 h-16" />,
      title: '3D Prototyping',
      description: 'Rapid prototyping to test and refine your designs before production',
      features: [
        'Functional prototypes',
        'Design iteration',
        'Material testing',
        'Quality assurance',
      ],
    },
    {
      icon: <Printer className="w-16 h-16" />,
      title: '3D Printing',
      description: 'High-quality prints using state-of-the-art Creality K1 and Ender 3v2 printers',
      features: [
        'High-speed printing',
        'Multiple materials',
        'Precision accuracy',
        'Large build volume',
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>3D Services - Design, Prototyping & Printing | 3d60°</title>
        <meta name="description" content="Professional 3D design, prototyping, and printing services using Creality K1 and Ender 3v2 printers. Fast, reliable, and high-quality results." />
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
                Full 3D Services
              </h1>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                From concept to creation, we provide comprehensive 3D solutions for all your needs
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
                Industry-leading 3D printers for exceptional results
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <Zap className="w-12 h-12 text-yellow-400" />
                  <h3 className="text-2xl font-bold text-white">Creality K1</h3>
                </div>
                <p className="text-slate-300 mb-4">
                  High-speed 3D printer delivering exceptional quality at incredible speeds
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-slate-300">600mm/s max speed</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-slate-300">220x220x250mm build volume</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-slate-300">Auto-leveling system</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <Printer className="w-12 h-12 text-blue-400" />
                  <h3 className="text-2xl font-bold text-white">Ender 3v2</h3>
                </div>
                <p className="text-slate-300 mb-4">
                  Reliable workhorse for consistent, high-quality prints
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-slate-300">Proven reliability</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-slate-300">220x220x250mm build volume</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-slate-300">Silent operation</span>
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
                <img className="rounded-xl shadow-2xl w-full h-auto" alt="3D printer creating detailed prototype" src="https://images.unsplash.com/photo-1582879304034-43ab963e5edc" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  The 3D Process
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 text-white font-bold">
                      1
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Consultation</h3>
                      <p className="text-slate-300">We discuss your project requirements and vision</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 text-white font-bold">
                      2
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Design & Modeling</h3>
                      <p className="text-slate-300">Our team creates detailed 3D models based on your specs</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 text-white font-bold">
                      3
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Prototyping</h3>
                      <p className="text-slate-300">We produce prototypes for testing and refinement</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 text-white font-bold">
                      4
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Final Production</h3>
                      <p className="text-slate-300">High-quality prints delivered on time</p>
                    </div>
                  </div>
                </div>
              </motion.div>
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
                Ready to Bring Your Design to Life?
              </h2>
              <p className="text-xl text-slate-300 mb-8">
                Upload your 3D model or let us design it for you
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

export default ThreeDServices;
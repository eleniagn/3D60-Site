import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Box as Cube, Plane, Printer, Camera, ArrowRight, Clapperboard } from 'lucide-react';
import { Button } from '@/components/ui/button';
const Home = () => {
  const services = [{
    icon: <Cube className="w-12 h-12" />,
    title: '3D Design',
    description: 'Custom 3D modeling and design solutions tailored to your vision',
    link: '/3d-services'
  }, {
    icon: <Printer className="w-12 h-12" />,
    title: '3D Printing',
    description: 'High-speed printing with Creality K1 and reliable Ender 3v2',
    link: '/3d-services'
  }, {
    icon: <Clapperboard className="w-12 h-12" />,
    title: '3D Animation',
    description: 'Conceptual and realistic renders that fit your needs',
    link: '/3d-services'
  }, {
    icon: <Camera className="w-12 h-12" />,
    title: 'Architectual Renders',
    description: 'Professional concepts and realistic renders for architectual projects',
    link: '/3d-services'
  }];
  return <>
      <Helmet>
        <title>3d60° - Professional 3D Services</title>
        <meta name="description" content="Leading provider of 3D design, prototyping and printing services. Get your quote today!" />
      </Helmet>

      <div className="relative overflow-hidden">
        <section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-slate-950 to-cyan-900/20" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSg1OSwgMTMwLCAyNDYsIDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-40" />
          
          <div className="relative max-w-5xl mx-auto text-center z-10">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8
          }}>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Transform Your Vision Into Reality
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">Professional 3D services for businesses that demand excellence</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-lg px-8 py-6">
                    Get a Quote
                    <ArrowRight className="ml-2" />
                  </Button>
                </Link>
                <Link to="/portfolio">
                  <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-slate-600 hover:bg-slate-800">
                    View Portfolio
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
          <div className="max-w-7xl mx-auto">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Our Services
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                Comprehensive solutions for all your 3D needs
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => <motion.div key={index} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6,
              delay: index * 0.1
            }} whileHover={{
              y: -10
            }}>
                  <Link to={service.link}>
                    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 h-full hover:border-blue-500 transition-all duration-300 group">
                      <div className="text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-blue-400 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-slate-400">
                        {service.description}
                      </p>
                    </div>
                  </Link>
                </motion.div>)}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{
              opacity: 0,
              x: -30
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.8
            }}>
                <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Why Choose 3D⁶⁰?</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
                    <p className="text-slate-300">
                      <span className="font-semibold text-white">Cutting-Edge Technology:</span> High-speed Creality K1 and reliable Ender 3v2 printers
                    </p>
                  </div>
                  
                    
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
                    <p className="text-slate-300">
                      <span className="font-semibold text-white">Expert Team:</span> Experienced professionals dedicated to your success
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
                    <p className="text-slate-300">
                      <span className="font-semibold text-white">Fast Turnaround:</span> Quick delivery without compromising quality
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div initial={{
              opacity: 0,
              x: 30
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.8
            }} className="relative">
                <img className="rounded-xl shadow-2xl w-full h-auto" alt="3D printing technology showcase" src="https://horizons-cdn.hostinger.com/81a8bfd2-a209-4674-ac1b-ec683451e339/screenshot-2024-08-22-151117-DDQei.png" />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/20 to-cyan-900/20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.8
          }}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl text-slate-300 mb-8">Let's bring your ideas to life with our professional 3D services</p>
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-lg px-8 py-6">
                  Get a Free Quote
                  <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>;
};
export default Home;
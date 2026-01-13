import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('3d');

  const threeDProjects = [
    { title: 'Custom Prototype', category: 'Prototyping' },
    { title: 'Product Design', category: 'Design' },
    { title: 'Mechanical Part', category: 'Printing' },
    { title: 'Architectural Model', category: 'Design' },
    { title: 'Functional Prototype', category: 'Prototyping' },
    { title: 'Custom Component', category: 'Printing' },
  ];

  const droneProjects = [
    { title: 'Luxury Estate Tour', category: 'Real Estate' },
    { title: 'Commercial Inspection', category: 'Inspection' },
    { title: 'Event Coverage', category: 'Marketing' },
    { title: 'Property Showcase', category: 'Real Estate' },
    { title: 'Construction Progress', category: 'Inspection' },
    { title: 'Brand Campaign', category: 'Marketing' },
  ];

  return (
    <>
      <Helmet>
        <title>Portfolio - Our 3D & Drone Work | 3d60°</title>
        <meta name="description" content="Explore our portfolio of 3D design, prototyping, printing projects and stunning aerial drone photography and videography work." />
      </Helmet>

      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Our Portfolio
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Explore our latest projects showcasing the quality and creativity of our work
            </p>
          </motion.div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="3d" className="text-lg">3D Projects</TabsTrigger>
              <TabsTrigger value="drone" className="text-lg">Drone Work</TabsTrigger>
            </TabsList>

            <TabsContent value="3d">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {threeDProjects.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                    className="group cursor-pointer"
                  >
                    <div className="relative overflow-hidden rounded-xl bg-slate-800/50 border border-slate-700 hover:border-blue-500 transition-all duration-300">
                      <div className="aspect-video relative">
                        <img className="w-full h-full object-cover" alt={`3D ${project.category} project - ${project.title}`} src="https://images.unsplash.com/photo-1539586916228-3db588cc6f69" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                      </div>
                      <div className="p-6">
                        <span className="text-sm text-blue-400 font-semibold">{project.category}</span>
                        <h3 className="text-xl font-bold text-white mt-2 group-hover:text-blue-400 transition-colors">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="drone">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {droneProjects.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                    className="group cursor-pointer"
                  >
                    <div className="relative overflow-hidden rounded-xl bg-slate-800/50 border border-slate-700 hover:border-blue-500 transition-all duration-300">
                      <div className="aspect-video relative">
                        <img className="w-full h-full object-cover" alt={`Aerial drone ${project.category} - ${project.title}`} src="https://images.unsplash.com/photo-1594890807754-facbade53c52" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                      </div>
                      <div className="p-6">
                        <span className="text-sm text-cyan-400 font-semibold">{project.category}</span>
                        <h3 className="text-xl font-bold text-white mt-2 group-hover:text-cyan-400 transition-colors">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
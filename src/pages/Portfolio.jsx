import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('3d');
  const threeDProjects = [{
    title: 'Custom Design',
    category: 'Concept',
    image: 'https://www.dropbox.com/scl/fi/lmnqxtcultkkvg659j9yo/lion-medusa-BW-not-original.jpg?rlkey=ykza9xf15ybt11uih1qjzy4m8&st=13krtvmm&raw=1'
  }, {
    title: '3D Design',
    category: 'Modeling & Rendering',
    image: 'https://www.dropbox.com/scl/fi/axxkh8oi4367wis9yibgj/Blender-design.png?rlkey=wjwvxxb6fx7v0g4lx4chmmitk&st=s956w0xg&raw=1'
  }, {
    title: 'Implementation',
    category: '3D Printing',
    image: 'https://www.dropbox.com/scl/fi/06xos3wnl8penzf7tmxzu/Print-lion-snake.png?rlkey=lnelbk9lujkzxyyibkdelxe22&st=7a12iqrr&raw=1'
  }, {
    title: 'Architectural Model',
    category: 'Realistic Renders',
    image: 'https://www.dropbox.com/scl/fi/fr2p88aapqo9mumwfapho/Arch-design.png?rlkey=htucs70fqau9l9hgy7pe6hhcj&st=ukt2v5ff&raw=1'
  }];
  return <>
      <Helmet>
        <title>Portfolio - Our 3D Work | 3d60°</title>
        <meta name="description" content="Explore our portfolio of 3D design, prototyping, printing projects and stunning aerial drone photography and videography work." />
      </Helmet>

      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Our Portfolio
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Explore our latest projects showcasing the quality and creativity of our work
            </p>
          </motion.div>

          

            <div value="3d">
              <motion.div initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            duration: 0.5
          }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {threeDProjects.map((project, index) => <motion.div key={index} initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              delay: index * 0.1
            }} whileHover={{
              y: -10
            }} className="group cursor-pointer">
                    <div className="relative overflow-hidden rounded-xl bg-slate-800/50 border border-slate-700 hover:border-blue-500 transition-all duration-300">
                      <div className="aspect-video relative">
                        <img className="w-full h-full object-cover" alt={`3D ${project.category} project - ${project.title}`} src={project.image} />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                      </div>
                      <div className="p-6">
                        <span className="text-sm text-blue-400 font-semibold">{project.category}</span>
                        <h3 className="text-xl font-bold text-white mt-2 group-hover:text-blue-400 transition-colors">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                  </motion.div>)}
              </motion.div>
           </div>
        </div>
      </div>
    </>;
};
export default Portfolio;
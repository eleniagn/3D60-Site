import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact | 3d60°</title>
        <meta
          name="description"
          content="Contact 3d60° for 3D design, prototyping, printing and drone services."
        />
      </Helmet>

      <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Contact Us
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Reach out to discuss your project, request pricing, or ask any questions.
            </p>
          </motion.div>

          {/* CONTACT CARD */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-10"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* LEFT */}
              <div className="space-y-8">
                <h2 className="text-2xl font-semibold text-white">
                  Get in Touch
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-blue-400 mt-1" />
                    <div>
                      <p className="text-slate-400 text-sm">Email</p>
                      <a
                        href="mailto:3d60gr@gmail.com"
                        className="text-white hover:text-blue-400 transition-colors"
                      >
                        3d60gr@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-blue-400 mt-1" />
                    <div>
                      <p className="text-slate-400 text-sm">Phone</p>
                      <a
                        href="tel:+15551234567"
                        className="text-white hover:text-blue-400 transition-colors"
                      >
                        +30 6978429627
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-blue-400 mt-1" />
                    <div>
                      <p className="text-slate-400 text-sm">Location</p>
                      <p className="text-white">Nea Smyrni, Athens</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT */}
              <div className="space-y-8">
                <h2 className="text-2xl font-semibold text-white">
                  Business Hours
                </h2>

                <div className="space-y-4 text-slate-300">
                  <div className="flex items-center space-x-3">
                    <p>Monday – Friday: 9:00 AM – 6:00 PM</p>
                  </div>
                  <p>Saturday: 10:00 AM – 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>

                <div className="pt-6 border-t border-slate-700 text-slate-400">
                  <p>
                    We typically respond within <span className="text-white">24 hours</span>.
                  </p>
                  <p className="mt-2">
                    For detailed quotes, please include as much project information as possible.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Contact;
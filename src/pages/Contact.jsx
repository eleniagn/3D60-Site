import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Upload, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      toast({
        title: "File uploaded!",
        description: `${selectedFile.name} has been attached to your quote request.`,
      });
    }
  };

  const removeFile = () => {
    setFile(null);
    toast({
      title: "File removed",
      description: "The file has been removed from your quote request.",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const quotes = JSON.parse(localStorage.getItem('quotes') || '[]');
    const newQuote = {
      id: Date.now(),
      ...formData,
      fileName: file ? file.name : null,
      date: new Date().toISOString(),
    };
    quotes.push(newQuote);
    localStorage.setItem('quotes', JSON.stringify(quotes));

    toast({
      title: "Quote request submitted!",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    });
    setFile(null);
  };

  return (
    <>
      <Helmet>
        <title>Contact & Get a Quote | 3d60°</title>
        <meta name="description" content="Get a free quote for 3D design, prototyping, printing or aerial drone services. Upload your 3D model or describe your project needs." />
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
              Get a Quote
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Tell us about your project and we'll provide a detailed quote within 24 hours
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-1"
            >
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 sticky top-24">
                <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-slate-400 text-sm">Email</p>
                      <p className="text-white">info@3d60.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-slate-400 text-sm">Phone</p>
                      <p className="text-white">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-slate-400 text-sm">Location</p>
                      <p className="text-white">Your City, State</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-slate-700">
                  <h3 className="text-lg font-semibold text-white mb-4">Business Hours</h3>
                  <div className="space-y-2 text-slate-300">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 10:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2"
            >
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-2 bg-slate-900 border-slate-600 text-white"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-2 bg-slate-900 border-slate-600 text-white"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="mt-2 bg-slate-900 border-slate-600 text-white"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>

                    <div>
                      <Label htmlFor="service">Service *</Label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="mt-2 w-full h-10 px-3 rounded-md bg-slate-900 border border-slate-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Select a service</option>
                        <option value="3d-design">3D Design</option>
                        <option value="3d-prototyping">3D Prototyping</option>
                        <option value="3d-printing">3D Printing</option>
                        <option value="drone-real-estate">Drone - Real Estate</option>
                        <option value="drone-inspection">Drone - Inspection</option>
                        <option value="drone-marketing">Drone - Marketing</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Project Details *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="mt-2 bg-slate-900 border-slate-600 text-white"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <div>
                    <Label htmlFor="file">Upload 3D Model (Optional)</Label>
                    <div className="mt-2">
                      {!file ? (
                        <label
                          htmlFor="file"
                          className="flex items-center justify-center w-full h-32 border-2 border-dashed border-slate-600 rounded-lg cursor-pointer hover:border-blue-500 transition-colors bg-slate-900"
                        >
                          <div className="text-center">
                            <Upload className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                            <p className="text-slate-400">Click to upload your 3D model</p>
                            <p className="text-slate-500 text-sm mt-1">STL, OBJ, STEP files accepted</p>
                          </div>
                          <input
                            id="file"
                            type="file"
                            onChange={handleFileChange}
                            className="hidden"
                            accept=".stl,.obj,.step,.stp"
                          />
                        </label>
                      ) : (
                        <div className="flex items-center justify-between p-4 bg-slate-900 border border-slate-600 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <Upload className="w-5 h-5 text-blue-400" />
                            <span className="text-white">{file.name}</span>
                          </div>
                          <button
                            type="button"
                            onClick={removeFile}
                            className="text-slate-400 hover:text-red-400 transition-colors"
                          >
                            <X className="w-5 h-5" />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-lg py-6"
                  >
                    Submit Quote Request
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
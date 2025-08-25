import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'idle' | 'success' | 'error'; message?: string }>({
    type: 'idle'
  });

  const validateForm = (): string | null => {
    if (!formData.name.trim()) return 'Name is required.';
    if (!formData.email.trim()) return 'Email is required.';
    // simple email validation
    const emailRe = /^\S+@\S+\.\S+$/;
    if (!emailRe.test(formData.email)) return 'Please enter a valid email address.';
    if (!formData.subject.trim()) return 'Subject is required.';
    if (!formData.message.trim()) return 'Message is required.';
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;

    const validationError = validateForm();
    if (validationError) {
      setStatus({ type: 'error', message: validationError });
      return;
    }

    setSubmitting(true);
    setStatus({ type: 'idle' });

    try {
      // Replace '/api/contact' with your real endpoint
      const res = await fetch('https://formspree.io/f/meoljnjd', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || 'Failed to send message.');
      }

      setStatus({ type: 'success', message: 'Message sent successfully.' });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err: any) {
      console.error('Contact form submit error:', err);
      setStatus({
        type: 'error',
        message: err?.message || 'Something went wrong. Please try again later.'
      });
    } finally {
      setSubmitting(false);
      // clear status message after a short delay
      setTimeout(() => setStatus({ type: 'idle' }), 5000);
    }
  };

  const contactInfo = [
    {
      Icon: Mail,
      title: 'Email',
      value: 'akshay.labhade98@gmail.com',
      link: 'mailto:akshay.labhade98@gmail.com'
    },
    {
      Icon: Phone,
      title: 'Phone',
      value: '+91 73043 84156',
      link: 'tel:+917304384156'
    },
    {
      Icon: MapPin,
      title: 'Location',
      value: 'Pune India',
      link: '#'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Let's Connect</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  I'm always interested in new opportunities, exciting projects, and collaborations. 
                  Whether you have a project idea, want to discuss technology, or just want to 
                  connect, feel free to reach out!
                </p>
              </div>
              
              <div className="space-y-6">
                {contactInfo.map(({ Icon, title, value, link }) => (
                  <a
                    key={title}
                    href={link}
                    className="flex items-center space-x-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">{title}</h4>
                      <p className="text-gray-600">{value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-8 shadow-lg">
              {/* Status messages */}
              <div aria-live="polite" className="mb-6">
              {status.type === 'error' && status.message && (
                <div role="alert" className="w-full p-3 rounded-md bg-red-50 border border-red-200 text-red-800">
                <strong className="block font-medium">Error</strong>
                <p className="text-sm">{status.message}</p>
                </div>
              )}
              {status.type === 'success' && status.message && (
                <div role="status" className="w-full p-3 rounded-md bg-green-50 border border-green-200 text-green-800">
                <strong className="block font-medium">Success</strong>
                <p className="text-sm">{status.message}</p>
                </div>
              )}
              </div>

              {submitting && (
              <div className="mb-4 flex items-center space-x-2 text-sm text-gray-700">
                <svg className="animate-spin h-4 w-4 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                </svg>
                <span>Sending...</span>
              </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300 resize-none"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
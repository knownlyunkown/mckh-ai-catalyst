import { useState } from 'react';
import { Mail, Calendar, MessageSquare, CheckCircle, X } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        fullName: '',
        email: '',
        company: '',
        message: ''
      });
    }, 3000);
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      email: '',
      company: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Your journey to AI excellence starts here.
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            At MCKH, we blend research, design, and cutting-edge AI technology to solve real business challenges. Whether you're starting or scaling, we're ready to help you create your next AI breakthrough.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-fade-in">
            <div className="glass-card rounded-lg p-8 relative overflow-hidden">
              {/* Success Overlay */}
              {isSubmitted && (
                <div className="absolute inset-0 bg-background/95 backdrop-blur-sm flex items-center justify-center z-10 rounded-lg">
                  <div className="text-center animate-scale-in">
                    <CheckCircle size={64} className="text-primary mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-foreground mb-2">Thank You!</h3>
                    <p className="text-muted-foreground">We'll get back to you soon.</p>
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-foreground">Let's Connect</h2>
                {Object.values(formData).some(value => value.trim() !== '') && (
                  <button
                    onClick={resetForm}
                    className="p-2 hover:bg-muted rounded-lg transition-colors"
                    title="Clear form"
                  >
                    <X size={20} className="text-muted-foreground" />
                  </button>
                )}
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/50 border border-glass-border focus:border-primary focus:outline-none transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/50 border border-glass-border focus:border-primary focus:outline-none transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/50 border border-glass-border focus:border-primary focus:outline-none transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-white/50 border border-glass-border focus:border-primary focus:outline-none transition-all duration-300 focus:ring-2 focus:ring-primary/20 resize-none"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-pill btn-primary w-full text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    'Start your AI journey'
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info & Additional Options */}
          <div className="space-y-8 animate-slide-up">
            {/* Direct Contact */}
            <div className="glass-card rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="text-primary" size={24} />
                <h3 className="text-xl font-semibold text-foreground">Direct Contact</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Prefer to reach out directly? Send us an email and we'll respond within 24 hours.
              </p>
              <a
                href="mailto:contact@mckh.tech"
                className="text-primary hover:text-primary-light transition-colors font-medium text-lg"
              >
                contact@mckh.tech
              </a>
            </div>

            {/* Talk to Expert */}
            <div className="glass-card rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="text-primary" size={24} />
                <h3 className="text-xl font-semibold text-foreground">Schedule a Call</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Want to discuss your AI needs in detail? Book a 30-minute consultation with our experts.
              </p>
              <button className="btn-pill btn-outline w-full">
                Book a Meeting
              </button>
            </div>

            {/* Live Chat */}
            <div className="glass-card rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <MessageSquare className="text-primary" size={24} />
                <h3 className="text-xl font-semibold text-foreground">Quick Questions?</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Need immediate answers? Our AI assistant is available 24/7 to help with initial questions.
              </p>
              <button className="btn-pill btn-outline w-full">
                Start Live Chat
              </button>
            </div>

            {/* Response Time */}
            <div className="glass-card rounded-lg p-6 bg-primary-lighter/10">
              <h3 className="text-lg font-semibold text-foreground mb-3">What to Expect</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Initial response within 4 hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Detailed proposal within 48 hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Free consultation call available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
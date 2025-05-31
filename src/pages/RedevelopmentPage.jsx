import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import { FaBuilding, FaHandshake, FaCheckCircle, FaChartLine, FaRegFileAlt } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const RedevelopmentPage = () => {
  // Set document title and meta description for SEO
  useEffect(() => {
    // Set document title
    document.title = "Redevelopment Services | Shankeshwar Buildcorp";
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Transform your aging society with Shankeshwar Buildcorp\'s comprehensive redevelopment solutions. Expert planning, zero upfront investment, increased property value.');
    }
    
    return () => {
      // Clean up (optional)
      if (metaDescription) {
        metaDescription.setAttribute('content', 'Shankeshwar Buildcorp - Premier real estate developer in Pune offering premium residential and commercial properties.');
      }
    };
  }, []);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: [0.22, 1, 0.36, 1]
      } 
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  // Redevelopment benefits
  const benefits = [
    {
      icon: <FaBuilding />,
      title: "Modern Infrastructure",
      description: "Replace aging structures with state-of-the-art buildings featuring modern amenities and facilities."
    },
    {
      icon: <FaHandshake />,
      title: "Transparent Process",
      description: "Experience a clear, well-documented redevelopment journey with regular updates and open communication."
    },
    {
      icon: <FaCheckCircle />,
      title: "Quality Assurance",
      description: "Premium construction quality with high-grade materials and expert craftsmanship for lasting durability."
    },
    {
      icon: <FaChartLine />,
      title: "Increased Property Value",
      description: "Significant appreciation in property value with modern design, improved facilities, and enhanced appeal."
    }
  ];

  // Redevelopment steps
  const redevelopmentSteps = [
    {
      number: "01",
      title: "Society Consultation",
      description: "We meet with society members to understand needs, concerns, and expectations."
    },
    {
      number: "02",
      title: "Proposal & Agreement",
      description: "Detailed proposal presented, followed by a transparent agreement process."
    },
    {
      number: "03",
      title: "Design & Planning",
      description: "Collaborative design phase with architect presentations and member feedback."
    },
    {
      number: "04",
      title: "Approvals & Permissions",
      description: "We handle all legal documentation and regulatory approvals."
    },
    {
      number: "05",
      title: "Construction Phase",
      description: "Quality-focused construction with regular progress updates and site visits."
    },
    {
      number: "06",
      title: "Handover & Support",
      description: "Smooth transition to your new home with ongoing maintenance support."
    }
  ];

  return (
    <div className="bg-cream min-h-screen">
      {/* Hero Section */}
      <section className="bg-deep-teal py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <rect width="100%" height="100%" fill="none"/>
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        <Container>
          <motion.div 
            className="max-w-3xl mx-auto text-center relative z-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block bg-amber-gold/20 text-amber-gold px-3 py-1 text-sm font-medium rounded-full mb-4">
              REDEVELOPMENT SERVICES
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              Transform Your <span className="text-amber-gold">Society</span> With Expert Redevelopment
            </h1>
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              Breathe new life into aging buildings with Shankeshwar Buildcorp's comprehensive redevelopment solutions. We handle every aspect from planning to execution.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button 
                variant="accent" 
                href="#benefits" 
                animation="bounce"
              >
                Explore Benefits
              </Button>
              
              <Button 
                variant="glass" 
                href="/contact"
                className="border-white/30 text-white"
              >
                Request Consultation
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Why Redevelopment Section */}
      <section className="py-16 md:py-24">
        <Container>
          <motion.div 
            className="grid md:grid-cols-2 gap-12 md:gap-16 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            {/* Image column */}
            <motion.div 
              className="relative order-2 md:order-1"
              variants={fadeIn}
            >
              <div className="aspect-[4/3] relative rounded-lg shadow-xl overflow-hidden">
                <img 
                  src="/images/website/redevelopment-main.jpg" 
                  alt="Building Redevelopment" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = '/images/website/building-modern.jpeg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-teal/40 to-transparent"></div>
              </div>
              
              {/* Stats card */}
              <motion.div 
                className="bg-white rounded-lg shadow-lg p-6 absolute -bottom-5 -right-5 md:bottom-8 md:-right-8 max-w-[250px] border-t-4 border-amber-gold"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <p className="text-4xl font-display font-bold text-deep-teal">10+</p>
                    <p className="text-sm text-deep-teal/60">Societies Redeveloped</p>
                  </div>
                  <div>
                    <p className="text-4xl font-display font-bold text-amber-gold">500+</p>
                    <p className="text-sm text-deep-teal/60">Happy Residents</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Text content column */}
            <div className="order-1 md:order-2">
              <motion.div variants={fadeIn}>
                <div className="inline-block bg-amber-gold/20 text-amber-gold px-3 py-1 text-sm font-medium rounded-full mb-4">
                  WHY REDEVELOPMENT
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-deep-teal mb-6">
                  Transforming <span className="text-amber-gold">Old Structures</span> Into Modern Marvels
                </h2>
              </motion.div>
              
              <motion.div variants={fadeIn}>
                <p className="text-lg text-deep-teal/80 mb-6 leading-relaxed">
                  Many housing societies in Pune face issues like structural deterioration, inadequate amenities, and outdated designs. Redevelopment offers a comprehensive solution to these challenges.
                </p>
                <p className="text-lg text-deep-teal/80 mb-8 leading-relaxed">
                  With Shankeshwar Buildcorp's redevelopment expertise, your society can enjoy larger living spaces, modern amenities, enhanced safety features, and a significant increase in property value—all with minimal disruption to residents.
                </p>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <span className="text-amber-gold mr-3 mt-1"><FaCheckCircle /></span>
                    <span className="text-deep-teal/80">Zero upfront investment from society members</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-gold mr-3 mt-1"><FaCheckCircle /></span>
                    <span className="text-deep-teal/80">Temporary accommodation during construction</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-gold mr-3 mt-1"><FaCheckCircle /></span>
                    <span className="text-deep-teal/80">Increased carpet area in new apartments</span>
                  </li>
                </ul>
                
                <Button 
                  variant="primary" 
                  href="/contact"
                  icon={<FiArrowRight />}
                >
                  Schedule a Society Meeting
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 md:py-24 bg-sage-teal/5">
        <Container>
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block bg-amber-gold/20 text-amber-gold px-3 py-1 text-sm font-medium rounded-full mb-4">
              BENEFITS
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-deep-teal mb-6">
              Why Choose <span className="text-amber-gold">Redevelopment</span>
            </h2>
            <p className="text-lg text-deep-teal/80 leading-relaxed">
              Redevelopment offers multiple advantages over renovation or repairs, providing a complete transformation of your living experience.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-amber-gold"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 bg-amber-gold/10 rounded-full flex items-center justify-center mb-4 text-amber-gold text-xl">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-display font-bold text-deep-teal mb-2">{benefit.title}</h3>
                <p className="text-deep-teal/80 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Redevelopment Process Section */}
      <section className="py-16 md:py-24">
        <Container>
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block bg-amber-gold/20 text-amber-gold px-3 py-1 text-sm font-medium rounded-full mb-4">
              THE PROCESS
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-deep-teal mb-6">
              Our <span className="text-amber-gold">Redevelopment</span> Approach
            </h2>
            <p className="text-lg text-deep-teal/80 leading-relaxed">
              We follow a structured, transparent process designed to minimize disruption and maximize satisfaction for all society members.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {redevelopmentSteps.map((step, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="absolute -top-4 -left-4 w-20 h-20 flex items-end justify-end opacity-10">
                  <span className="text-5xl font-bold text-deep-teal">{step.number}</span>
                </div>
                <div className="relative z-10">
                  <div className="text-sm text-amber-gold font-medium mb-2">STEP {step.number}</div>
                  <h3 className="text-xl font-display font-bold text-deep-teal mb-3">{step.title}</h3>
                  <p className="text-deep-teal/80 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-sage-teal/5">
        <Container>
          <motion.div 
            className="grid md:grid-cols-2 gap-12 md:gap-16 items-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            {/* Left column - heading */}
            <div>
              <motion.div variants={fadeIn}>
                <div className="inline-block bg-amber-gold/20 text-amber-gold px-3 py-1 text-sm font-medium rounded-full mb-4">
                  FAQ
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-deep-teal mb-6">
                  Frequently Asked <span className="text-amber-gold">Questions</span>
                </h2>
                <p className="text-lg text-deep-teal/80 mb-8 leading-relaxed">
                  We understand you may have questions about the redevelopment process. Here are answers to some commonly asked questions.
                </p>
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-amber-gold">
                  <h3 className="text-xl font-display font-bold text-deep-teal mb-3">Still have questions?</h3>
                  <p className="text-deep-teal/80 mb-4">
                    Our redevelopment experts are just a call away. Reach out to us for a personalized consultation.
                  </p>
                  <Button 
                    variant="primary" 
                    href="/contact"
                    icon={<FiArrowRight />}
                  >
                    Contact Us
                  </Button>
                </div>
              </motion.div>
            </div>

            {/* Right column - FAQs */}
            <div className="space-y-4">
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-md"
                variants={fadeIn}
              >
                <h3 className="text-lg font-bold text-deep-teal mb-2">How long does the redevelopment process take?</h3>
                <p className="text-deep-teal/80">
                  The timeline varies based on project size and complexity, but typically ranges from 18-30 months from agreement to handover. We provide a detailed timeline during the initial proposal phase.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-md"
                variants={fadeIn}
              >
                <h3 className="text-lg font-bold text-deep-teal mb-2">Will we need to arrange temporary accommodation?</h3>
                <p className="text-deep-teal/80">
                  No. We provide rent compensation for temporary accommodation during the construction phase. This is clearly outlined in the redevelopment agreement.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-md"
                variants={fadeIn}
              >
                <h3 className="text-lg font-bold text-deep-teal mb-2">How much additional area will we get?</h3>
                <p className="text-deep-teal/80">
                  The additional area depends on current regulations and your society's specific situation. Typically, members receive 15-30% more carpet area than their existing apartments.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-md"
                variants={fadeIn}
              >
                <h3 className="text-lg font-bold text-deep-teal mb-2">What about building approvals and permissions?</h3>
                <p className="text-deep-teal/80">
                  We handle all required approvals from local authorities, including building permits, environmental clearances, and other statutory permissions as part of our service.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-deep-teal text-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Ready to <span className="text-amber-gold">Transform</span> Your Society?
              </h2>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                Take the first step towards a modern, upgraded living space. Our redevelopment experts are ready to guide you through the process.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Button 
                  variant="accent" 
                  href="/contact"
                  size="lg"
                  animation="bounce"
                >
                  Request a Proposal
                </Button>
                
                <Button 
                  variant="glass" 
                  href="tel:+919604304919"
                  size="lg"
                  className="border-white/30"
                >
                  Call: +91 96043 04919
                </Button>
              </div>
              <p className="mt-6 text-white/60 text-sm">
                No obligation consultation • Transparent process • Expert guidance
              </p>
            </motion.div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default RedevelopmentPage; 
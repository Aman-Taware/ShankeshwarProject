import React from 'react';
import { motion } from 'framer-motion';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';

const AboutUsPage = () => {
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

  // Team members data
  const teamMembers = [
    {
      name: "Rajesh Sharma",
      position: "Founder & CEO",
      bio: "With over 25 years of experience in real estate development, Rajesh leads our company with passion and strategic vision.",
      image: "/images/website/placeholder-team.jpg"
    },
    {
      name: "Priya Patel",
      position: "Chief Architect",
      bio: "Priya brings creative solutions and innovative designs to all our projects, ensuring both functionality and aesthetic appeal.",
      image: "/images/website/placeholder-team.jpg"
    },
    {
      name: "Amit Desai",
      position: "Construction Director",
      bio: "Amit ensures all our developments are built to the highest standards of quality and safety, always delivering on time.",
      image: "/images/website/placeholder-team.jpg"
    },
    {
      name: "Neha Singh",
      position: "Customer Relations Head",
      bio: "Neha leads our customer experience team, making sure every client's journey with us is smooth and satisfying.",
      image: "/images/website/placeholder-team.jpg"
    }
  ];

  // Milestones data
  const milestones = [
    {
      year: "2008",
      title: "Company Founded",
      description: "Shankeshwar Realty was established with a vision to transform the real estate landscape of Pune."
    },
    {
      year: "2010",
      title: "First Residential Project",
      description: "Successfully completed our first residential project, establishing our reputation for quality construction."
    },
    {
      year: "2015",
      title: "Expansion Phase",
      description: "Expanded our operations to include commercial properties and entered new markets in Maharashtra."
    },
    {
      year: "2018",
      title: "Sustainability Initiative",
      description: "Launched our green building initiative, incorporating eco-friendly practices in all new projects."
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description: "Embraced technology to enhance customer experience and streamline our development process."
    },
    {
      year: "2023",
      title: "25+ Projects Milestone",
      description: "Celebrated the successful completion of over 25 projects and 200+ happy families."
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
              ABOUT US
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              Building <span className="text-amber-gold">Tomorrow's</span> Landmarks Today
            </h1>
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              At Shankeshwar Realty, we're more than developers—we're visionaries crafting spaces where memories are made, businesses thrive, and communities flourish.
            </p>
            <div className="flex gap-4 justify-center">
              <Button 
                variant="accent" 
                href="#our-team" 
                animation="bounce"
              >
                Meet Our Team
              </Button>
              
              <Button 
                variant="glass" 
                href="/contact"
                className="border-white/30 text-white"
              >
                Connect With Us
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Our Story Section */}
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
              className="relative"
              variants={fadeIn}
            >
              <div className="aspect-[4/3] relative rounded-lg shadow-xl overflow-hidden">
                <img 
                  src="/images/website/building-modern.jpeg" 
                  alt="Shankeshwar Realty Building" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-teal/40 to-transparent"></div>
              </div>
              
              {/* Stats card */}
              <motion.div 
                className="bg-white rounded-lg shadow-lg p-6 absolute -bottom-5 -left-5 md:bottom-8 md:-left-8 max-w-[250px] border-t-4 border-amber-gold"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-4xl font-display font-bold text-deep-teal">15+</p>
                    <p className="text-sm text-deep-teal/60">Years Experience</p>
                  </div>
                  <div>
                    <p className="text-4xl font-display font-bold text-amber-gold">25+</p>
                    <p className="text-sm text-deep-teal/60">Projects Delivered</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Text content column */}
            <div>
              <motion.div variants={fadeIn}>
                <div className="inline-block bg-amber-gold/20 text-amber-gold px-3 py-1 text-sm font-medium rounded-full mb-4">
                  OUR STORY
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-deep-teal mb-6">
                  A Legacy of <span className="text-amber-gold">Excellence</span> in Real Estate
                </h2>
              </motion.div>
              
              <motion.div variants={fadeIn}>
                <p className="text-lg text-deep-teal/80 mb-6 leading-relaxed">
                  Founded in 2008, Shankeshwar Realty has grown from a small real estate venture to one of the most trusted developers in Pune. Our journey has been defined by an unwavering commitment to quality, innovation, and customer satisfaction.
                </p>
                <p className="text-lg text-deep-teal/80 mb-8 leading-relaxed">
                  Over the years, we have successfully delivered residential, commercial, and mixed-use projects that stand as testaments to our dedication to excellence. Each property we develop is crafted with meticulous attention to detail, using the finest materials and cutting-edge construction techniques.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 md:py-20 bg-sage-teal/5">
        <Container>
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block bg-amber-gold/20 text-amber-gold px-3 py-1 text-sm font-medium rounded-full mb-4">
              OUR PURPOSE
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-deep-teal mb-6">
              Mission & <span className="text-amber-gold">Vision</span>
            </h2>
            <p className="text-lg text-deep-teal/80 leading-relaxed">
              Guided by strong values and a clear vision, we strive to make a positive impact on the communities we serve.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-deep-teal"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-16 h-16 bg-deep-teal/10 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-deep-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-display font-bold text-deep-teal mb-4">Our Mission</h3>
              <p className="text-deep-teal/80 mb-4 leading-relaxed">
                To create exceptional living and working spaces that enhance quality of life, delivered with integrity, innovation, and excellence.
              </p>
              <p className="text-deep-teal/80 leading-relaxed">
                We aim to exceed customer expectations while maintaining the highest standards of sustainability and social responsibility in every project we undertake.
              </p>
            </motion.div>
            
            {/* Vision Card */}
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-amber-gold"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-16 h-16 bg-amber-gold/10 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-display font-bold text-deep-teal mb-4">Our Vision</h3>
              <p className="text-deep-teal/80 mb-4 leading-relaxed">
                To be the most trusted name in real estate development, recognized for creating landmark properties that stand the test of time.
              </p>
              <p className="text-deep-teal/80 leading-relaxed">
                We envision a future where our developments are known for their timeless design, superior quality, and positive contribution to urban landscapes.
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Team Section */}
      <section id="our-team" className="py-16 md:py-24">
        <Container>
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block bg-amber-gold/20 text-amber-gold px-3 py-1 text-sm font-medium rounded-full mb-4">
              OUR TEAM
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-deep-teal mb-6">
              Meet The <span className="text-amber-gold">Experts</span> Behind Our Success
            </h2>
            <p className="text-lg text-deep-teal/80 leading-relaxed">
              Our team of dedicated professionals brings together decades of experience in real estate development, architecture, construction, and customer service.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="aspect-[3/4] relative overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-teal/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-bold text-deep-teal mb-1">{member.name}</h3>
                  <p className="text-amber-gold font-medium text-sm mb-4">{member.position}</p>
                  <p className="text-deep-teal/70 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-deep-teal/80 mb-6">
              Our team is passionate about creating exceptional spaces and delivering unparalleled customer experiences.
            </p>
            <Button 
              variant="outline" 
              href="/contact"
              animation="bounce"
            >
              Join Our Team
            </Button>
          </motion.div>
        </Container>
      </section>

      {/* Company Timeline */}
      <section className="py-16 md:py-24 bg-sage-teal/5">
        <Container>
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block bg-amber-gold/20 text-amber-gold px-3 py-1 text-sm font-medium rounded-full mb-4">
              OUR JOURNEY
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-deep-teal mb-6">
              The <span className="text-amber-gold">Milestones</span> That Shaped Us
            </h2>
            <p className="text-lg text-deep-teal/80 leading-relaxed">
              From humble beginnings to becoming a leading name in real estate, our journey has been marked by continuous growth and achievement.
            </p>
          </motion.div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-amber-gold/30 transform -translate-x-1/2 hidden md:block"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div 
                  key={index}
                  className={`md:flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className={`md:w-1/2 p-4 md:pr-12 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left md:pl-12'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <div className="text-amber-gold font-bold text-xl mb-2">{milestone.year}</div>
                      <h3 className="text-deep-teal font-bold text-xl mb-3">{milestone.title}</h3>
                      <p className="text-deep-teal/70">{milestone.description}</p>
                    </div>
                  </div>
                  
                  <div className="hidden md:flex justify-center items-center relative md:w-0">
                    <div className="w-10 h-10 rounded-full bg-amber-gold flex items-center justify-center z-10">
                      <span className="text-white font-bold">{index + 1}</span>
                    </div>
                  </div>
                  
                  <div className="md:w-1/2 hidden md:block"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20">
        <Container>
          <motion.div 
            className="bg-deep-teal rounded-2xl py-12 px-8 md:px-12 text-center md:text-left relative overflow-hidden shadow-lg"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <svg width="100%" height="100%" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
                <pattern id="grid-cta" width="40" height="40" patternUnits="userSpaceOnUse">
                  <rect width="100%" height="100%" fill="none"/>
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
                </pattern>
                <rect x="0" y="0" width="100%" height="100%" fill="url(#grid-cta)" />
              </svg>
            </div>
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 md:gap-12 relative z-10">
              <div className="md:max-w-xl">
                <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">Let's Build Your Dream Together</h3>
                <p className="text-white/80">Whether you're looking for your dream home or a smart investment opportunity, our team is ready to guide you every step of the way.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-end">
                <Button
                  variant="accent"
                  size="lg"
                  href="/contact"
                  animation="bounce"
                >
                  Contact Us Today
                </Button>
                <Button
                  variant="glass"
                  size="lg"
                  href="/projects"
                  className="border-white/30 text-white"
                >
                  Explore Projects
                </Button>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
};

export default AboutUsPage; 
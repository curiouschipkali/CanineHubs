import React, { useEffect } from 'react';
import "./App.css";
import { useState } from 'react'; 
import { Home, Video, Users, BookOpen, Dog } from 'lucide-react';

const Header = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    
    useEffect(() => {
      let lastScrollTop = 0;
      let ticking = false;
  
      const handleScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
        if (!ticking) {
          window.requestAnimationFrame(() => {
            if (scrollTop > 50 && scrollTop > lastScrollTop) {
              setIsCollapsed(true);
            } else {
              setIsCollapsed(false);
            }
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
            ticking = false;
          });
  
          ticking = true;
        }
      };
  
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    return (
      <header className={`header ${isCollapsed ? 'collapsed' : ''}`}>
        <div className="logo">Canine Hub</div>
        <nav>
          <ul>
            <li><a href="#services">Services</a></li>
            <li><a href="#team">Team</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
    );
  };
  

  const HeroSection = () => {
    return (
      <section id="hero" className="hero-component">
        <div className="hero-content">
          <div className="hero-text-content">
            <h1 className="hero-title">
              Professional Dog Training 
              <span className="title-accent">That Delivers Results</span>
            </h1>
            <p className="tagline">Transform Your Dog's Potential with Expert Training</p>
            <div className="hero-description">
              <p className="main-text">
                At Canine Hub, we combine proven methodologies with personalized attention 
                to develop well-behaved, confident, and happy companions. Our expert-led 
                programs are designed to create lasting behavioral improvements.
              </p>
              <div className="features">
                <div className="feature-item">
                  <span className="feature-icon">•</span>
                  <span>Research-Based Training Methods</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">•</span>
                  <span>Certified Professional Trainers</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">•</span>
                  <span>Customized Development Plans</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">•</span>
                  <span>Proven Track Record of Success</span>
                </div>
              </div>
              <button className="cta-button">
                Schedule a Consultation
              </button>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <img src="/images/goldenpuppy.png" alt="Professional Dog Training" className="dog-image" />
          </div>
        </div>
      </section>
    );
  };
  
  

const ServicesWithImages = () => {
  return (
    <section className="services-section">
      <div className="services-content">
        <h2 className="services-title">Our Services</h2>
        <p className="services-subtitle">Comprehensive Training Solutions for Every Need</p>
        
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon-wrapper">
              <Home className="service-icon" />
            </div>
            <h3>Home Visits</h3>
            <p>Personalized training sessions in your home environment, where your pet feels most comfortable. Our experts work directly with you to address specific behavioral challenges and establish positive routines.</p>
          </div>

          <div className="service-card">
            <div className="service-icon-wrapper">
              <Video className="service-icon" />
            </div>
            <h3>Online 1-1 Sessions</h3>
            <p>Flexible virtual consultations that fit your schedule. Get professional guidance and training support from anywhere, with personalized attention to your pet's specific needs.</p>
          </div>

          <div className="service-card">
            <div className="service-icon-wrapper">
              <BookOpen className="service-icon" />
            </div>
            <h3>Online/Offline Webinars</h3>
            <p>Join our educational sessions covering various aspects of pet care and training. Learn from experts through interactive workshops designed to deepen your understanding of canine behavior.</p>
          </div>

          <div className="service-card">
            <div className="service-icon-wrapper">
              <Users className="service-icon" />
            </div>
            <h3>Group Socialization Sessions</h3>
            <p>Structured group sessions where your pet can develop essential social skills. Our controlled environment ensures safe and positive interactions with other dogs.</p>
          </div>

          <div className="service-card">
            <div className="service-icon-wrapper">
              <Dog className="service-icon" />
            </div>
            <h3>Training Your Pet Group Course</h3>
            <p>Comprehensive training program designed specifically for pet parents. Learn professional techniques and strategies to become a more effective trainer for your furry friend.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const VideoArea = () => {
  const videoRef = React.useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          videoRef.current.play();
        } else {
          videoRef.current.pause();
        }
      });
    }, options);

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <section className="video-area">
      <div className="video-content">
        <div className="video-text">
          <h2>Training Insights</h2>
          <p className="video-subtitle">Watch how we transform behaviors through positive reinforcement</p>
          <div className="video-features">
            <div className="video-feature">
              <i className="fas fa-check-circle"></i>
              <span>Real Training Sessions</span>
            </div>
            <div className="video-feature">
              <i className="fas fa-check-circle"></i>
              <span>Proven Techniques</span>
            </div>
            <div className="video-feature">
              <i className="fas fa-check-circle"></i>
              <span>Visible Results</span>
            </div>
          </div>
        </div>
        <div className="video-wrapper">
          <video 
            ref={videoRef}
            controls 
            muted
            playsInline
            poster="/images/video-thumbnail.jpg"
          >
            <source src="/videos/adiblog1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

const TeamShowcase = () => {
    return (
      <section id="team" className="team-showcase">
        <div className="team-header">
          <h1>Meet our team!</h1>
        </div>
        <div className="team-cards">
          <div className="team-member left">
          <img src="/images/aditya_pfp.png" alt="Aditya" className="team-image" />
            <div className="team-details">
              <h3>Aditya</h3>
              <h2>Founder and Head Trainer</h2>
              <p>Certified Dog Trainer and behaviorist.</p>
            </div>
          </div>
          <div className="team-member right">
            <img src="https://via.placeholder.com/300" alt="Meghan" className="team-image" />
            <div className="team-details">
              <h3>Meghan</h3>
              <p>Canine Specialist</p>
            </div>
          </div>
          <div className="team-member left">
            <img src="https://via.placeholder.com/300" alt="John" className="team-image" />
            <div className="team-details">
              <h3>John</h3>
              <p>Behavior Analyst</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  
const BlogSection = () => {
  return (
    <section id="blog" className="blog-section">
      <div className="blog-content">
        <div className="blog-header">
          <h2 className="blog-title">Latest from Our Blog</h2>
          <p className="blog-subtitle">Insights and Tips from Professional Trainers</p>
        </div>
        
        <div className="blog-grid">
          <article className="blog-card">
            <div className="blog-image-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Dog Training" 
                className="blog-image"
              />
            </div>
            <div className="blog-text">
              <div className="blog-meta">
                <span className="blog-date">March 15, 2024</span>
                <span className="blog-category">Training Tips</span>
              </div>
              <h3>Understanding Your Dog's Body Language</h3>
              <p>Dogs communicate primarily through body language. Learning to read these subtle cues can dramatically improve your relationship with your pet. In this comprehensive guide, we'll explore the key signals...</p>
              <a href="#blog" className="blog-read-more">Read More →</a>
            </div>
          </article>

          <article className="blog-card">
            <div className="blog-image-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Puppy Training" 
                className="blog-image"
              />
            </div>
            <div className="blog-text">
              <div className="blog-meta">
                <span className="blog-date">March 10, 2024</span>
                <span className="blog-category">Puppy Care</span>
              </div>
              <h3>Essential Puppy Training Techniques</h3>
              <p>Starting your puppy's training journey on the right foot is crucial for their development. Here are the proven methods we use at our training center to establish good behaviors from day one...</p>
              <a href="#blog" className="blog-read-more">Read More →</a>
            </div>
          </article>

          <article className="blog-card">
            <div className="blog-image-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1534361960057-19889db9621e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Dog Socialization" 
                className="blog-image"
              />
            </div>
            <div className="blog-text">
              <div className="blog-meta">
                <span className="blog-date">March 5, 2024</span>
                <span className="blog-category">Behavior</span>
              </div>
              <h3>The Importance of Early Socialization</h3>
              <p>Proper socialization during your dog's formative weeks is essential for developing a well-adjusted adult dog. Learn about the critical periods and how to make the most of them...</p>
              <a href="#blog" className="blog-read-more">Read More →</a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="testimonials-content">
        <div className="testimonials-header">
          <h2 className="testimonials-title">What Pet Parents Say</h2>
          <p className="testimonials-subtitle">Real Stories from Our Community</p>
        </div>
        
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="testimonial-quote">"</div>
            <p className="testimonial-text">
              Aditya transformed our dog's behavior in just a few weeks! His understanding of canine psychology and patient approach made all the difference.
            </p>
            <div className="testimonial-author">
              <img src="https://via.placeholder.com/60" alt="Client" className="author-image" />
              <div className="author-details">
                <h4>Sarah Mitchell</h4>
                <p>Parent of Max, Golden Retriever</p>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="testimonial-quote">"</div>
            <p className="testimonial-text">
              The group socialization sessions were exactly what our shy puppy needed. Now she confidently plays with other dogs and has made great progress!
            </p>
            <div className="testimonial-author">
              <img src="https://via.placeholder.com/60" alt="Client" className="author-image" />
              <div className="author-details">
                <h4>Michael Brown</h4>
                <p>Parent of Luna, Border Collie</p>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="testimonial-quote">"</div>
            <p className="testimonial-text">
              The online training sessions were incredibly convenient and effective. Aditya's expertise shines through even in virtual consultations.
            </p>
            <div className="testimonial-author">
              <img src="https://via.placeholder.com/60" alt="Client" className="author-image" />
              <div className="author-details">
                <h4>Emily Zhang</h4>
                <p>Parent of Buddy, Labrador Mix</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3><i className="fas fa-paw"></i> Canine Hub</h3>
          <p>Professional dog training services tailored to your pet's needs.</p>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com/caninehub_?igsh=MXVsczRicDI2a2htYQ%3D%3D" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4><i className="fas fa-link"></i> Quick Links</h4>
          <ul>
            <li><i className="fas fa-angle-right"></i> <a href="#services">Services</a></li>
            <li><i className="fas fa-angle-right"></i> <a href="#team">Our Team</a></li>
            <li><i className="fas fa-angle-right"></i> <a href="#blog">Blog</a></li>
            <li><i className="fas fa-angle-right"></i> <a href="#testimonials">Testimonials</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4><i className="fas fa-address-card"></i> Contact Us</h4>
          <ul className="contact-info">
            <li>
              <i className="fas fa-envelope"></i>
              <a href="mailto:aditya@caninehub.com">aditya@caninehub.com</a>
            </li>
            <li>
              <i className="fas fa-phone"></i>
              <a href="tel:+1234567890">+91 9611188219</a>
            </li>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              <span>Bangalore, Karnataka</span>
            </li>
            <li>
              <i className="far fa-clock"></i>
              <span>Mon - Sat: 9:00 AM - 6:00 PM</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p><i className="far fa-copyright"></i> 2024 Canine Hub. All rights reserved.</p>
      </div>
    </footer>
  );
};

const App = () => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      observer.observe(section);
      
      const animatedElements = section.querySelectorAll('.service-card, .team-member, .blog-card, .testimonial-card');
      animatedElements.forEach(element => {
        observer.observe(element);
      });
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <Header />
      <HeroSection />
      <ServicesWithImages />
      <VideoArea />
      <TeamShowcase />
      <BlogSection />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App; 
import React from "react";
import "./App.css";

const App = () => {
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


const Header = () => {
  return (
    <header className="header">
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
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to Canine Hub</h1>
        <p>Expert Dog Training and Care, Tailored for Your Pet’s Needs.</p>
        <a href="#services" className="cta-button">Explore Services</a>
      </div>
    </section>
  );
};

const ServicesWithImages = () => {
  return (
    <section id="services" className="services-with-images">
      <h2>Our Services</h2>
      <div className="service-cards">
        <div className="service-card">
          <img src="https://via.placeholder.com/250" alt="Dog Training" />
          <h3>Obedience Training</h3>
          <p>Teach your dog essential commands and improve behavior.</p>
        </div>
        <div className="service-card">
          <img src="https://via.placeholder.com/250" alt="Aditya Training Dogs" />
          <h3>Behavioral Therapy</h3>
          <p>Address anxiety, aggression, and other behavioral issues.</p>
        </div>
        <div className="service-card">
          <img src="https://via.placeholder.com/250" alt="Dog Playtime" />
          <h3>Puppy Training</h3>
          <p>Start your puppy’s journey with the right habits.</p>
        </div>
      </div>
    </section>
  );
};

const VideoArea = () => {
  return (
    <section className="video-area">
      <h2>Training in Action</h2>
      <video controls>
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <p>Watch Aditya and his team train dogs and transform behaviors.</p>
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
      <h2>Our Blog</h2>
      <div className="blog-cards">
        <div className="blog-card">
          <img src="https://via.placeholder.com/250" alt="Blog Post" />
          <h3>5 Tips for Puppy Training</h3>
          <p>Get the most out of your training sessions.</p>
        </div>
        <div className="blog-card">
          <img src="https://via.placeholder.com/250" alt="Blog Post" />
          <h3>Understanding Canine Behavior</h3>
          <p>Learn how to read your dog’s body language.</p>
        </div>
        <div className="blog-card">
          <img src="https://via.placeholder.com/250" alt="Blog Post" />
          <h3>Benefits of Group Training</h3>
          <p>Discover the importance of socializing your pet.</p>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials">
      <h2>What Pet Owners Say</h2>
      <div className="testimonial">
        <p>"Aditya transformed our dog's behavior in just a few weeks!"</p>
        <span>- Happy Pet Parent</span>
      </div>
      <div className="testimonial">
        <p>"The group courses were a game changer for our pup's socialization."</p>
        <span>- Satisfied Client</span>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <h3>Contact Us</h3>
      <p>Email: aditya@caninehub.com</p>
      <p>Follow us on:</p>
      <div className="social-media">
        <a href="https://facebook.com">Facebook</a>
        <a href="https://instagram.com">Instagram</a>
      </div>
    </footer>
  );
};

export default App;

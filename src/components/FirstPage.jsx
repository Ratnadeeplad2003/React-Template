// FirstPage.jsx


import "./FirstPage.css";
import {
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Plus,
} from "lucide-react";

const FirstPage = () => {
  return (
    <div className="firstPage">

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">∞</div>

        <ul className="navLinks">
          <li>Link 1</li>
          <li>Link 2</li>
          <li>Link 3</li>
          <li>Link 4</li>
          <li>Link 5</li>
        </ul>

        <button className="primaryBtn">Button</button>
      </nav>

      {/* Hero Section */}
      <section className="heroSection">
        <div className="heroContent">
          <h1>Great design is invisible</h1>
          <p>Lorem ipsum dolor sit amet consectetur</p>
          <button className="primaryBtn">Button</button>
        </div>

        <div className="heroImage">
          <img
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72"
            alt="office"
          />
        </div>
      </section>

      {/* Trust Section */}
      <section className="trustSection">
        <h2>Why our clients trust us</h2>

        <p className="sectionText">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>

        <div className="trustContent">
          <div className="trustImages">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              alt=""
            />

            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
              alt=""
            />

            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
              alt=""
            />
          </div>

          <div className="trustList">
            <div className="trustItem">
              <CheckCircle size={18} />
              <span>Lorem ipsum dolor sit amet consectetur.</span>
            </div>

            <div className="trustItem">
              <CheckCircle size={18} />
              <span>Lorem ipsum dolor sit amet consectetur.</span>
            </div>

            <div className="trustItem">
              <CheckCircle size={18} />
              <span>Lorem ipsum dolor sit amet consectetur.</span>
            </div>

            <div className="trustItem">
              <CheckCircle size={18} />
              <span>Lorem ipsum dolor sit amet consectetur.</span>
            </div>

            <button className="primaryBtn">Button</button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="statsSection">
        <h2>
          Our business strategy has helped many <br />
          businesses across the globe
        </h2>

        <p className="sectionText">
          Lorem ipsum dolor sit amet consectetur.
        </p>

        <div className="statsGrid">
          <div>
            <h3>12k</h3>
            <p>Clients</p>
          </div>

          <div>
            <h3>55%</h3>
            <p>Annual growth</p>
          </div>

          <div>
            <h3>5k</h3>
            <p>No of projects</p>
          </div>

          <div>
            <h3>80%</h3>
            <p>Positive ratings</p>
          </div>
        </div>

        <div className="bigImage">
          <img
            src="https://images.unsplash.com/photo-1497366412874-3415097a27e7"
            alt=""
          />
        </div>
      </section>

      {/* Partners */}
      <section className="partnersSection">
        <h2>Our Partners</h2>

        <div className="partnersGrid">
          <div className="partnerCard">Logoipsum</div>
          <div className="partnerCard">Logoipsum</div>
          <div className="partnerCard">Logoipsum</div>
          <div className="partnerCard">Logoipsum</div>
        </div>
      </section>

      {/* Blog */}
      <section className="blogSection">
        <h2>Latest blog</h2>

        <div className="blogGrid">

          <div className="blogCard">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
              alt=""
            />
            <h4>Humans are much more smarter than AI</h4>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <span>Learn more</span>
          </div>

          <div className="blogCard">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
              alt=""
            />
            <h4>Humans are much more smarter than AI</h4>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <span>Learn more</span>
          </div>

          <div className="blogCard">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978"
              alt=""
            />
            <h4>Humans are much more smarter than AI</h4>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <span>Learn more</span>
          </div>

        </div>

        <button className="primaryBtn centerBtn">Button</button>
      </section>

      {/* Testimonials */}
      <section className="testimonialSection">
        <h2>Our happy clients</h2>

        <div className="testimonialWrapper">

          <button className="arrowBtn">
            <ChevronLeft size={18} />
          </button>

          <div className="testimonialCard">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>

            <div className="userInfo">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt=""
              />

              <div>
                <h4>Jacqueline Wright</h4>
                <span>Customer</span>
              </div>
            </div>
          </div>

          <div className="testimonialCard">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>

            <div className="userInfo">
              <img
                src="https://randomuser.me/api/portraits/women/45.jpg"
                alt=""
              />

              <div>
                <h4>Jacqueline Wright</h4>
                <span>Customer</span>
              </div>
            </div>
          </div>

          <button className="arrowBtn">
            <ChevronRight size={18} />
          </button>

        </div>
      </section>

      {/* FAQ */}
      <section className="faqSection">

        <div className="faqImage">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt=""
          />
        </div>

        <div className="faqContent">
          <h2>Frequently asked questions</h2>

          <div className="faqItem activeFaq">
            <div className="faqTop">
              <h4>Lorem ipsum dolor sit amet consectetur</h4>
              <Plus size={18} />
            </div>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>

          <div className="faqItem">
            <div className="faqTop">
              <h4>Lorem ipsum dolor sit amet consectetur</h4>
              <Plus size={18} />
            </div>
          </div>

          <div className="faqItem">
            <div className="faqTop">
              <h4>Lorem ipsum dolor sit amet consectetur</h4>
              <Plus size={18} />
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="ctaSection">
        <div>
          <h2>Need more information?</h2>
          <p>
            Write your concern to us and our specialist will get back to you.
          </p>
        </div>

        <button className="whiteBtn">Button</button>
      </section>

      {/* Footer */}
      <footer className="footer">

        <div className="footerLogo">
          <div className="logo">∞</div>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>

        <div className="footerLinks">
          <h4>Heading</h4>
          <p>Link here</p>
          <p>Link here</p>
          <p>Link here</p>
        </div>

        <div className="footerLinks">
          <h4>Heading</h4>
          <p>Link here</p>
          <p>Link here</p>
          <p>Link here</p>
        </div>

        <div className="footerLinks">
          <h4>Heading</h4>
          <p>Link here</p>
          <p>Link here</p>
          <p>Link here</p>
        </div>

        <div className="footerLinks">
          <h4>Connect with us</h4>

          <div className="socialIcons">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

      </footer>

    </div>
  );
};

export default FirstPage;
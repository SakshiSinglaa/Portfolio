import { useState, useEffect } from 'react';
import './Footer.css';
import myLogo1 from '../../Assets/myLogo1.png';
import scrollToTopImg from '../../Assets/scrollToTop.jpeg'; 

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={myLogo1} alt="footer_logo" />
          <p>I&apos;m a frontend developer from India.</p>
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        <div className="footer-bottom-right">
          {/* <p>Terms of Services</p>
          <p>Privacy Policy</p> */}
          <p>
            <a href="https://bio.link/sakshisingla">Connect with me</a>
          </p>
        </div>
      </div>

      {showScroll && (
        <div className="scroll-to-top" onClick={scrollToTop}>
          <img src={scrollToTopImg} alt="Scroll to top" />
        </div>
      )}
    </div>
  );
};

export default Footer;

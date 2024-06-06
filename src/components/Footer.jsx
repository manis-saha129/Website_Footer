import React from 'react';

const Footer = () => {
  return (
    <>
    <footer>
      <div className="footer-col">
        <h4>HELPFUL LINKS</h4>
        <ul>
          <li><a href="#">Courses</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Refund & Cancellation Policy</a></li>
          <li><a href="#">Terms & Conditions</a></li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>GET IN TOUCH</h4>
        <ul>
          <li><a href="spectov.in">spectov.in</a></li>
          <li><a href="Vansh@gmail.in">Vansh@gmail.in</a></li>
          <li><a href="support@spectov.in">support@spectov.in</a></li>
          <li><a href="#">Support Team : 10am-6pm</a></li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>COMPANY</h4>
        <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">Legal</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>CONNECT WITH US</h4>
        <div className="links">
          <a href="https://www.linkedin.com/company/specto-v/" target="_blank"><i className="fab fa-linkedin-in"></i></a>
          <a href="#" target="_blank"><i className="fab fa-facebook-f"></i></a>
          <a href="#" target="_blank"><i className="fab fa-youtube"></i></a>
          <a href="#" target="_blank"><i className="fab fa-twitter"></i></a>
          <a href="https://www.instagram.com/spectov_official?igsh=dzRhdmcyYXFsM2xo" target="_blank"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
    </footer>

    <div className='copyright'>
    <p>Copyright &copy; 2024</p>
  </div>
  </>
  );
};

export default Footer;
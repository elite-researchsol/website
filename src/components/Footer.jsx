import "./Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="contact">
      <div className="container footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3 className="footer-title">Elite Research Solutions</h3>
            <p className="footer-desc">
              Bridging the gap between raw data and high-impact publication.
            </p>
          </div>
          
          <div className="footer-contact">
            <h4 className="footer-subtitle">Contact Us</h4>
            <ul className="contact-list">
              <li>
                <strong>Email:</strong> <a href="mailto:elite@eliteresearch.info">elite@eliteresearch.info</a>
              </li>
              <li>
                <strong>Phone:</strong> <a href="tel:+918848330118">+91 88483 30118</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Elite Research Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

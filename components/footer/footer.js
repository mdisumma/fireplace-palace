function Footer() {
  return (
    <div className="footer">
      <div className="footer-column">
        <p>Find us on:</p>
        <ul className="footer-nav">
          <li>
            <a href="https://www.facebook.com" className="socials-link">
              Facebook
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com" className="socials-link">
              Instagram
            </a>
          </li>
          <li>
            <a href="https://www.tiktok.com" className="socials-link">
              TikTok
            </a>
          </li>
        </ul>
      </div>

      <div className="footer-column">
        <p>Contact us:</p>
        <address>
          <a href="mailto:info@firepalace.co.uk" className="email-link">
            info@firepalace.co.uk
          </a>
        </address>
      </div>
    </div>
  );
}

export default Footer;

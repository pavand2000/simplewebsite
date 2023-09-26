import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <p>
        Have questions, suggestions, or just want to get in touch? We'd love to
        hear from you! Feel free to reach out using the contact information
        below:
      </p>

      <h2>Email</h2>
      <p>Email: contact@example.com</p>

      <h2>Phone</h2>
      <p>Phone: (91) 9148636413</p>

      <h2>Address</h2>
      <p>Kengeri Gaming Street</p>
      <p>Kengeri Upanagara,560060</p>

      <h2>Social Media</h2>
      <p>
        Connect with us on social media platforms to stay updated on our latest
        events, news, and gaming highlights.
      </p>
      <ul>
        <li>
          <a href="https://www.facebook.com/gamingcommunity" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
        </li>
        <li>
          <a href="https://twitter.com/gamingcommunity" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/gamingcommunity" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;

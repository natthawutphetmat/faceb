
import React, { useEffect } from 'react';
import Script from 'next/script';

const Layout = ({ children }) => {
  useEffect(() => {
    window.fbq?.('track', 'PageView');
  }, []);

  return (
    <div>
      <Script
        strategy="afterInteractive"
        src={`https://connect.facebook.net/en_US/fbevents.js`}
        onLoad={() => {
          fbq('init', '819900423353826'); 
        }}
      />
      <header>
        <h1>My Website Header</h1>
      </header>
      <main>{children}</main>
      <footer>
        <p>© 2024 My Website</p>
      </footer>
    </div>
  );
};

export default Layout;

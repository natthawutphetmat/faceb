"use client"; // บอก Next.js ว่าไฟล์นี้ควรจะทำงานบนไคลเอ็นต์เท่านั้น

import React from 'react';
import Script from 'next/script';

const Layout = ({ children }) => {
  // ตัวอย่างการใช้งาน Script สำหรับโหลด Facebook Pixel
  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://connect.facebook.net/en_US/fbevents.js"
        onLoad={() => {
          fbq('init', '819900423353826'); // ใช้งาน Pixel ID จริงของคุณ
          fbq('track', 'PageView');
        }}
      />
      <div>
        <header>
          <h1>My Website Header</h1>
        </header>
        <main>{children}</main>
        <footer>
          <p>© 2024 My Website</p>
        </footer>
      </div>
    </>
  );
};

export default Layout;

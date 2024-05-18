import "bootstrap/dist/css/bootstrap.min.css";
import './app.css'
import './globals.css'



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Layout UI */}
        <main>{children}</main>
      </body>
    </html>
  )
}

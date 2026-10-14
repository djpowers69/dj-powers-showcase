import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DJ Powers | DJ Doge Showcase",
  description: "Memes, videos, and music videos by DJ Powers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav className="nav">
          <div className="nav-inner">
            <a href="/" className="logo">DJ POWERS</a>
            <a href="/#memes">Memes</a>
            <a href="/#videos">Videos</a>
            <a href="/#music">Music Videos</a>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}

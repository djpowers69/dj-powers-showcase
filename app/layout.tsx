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
            <a href="/#music">Music</a>
            <a href="/#games">Games</a>
            <button id="theme-toggle" style={{marginLeft: "auto", background: "transparent", border: "1px solid #444", color: "#fff", padding: "0.4rem 0.8rem", borderRadius: "4px", cursor: "pointer"}}>
              Dark
            </button>
          </div>
        </nav>
        {children}
        <script dangerouslySetInnerHTML={{
          __html: `
            const btn = document.getElementById('theme-toggle');
            const body = document.body;
            btn.addEventListener('click', () => {
              if (body.style.background === 'white' || body.style.background === '') {
                body.style.background = '#000';
                body.style.color = '#fff';
                btn.textContent = 'Dark';
              } else {
                body.style.background = 'white';
                body.style.color = '#000';
                btn.textContent = 'Light';
              }
            });
          `
        }} />
      </body>
    </html>
  );
}

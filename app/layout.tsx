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
      <body className="bg-black text-white min-h-screen">
        <nav className="border-b border-gray-800 p-4">
          <div className="max-w-6xl mx-auto flex gap-6">
            <a href="/" className="font-bold text-xl">DJ POWERS</a>
            <a href="/#memes" className="hover:text-gray-300">Memes</a>
            <a href="/#videos" className="hover:text-gray-300">Videos</a>
            <a href="/#music" className="hover:text-gray-300">Music Videos</a>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}

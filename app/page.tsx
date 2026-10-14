export default function Home() {
  return (
    <main className="max-w-6xl mx-auto p-8">
      <section className="text-center py-16">
        <h1 className="text-5xl font-bold mb-4">DJ Powers</h1>
        <p className="text-xl text-gray-400">Memes · Videos · Music</p>
      </section>

      <section id="memes" className="py-12">
        <h2 className="text-3xl font-bold mb-6">Memes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-900 rounded-lg p-4 aspect-square flex items-center justify-center">
            Meme placeholder
          </div>
          <div className="bg-gray-900 rounded-lg p-4 aspect-square flex items-center justify-center">
            Meme placeholder
          </div>
          <div className="bg-gray-900 rounded-lg p-4 aspect-square flex items-center justify-center">
            Meme placeholder
          </div>
        </div>
      </section>

      <section id="videos" className="py-12">
        <h2 className="text-3xl font-bold mb-6">Videos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900 rounded-lg aspect-video flex items-center justify-center">
            Video placeholder
          </div>
          <div className="bg-gray-900 rounded-lg aspect-video flex items-center justify-center">
            Video placeholder
          </div>
        </div>
      </section>

      <section id="music" className="py-12">
        <h2 className="text-3xl font-bold mb-6">Music Videos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900 rounded-lg aspect-video flex items-center justify-center">
            Music video placeholder
          </div>
          <div className="bg-gray-900 rounded-lg aspect-video flex items-center justify-center">
            Music video placeholder
          </div>
        </div>
      </section>
    </main>
  );
}

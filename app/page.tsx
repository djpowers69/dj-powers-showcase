export default function Home() {
  return (
    <main className="main">
      <section className="hero">
        <h1>DJ Powers</h1>
        <p>Memes · Videos · Music</p>
      </section>

      <section id="memes">
        <h2>Memes</h2>
        <div className="grid grid-3">
          <div className="card">Meme placeholder</div>
          <div className="card">Meme placeholder</div>
          <div className="card">Meme placeholder</div>
        </div>
      </section>

      <section id="videos">
        <h2>Videos</h2>
        <div className="grid grid-2">
          <div className="card card-video">Video placeholder</div>
          <div className="card card-video">Video placeholder</div>
        </div>
      </section>

      <section id="music">
        <h2>Music Videos</h2>
        <div className="grid grid-2">
          <div className="card card-video">Music video placeholder</div>
          <div className="card card-video">Music video placeholder</div>
        </div>
      </section>
    </main>
  );
}

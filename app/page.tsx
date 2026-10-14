export default function Home() {
  return (
    <main className="main">
      <section className="hero">
        <h1>DJ Powers</h1>
        <p>Memes · Videos · Music · Games</p>
      </section>

      <section id="memes">
        <h2>Memes</h2>
        <div className="grid grid-3">
          <a href="https://x.com/DJpowers69/status/2109740593098494313" target="_blank" rel="noreferrer" className="card">
            MEGA MAGA MONSTER game
          </a>
          <a href="https://x.com/DJpowers69/status/2109137106027368699" target="_blank" rel="noreferrer" className="card">
            MEGA MAGA MONSTER clip
          </a>
          <div className="card">More coming</div>
        </div>
      </section>

      <section id="videos">
        <h2>Videos</h2>
        <div className="grid grid-2">
          <a href="https://x.com/DJpowers69/status/2108700848180355370" target="_blank" rel="noreferrer" className="card card-video">
            Spain / Kling AI
          </a>
          <div className="card card-video">More coming</div>
        </div>
      </section>

      <section id="music">
        <h2>Music Videos</h2>
        <div className="grid grid-2">
          <a href="https://x.com/DJpowers69/status/2110080490233593934" target="_blank" rel="noreferrer" className="card card-video">
            Small Steps (Timothy Brown)
          </a>
          <a href="https://x.com/DJpowers69/status/2108269069124460635" target="_blank" rel="noreferrer" className="card card-video">
            Bounce Baby Bounce lyric video
          </a>
        </div>
      </section>

      <section id="games">
        <h2>Games</h2>
        <div className="grid grid-3">
          <a href="https://megamonster.grok.me" target="_blank" rel="noreferrer" className="card card-video">
            MEGA MAGA MONSTER
          </a>
          <a href="https://khat.grok.me" target="_blank" rel="noreferrer" className="card card-video">
            Khat
          </a>
          <a href="https://magachud.grok.me" target="_blank" rel="noreferrer" className="card card-video">
            MAGA CHUD
          </a>
        </div>
      </section>
    </main>
  );
}

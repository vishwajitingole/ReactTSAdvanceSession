import { useState } from "react";

/* ------------------------------------------------------------------
   EDIT THIS BLOCK: all the book content lives here.
   Replace the placeholder text, links and image URLs with your own.
------------------------------------------------------------------- */
const BOOK = {
  title: "April",
  subtitle: "Poems for the season of waiting",
  tagline: "Forty poems about rain, distance and the people we write to.",
  coverColor: "#1d2a4d", // used for the 3D cover if you don't have a cover image
  coverImage: "", // e.g. "/images/cover-front.jpg" (leave empty to use the drawn cover)
  backBlurb:
    "Written over three monsoons, these poems follow one long letter that is never quite sent.",
  gallery: [
    // Add your own photos: { src: "/images/p1.jpg", alt: "Cover of the book" }
    // Leave empty to show placeholder frames.
  ],
  amazonUrl: "https://www.amazon.in/your-book-link",
  facebookUrl: "https://www.facebook.com/your-page-or-shop",
  price: "₹299",
  facts: ["Paperback", "112 pages", "40 poems", "English"],
  about: [
    "Monsoon Letters begins on the first day of rain and ends on the last. In between are poems about waiting at railway platforms, kitchens that smell of wet earth, and the small, stubborn habit of writing to someone who may never answer.",
    "The poems are short and plain-spoken. You can read one in a minute, then carry it around for the rest of the day.",
  ],
  themes: ["Rain", "Homesickness", "Letters", "Small towns", "Memory", "Hope"],
  poems: [
    {
      name: "First Rain",
      lines: [
        "The street forgets its dust,",
        "the tea stall pulls its tarp down like an eyelid,",
        "and every roof begins to say your name",
        "in a language only water speaks.",
      ],
    },
    {
      name: "Unsent",
      lines: [
        "I fold the letter into a boat",
        "and let the gutter decide.",
        "Somewhere past the market,",
        "past the bus stand and the banyan,",
        "it will learn what I could not say aloud.",
      ],
    },
    {
      name: "After",
      lines: [
        "When the rain stops, listen.",
        "The whole town is dripping,",
        "keeping time for a song",
        "that has just begun.",
      ],
    },
  ],
  praise: [
    { quote: "Quiet, exact and warm. I read it twice in one sitting.", by: "A reader, Bhopal" },
    { quote: "The poem 'Unsent' stayed with me all week.", by: "A reader, Pune" },
    { quote: "A small book that feels like a long evening.", by: "A reader, Indore" },
  ],
  author: {
    name: "Author Name",
    photo: "", // e.g. "/images/author.jpg"
    bio: [
      "Author Name grew up in a small town in Madhya Pradesh and has been writing poems since school. Their work has appeared in local magazines and open-mic evenings.",
      "When not writing, they teach, walk long distances and collect old postcards.",
    ],
    links: [
      { label: "Facebook", url: "https://www.facebook.com/your-page" },
      { label: "Instagram", url: "https://www.instagram.com/your-handle" },
    ],
  },
};

/* ------------------------------------------------------------------ */

const css = `
@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;1,9..144,400&family=Karla:wght@400;500;700&display=swap');

.pb{
  --night:#141b34; --night-2:#1d2a4d; --mist:#e9eef5; --paper:#f7f9fc;
  --gold:#e3a72f; --gold-deep:#a97410; --ink:#1a2036; --muted:#5a6580;
  font-family:'Karla',system-ui,sans-serif; color:var(--ink); background:var(--paper);
  line-height:1.65; font-size:17px; overflow-x:hidden;
}
.pb *{box-sizing:border-box}
.pb h1,.pb h2,.pb h3{font-family:'Fraunces',Georgia,serif;font-weight:600;line-height:1.15;margin:0}
.pb p{margin:0 0 1em}
.pb a{color:inherit}
.pb :focus-visible{outline:3px solid var(--gold);outline-offset:3px;border-radius:4px}
.pb-wrap{max-width:1080px;margin:0 auto;padding:0 24px}
.pb-section{padding:88px 0}

/* hero */
.pb-hero{background:radial-gradient(1200px 500px at 80% 0%,#2a3a6d 0%,transparent 60%),var(--night);color:#eef2fa;padding:72px 0 88px;position:relative}
.pb-rain{position:absolute;inset:0;pointer-events:none;opacity:.35;
  background-image:repeating-linear-gradient(100deg,transparent 0 22px,rgba(255,255,255,.07) 22px 23px);
  animation:pb-fall 1.4s linear infinite}
@keyframes pb-fall{to{background-position:-18px 60px}}
.pb-hero-grid{display:grid;grid-template-columns:1.1fr .9fr;gap:48px;align-items:center;position:relative}
.pb-hero h1{font-size:clamp(2.6rem,6vw,4.6rem);letter-spacing:-.01em}
.pb-sub{font-family:'Fraunces',serif;font-style:italic;font-size:1.3rem;color:#c9d3ea;margin:14px 0 18px}
.pb-tag{max-width:46ch;color:#b8c3de}
.pb-facts{display:flex;flex-wrap:wrap;gap:8px;margin:22px 0 30px;padding:0;list-style:none}
.pb-facts li{border:1px solid rgba(255,255,255,.25);border-radius:999px;padding:4px 14px;font-size:.92rem;color:#d7dff1}
.pb-cta{display:flex;flex-wrap:wrap;gap:12px}
.pb-btn{display:inline-block;text-decoration:none;font-weight:700;padding:13px 24px;border-radius:10px;border:2px solid var(--gold);cursor:pointer;font:inherit;font-weight:700;transition:transform .15s}
.pb-btn:hover{transform:translateY(-2px)}
.pb-btn-gold{background:var(--gold);color:#201605}
.pb-btn-line{background:transparent;color:#eef2fa;border-color:rgba(255,255,255,.45)}
.pb-btn-dark{background:var(--night);color:#fff;border-color:var(--night)}
.pb-btn-dark-line{background:transparent;color:var(--night);border-color:var(--night)}

/* 3D book */
.pb-stage{perspective:1400px;display:flex;flex-direction:column;align-items:center;gap:18px}
.pb-book{width:260px;height:380px;position:relative;transform-style:preserve-3d;transition:transform .8s cubic-bezier(.2,.8,.2,1);cursor:pointer;background:none;border:0;padding:0}
.pb-face{position:absolute;inset:0;border-radius:3px 10px 10px 3px;backface-visibility:hidden;overflow:hidden;box-shadow:0 30px 60px -20px rgba(0,0,0,.7)}
.pb-front{display:flex;flex-direction:column;justify-content:space-between;padding:28px 24px;color:#f6efd9;text-align:left;
  background:linear-gradient(90deg,rgba(0,0,0,.28) 0 6px,rgba(255,255,255,.08) 7px 9px,transparent 10px),var(--cover)}
.pb-front h3{font-size:1.9rem;color:#fff}
.pb-front small{font-size:.85rem;opacity:.85}
.pb-drops{height:90px;position:relative}
.pb-drops i{position:absolute;width:2px;border-radius:2px;background:linear-gradient(transparent,rgba(255,255,255,.7));animation:pb-drip 2.2s linear infinite}
@keyframes pb-drip{from{transform:translateY(-30px);opacity:0}30%{opacity:1}to{transform:translateY(80px);opacity:0}}
.pb-back{transform:rotateY(180deg);background:#f2ecd9;color:#2a2418;padding:30px 26px;font-family:'Fraunces',serif;font-style:italic;display:flex;align-items:center}
.pb-edge{position:absolute;top:2px;bottom:2px;right:0;width:26px;transform:translateX(13px) rotateY(90deg);background:repeating-linear-gradient(#f6f1e2 0 2px,#d9d2bc 2px 3px)}
.pb-hint{font-size:.9rem;color:#9fb0d6}

/* gallery */
.pb-title{font-size:clamp(1.9rem,4vw,2.8rem);margin-bottom:12px}
.pb-lead{color:var(--muted);max-width:56ch;margin-bottom:32px}
.pb-gal{display:grid;grid-template-columns:1fr 130px;gap:16px}
.pb-main{aspect-ratio:4/3;border-radius:14px;background:var(--mist);overflow:hidden;display:grid;place-items:center;color:var(--muted)}
.pb-main img{width:100%;height:100%;object-fit:cover}
.pb-thumbs{display:flex;flex-direction:column;gap:12px}
.pb-thumb{border:3px solid transparent;border-radius:10px;padding:0;overflow:hidden;background:var(--mist);aspect-ratio:4/3;cursor:pointer;display:grid;place-items:center;color:var(--muted);font-size:.8rem}
.pb-thumb[aria-current="true"]{border-color:var(--gold)}
.pb-thumb img{width:100%;height:100%;object-fit:cover}

/* about */
.pb-about{background:var(--mist)}
.pb-about-grid{display:grid;grid-template-columns:1.2fr 1fr;gap:56px}
.pb-about p{max-width:60ch}
.pb-themes{display:flex;flex-wrap:wrap;gap:10px;padding:0;list-style:none;margin:0}
.pb-themes li{background:#fff;border-left:4px solid var(--gold);padding:8px 16px;border-radius:4px;font-weight:500}

/* poems */
.pb-poems{background:var(--night);color:#eef2fa}
.pb-poems .pb-lead{color:#b8c3de}
.pb-tabs{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:28px}
.pb-tab{background:transparent;color:#cfd8ef;border:1px solid rgba(255,255,255,.3);padding:8px 18px;border-radius:999px;cursor:pointer;font:inherit}
.pb-tab[aria-selected="true"]{background:var(--gold);color:#201605;border-color:var(--gold);font-weight:700}
.pb-poem{font-family:'Fraunces',serif;font-size:clamp(1.3rem,2.6vw,1.8rem);line-height:1.7;max-width:34ch}
.pb-line{display:block;background:none;border:0;color:inherit;font:inherit;text-align:left;padding:0 6px;margin:0 -6px;cursor:copy;border-radius:6px}
.pb-line:hover{background:rgba(227,167,47,.18)}
.pb-copied{min-height:1.6em;color:var(--gold);margin-top:18px;font-size:.95rem}

/* praise */
.pb-praise{display:grid;grid-template-columns:repeat(3,1fr);gap:28px}
.pb-quote{margin:0;padding:6px 0 0 20px;border-left:3px solid var(--gold)}
.pb-quote p{font-family:'Fraunces',serif;font-size:1.2rem;font-style:italic}
.pb-quote cite{color:var(--muted);font-size:.95rem}

/* author */
.pb-author{background:var(--mist)}
.pb-author-grid{display:grid;grid-template-columns:240px 1fr;gap:48px;align-items:start}
.pb-photo{aspect-ratio:1;border-radius:50% 50% 50% 8px;overflow:hidden;background:var(--night-2);color:#c9d3ea;display:grid;place-items:center;font-family:'Fraunces',serif;font-size:4rem}
.pb-photo img{width:100%;height:100%;object-fit:cover}
.pb-links{display:flex;gap:18px;margin-top:8px}

/* buy */
.pb-buy{text-align:center;background:linear-gradient(180deg,var(--paper),#dfe7f3)}
.pb-buy .pb-cta{justify-content:center;margin-top:28px}
.pb-price{font-family:'Fraunces',serif;font-size:2rem;margin-top:8px}
.pb-foot{padding:28px 0;text-align:center;color:var(--muted);font-size:.9rem;background:#dfe7f3}

@media (max-width:820px){
  .pb-section{padding:60px 0}
  .pb-hero-grid,.pb-about-grid,.pb-author-grid,.pb-praise{grid-template-columns:1fr}
  .pb-gal{grid-template-columns:1fr}
  .pb-thumbs{flex-direction:row}
  .pb-thumb{flex:1}
  .pb-author-grid{gap:28px}
  .pb-photo{max-width:200px}
}
@media (prefers-reduced-motion:reduce){
  .pb-rain,.pb-drops i{animation:none}
  .pb-book,.pb-btn{transition:none}
}
`;

function Cover({ book }) {
  if (book.coverImage) {
    return <img src={book.coverImage} alt={`Front cover of ${book.title}`} style={{ width: "100%", height: "100%", objectFit: "cover" }} />;
  }
  return (
    <>
      <div className="pb-drops" aria-hidden="true">
        {[8, 26, 44, 62, 80, 94].map((l, i) => (
          <i key={i} style={{ left: `${l}%`, height: 24 + (i % 3) * 10, animationDelay: `${i * 0.35}s` }} />
        ))}
      </div>
      <div>
        <h3>{book.title}</h3>
        <small>{book.subtitle}</small>
      </div>
    </>
  );
}

export default function PoetryBookPage({ book = BOOK }) {
  const [flipped, setFlipped] = useState(false);
  const [tilt, setTilt] = useState(-18);
  const [shot, setShot] = useState(0);
  const [poem, setPoem] = useState(0);
  const [copied, setCopied] = useState("");

  const slots = book.gallery.length ? book.gallery : [1, 2, 3].map((n) => ({ placeholder: `Photo ${n}` }));
  const current = slots[shot];
  const activePoem = book.poems[poem];

  const onMove = (e) => {
    if (flipped) return;
    const r = e.currentTarget.getBoundingClientRect();
    setTilt(-30 + ((e.clientX - r.left) / r.width) * 40);
  };

  const copyLine = async (line) => {
    const text = `"${line}" — ${book.author.name}, ${book.title}`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied("Line copied. Paste it anywhere you like.");
    } catch {
      setCopied("Copy isn't available in this browser. Select the line and copy it manually.");
    }
  };

  return (
    <div className="pb">
      <style>{css}</style>

      <header className="pb-hero">
        <div className="pb-rain" aria-hidden="true" />
        <div className="pb-wrap pb-hero-grid">
          <div>
            <h1>{book.title}</h1>
            <p className="pb-sub">{book.subtitle}</p>
            <p className="pb-tag">{book.tagline}</p>
            <ul className="pb-facts">
              {book.facts.map((f) => <li key={f}>{f}</li>)}
            </ul>
            <div className="pb-cta">
              <a className="pb-btn pb-btn-gold" href={book.amazonUrl} target="_blank" rel="noopener noreferrer">Buy on Amazon</a>
              <a className="pb-btn pb-btn-line" href={book.facebookUrl} target="_blank" rel="noopener noreferrer">Buy on Facebook</a>
            </div>
          </div>

          <div className="pb-stage" onPointerMove={onMove} onPointerLeave={() => !flipped && setTilt(-18)}>
            <button
              className="pb-book"
              style={{ transform: `rotateY(${flipped ? 180 : tilt}deg) rotateX(4deg)`, "--cover": book.coverColor }}
              onClick={() => setFlipped((f) => !f)}
              aria-label={flipped ? "Show the front cover" : "Turn the book over to read the back cover"}
            >
              <span className="pb-face pb-front"><Cover book={book} /></span>
              <span className="pb-face pb-back">{book.backBlurb}</span>
              <span className="pb-edge" aria-hidden="true" />
            </button>
            <span className="pb-hint">Move your mouse over the book. Click to turn it over.</span>
          </div>
        </div>
      </header>

      <section className="pb-section">
        <div className="pb-wrap">
          <h2 className="pb-title">A look at the book</h2>
          <p className="pb-lead">Cover, pages and the paper it is printed on.</p>
          <div className="pb-gal">
            <div className="pb-main">
              {current.src ? <img src={current.src} alt={current.alt || `${book.title} photo ${shot + 1}`} /> : <span>{current.placeholder}</span>}
            </div>
            <div className="pb-thumbs">
              {slots.map((s, i) => (
                <button key={i} className="pb-thumb" aria-current={i === shot} aria-label={`Show photo ${i + 1}`} onClick={() => setShot(i)}>
                  {s.src ? <img src={s.src} alt="" /> : `Photo ${i + 1}`}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-section pb-about">
        <div className="pb-wrap pb-about-grid">
          <div>
            <h2 className="pb-title">What the book is about</h2>
            {book.about.map((p, i) => <p key={i}>{p}</p>)}
          </div>
          <div>
            <h3 style={{ marginBottom: 16 }}>Themes you will find inside</h3>
            <ul className="pb-themes">{book.themes.map((t) => <li key={t}>{t}</li>)}</ul>
          </div>
        </div>
      </section>

      <section className="pb-section pb-poems">
        <div className="pb-wrap">
          <h2 className="pb-title">Read a sample poem</h2>
          <p className="pb-lead">Pick a poem. Click any line to copy it with the book's name, ready to share.</p>
          <div className="pb-tabs" role="tablist" aria-label="Sample poems">
            {book.poems.map((p, i) => (
              <button key={p.name} role="tab" className="pb-tab" aria-selected={i === poem} onClick={() => { setPoem(i); setCopied(""); }}>
                {p.name}
              </button>
            ))}
          </div>
          <div className="pb-poem" role="tabpanel">
            {activePoem.lines.map((l, i) => (
              <button key={i} className="pb-line" onClick={() => copyLine(l)}>{l}</button>
            ))}
          </div>
          <p className="pb-copied" role="status">{copied}</p>
        </div>
      </section>

      <section className="pb-section">
        <div className="pb-wrap">
          <h2 className="pb-title" style={{ marginBottom: 32 }}>What readers say</h2>
          <div className="pb-praise">
            {book.praise.map((q, i) => (
              <figure className="pb-quote" key={i}>
                <p>{q.quote}</p>
                <cite>{q.by}</cite>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-section pb-author">
        <div className="pb-wrap pb-author-grid">
          <div className="pb-photo">
            {book.author.photo ? <img src={book.author.photo} alt={book.author.name} /> : <span aria-hidden="true">{book.author.name.charAt(0)}</span>}
          </div>
          <div>
            <h2 className="pb-title">About {book.author.name}</h2>
            {book.author.bio.map((p, i) => <p key={i}>{p}</p>)}
            <div className="pb-links">
              {book.author.links.map((l) => (
                <a key={l.label} href={l.url} target="_blank" rel="noopener noreferrer">{l.label}</a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-section pb-buy">
        <div className="pb-wrap">
          <h2 className="pb-title">Get your copy of {book.title}</h2>
          <p className="pb-price">{book.price}</p>
          <div className="pb-cta">
            <a className="pb-btn pb-btn-dark-line" href={book.amazonUrl} target="_blank" rel="noopener noreferrer">Buy on Amazon</a>
            <a className="pb-btn pb-btn-dark-line" href={book.facebookUrl} target="_blank" rel="noopener noreferrer">Buy on Facebook</a>
          </div>
        </div>
      </section>

      <footer className="pb-foot">© {new Date().getFullYear()} {book.author.name}. All rights reserved.</footer>
    </div>
  );
}

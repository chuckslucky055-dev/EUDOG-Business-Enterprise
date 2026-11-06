import './styles.css';

const app = document.querySelector<HTMLDivElement>('#app');

if (!app) throw new Error('App root not found');

app.innerHTML = `
<header class="topbar">
  <div class="nav">
    <a class="brand" href="#home"><span class="mark">E</span><span>EUDOG <small>BUSINESS ENTERPRISE</small></span></a>
    <nav><a href="#about">About</a><a href="#services">Services</a><a href="#contact">Contact</a></nav>
    <a class="nav-cta" href="tel:+2348102049135">Call us</a>
  </div>
</header>

<main id="home">
  <section class="hero">
    <div class="hero-copy">
      <div class="eyebrow">LAGOS • NIGERIA</div>
      <h1>Business support with a <em>professional</em> presence.</h1>
      <p class="lead">A modern digital home for EUDOG BUSINESS ENTERPRISE — designed to make the business easier to discover, understand and contact.</p>
      <div class="actions"><a class="button primary" href="tel:+2348102049135">Call EUDOG</a><a class="button ghost" href="#contact">View contact details <span>↓</span></a></div>
      <div class="verified"><span>✓</span> Public listing verified • Lagos Island</div>
    </div>
    <div class="hero-card">
      <div class="card-glow"></div>
      <div class="card-label">EUDOG</div>
      <div class="card-title">BUSINESS<br>ENTERPRISE</div>
      <div class="card-line"></div>
      <div class="card-meta">Business Management Consultant</div>
    </div>
  </section>

  <section class="trust">
    <div><strong>5.0</strong><span>Google business rating</span></div>
    <div><strong>3</strong><span>Public reviews listed</span></div>
    <div><strong>Lagos</strong><span>Lagos Island, Marina</span></div>
    <div><strong>Open</strong><span>Listed hours available</span></div>
  </section>

  <section class="section" id="about">
    <div class="section-kicker">01 / ABOUT</div>
    <div class="two-col"><div><h2>A clear first impression for a growing business.</h2></div><div><p>This demo is built around the public business listing found for EUDOG BUSINESS ENTERPRISE. The listing identifies the business as a <strong>Business management consultant</strong> in Lagos.</p><p>Because the public footprint is limited, this demo intentionally avoids inventing a company history, team members, certifications or specific consulting packages.</p></div></div>
  </section>

  <section class="section dark" id="services">
    <div class="section-kicker">02 / SERVICES</div>
    <h2>Business management,<br><span>presented professionally.</span></h2>
    <div class="service-grid">
      <article><span>01</span><h3>Business Management</h3><p>Position the listed business category front and centre with a clear, professional presentation.</p></article>
      <article><span>02</span><h3>Consulting</h3><p>A dedicated space for EUDOG to add its confirmed consulting services and packages.</p></article>
      <article><span>03</span><h3>Business Enquiries</h3><p>Give prospective clients a direct path to call, ask questions and request more information.</p></article>
    </div>
    <div class="note">Demo note: individual service packages are placeholders for confirmation with EUDOG before launch.</div>
  </section>

  <section class="section" id="contact">
    <div class="section-kicker">03 / CONTACT</div>
    <div class="contact-grid">
      <div><h2>Let's talk<br>business.</h2><p class="muted">Use the verified public contact details below to reach EUDOG BUSINESS ENTERPRISE.</p></div>
      <div class="contact-card">
        <div><label>PHONE</label><a href="tel:+2348102049135">+234 810 204 9135</a></div>
        <div><label>ADDRESS</label><p>4th Floor, 50, Bookshop House,<br>52 Broad St, Lagos Island, Marina,<br>Lagos, Nigeria</p></div>
        <div><label>LISTED CATEGORY</label><p>Business management consultant</p></div>
        <a class="button primary wide" href="tel:+2348102049135">Contact EUDOG →</a>
      </div>
    </div>
  </section>
</main>

<footer><div class="brand"><span class="mark">E</span><span>EUDOG <small>BUSINESS ENTERPRISE</small></span></div><span>Demo website concept • Lagos, Nigeria</span></footer>
`;

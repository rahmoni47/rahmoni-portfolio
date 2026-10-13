import { useEffect, useState, type ReactNode } from 'react'
import { EMAIL, LINKS, REPOS, STACK, PRINCIPLES } from './data'
import { BRAND } from './icons'

const LINE: Record<string, string> = {
  'REST APIs': 'M4 8h14m-4-4 4 4-4 4M20 16H6m4-4-4 4 4 4',
  'CI/CD': 'M20 12a8 8 0 1 1-3-6.2M20 4v5h-5M9 12l2 2 4-4',
}

function Icon({ name }: { name: string }) {
  const b = BRAND[name]
  if (b) return <svg viewBox="0 0 24 24" aria-hidden="true" className="ico"><path d={b} fill="currentColor" /></svg>
  return <svg viewBox="0 0 24 24" aria-hidden="true" className="ico" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={LINE[name] ?? 'M8 6l-6 6 6 6M16 6l6 6-6 6'} /></svg>
}

const NAV = [['about', 'About'], ['work', 'Work'], ['engineering', 'Engineering'], ['contact', 'Contact']]

const T = {
  bypass: (
    <svg viewBox="0 0 120 90" aria-hidden="true"><rect x="8" y="30" width="30" height="30" rx="4" /><rect x="82" y="30" width="30" height="30" rx="4" /><path className="a" d="M40 40h38m-6-5 6 5-6 5" /><path d="M80 52H44m6-5-6 5 6 5" strokeDasharray="3 3" /><path d="M10 78h100" strokeDasharray="1 7" strokeLinecap="round" /></svg>
  ),
  chat: (
    <svg viewBox="0 0 120 90" aria-hidden="true"><rect x="8" y="12" width="62" height="24" rx="6" /><rect className="f" x="50" y="44" width="62" height="24" rx="6" /><circle className="a" cx="18" cy="78" r="3" /><circle className="a" cx="28" cy="78" r="3" /><circle className="a" cx="38" cy="78" r="3" /></svg>
  ),
  darja: (
    <svg viewBox="0 0 120 90" aria-hidden="true"><text x="60" y="58" textAnchor="middle" fontSize="40" className="ar" direction="rtl">دارجة</text><path d="M14 74h92" /><circle className="f" cx="14" cy="74" r="3" /><circle className="f" cx="40" cy="74" r="3" /><circle className="f" cx="66" cy="74" r="3" /><circle className="f" cx="92" cy="74" r="3" /></svg>
  ),
  tesla: (
    <svg viewBox="0 0 120 90" aria-hidden="true"><path d="M20 66A44 44 0 0 1 100 66" strokeWidth="6" /><path className="a" d="M20 66A44 44 0 0 1 68 22" strokeWidth="6" /><path d="M60 66l16-26" /><circle className="f" cx="60" cy="66" r="4" /></svg>
  ),
}

function Project({ title, kind, thumb, tech, href, children, extra }: { title: string; kind: string; thumb: ReactNode; tech: string; href: string; children: ReactNode; extra?: ReactNode }) {
  return (
    <article className="proj">
      <div className="thumb">{thumb}</div>
      <div className="pbody">
        <h3>{title}</h3>
        <p className="kind">{kind}</p>
        <p>{children}</p>
        {extra}
        <p className="tech">{tech}</p>
      </div>
      <a className="src" href={href} target="_blank" rel="noopener noreferrer" aria-label={`${title}: view source on GitHub (opens in a new tab)`}>Source<span aria-hidden="true"> ↗</span></a>
    </article>
  )
}

export default function App() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('about')
  useEffect(() => {
    const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && setActive(e.target.id)), { rootMargin: '-35% 0px -60% 0px' })
    NAV.forEach(([id]) => { const el = document.getElementById(id); if (el) io.observe(el) })
    const k = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', k)
    return () => { io.disconnect(); window.removeEventListener('keydown', k) }
  }, [])

  return (
    <div className="shell">
      <a className="skip" href="#main">Skip to content</a>
      <aside className="side">
        <div className="side-in">
          <div className="top">
            <a className="status" href={`mailto:${EMAIL}`}><span className="dot" aria-hidden="true" />Open to freelance and engineering roles</a>
            <button className="burger" aria-expanded={open} aria-controls="menu" onClick={() => setOpen(!open)}>{open ? 'Close' : 'Menu'}</button>
          </div>
          <div className="hero-row">
            <div className="hero-photo-wrap">
              <img src="/avatar.jpg" alt="Abderrahim Ghedjati (Rahmoni)" className="hero-photo" width="180" height="225" loading="eager" />
            </div>
            <div className="hero-intro">
              <h1>Rahmoni</h1>
              <p className="role">Abderrahim Ghedjati. Software engineer, Algeria.</p>
              <p className="line">I engineer backend systems that products run on, and turn business requirements into working software.</p>
            </div>
          </div>
          <nav id="menu" aria-label="Primary" className={open ? 'open' : ''}>
            {NAV.map(([id, l]) => <a key={id} href={`#${id}`} aria-current={active === id ? 'true' : undefined} onClick={() => setOpen(false)}>{l}</a>)}
          </nav>
          <ul className="social">
            <li><a href={LINKS.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href={LINKS.instagram} target="_blank" rel="noopener noreferrer">Instagram</a></li>
          </ul>
        </div>
      </aside>

      <main id="main">
        <section id="about">
          <h2>About</h2>
          <p className="big">I build the part of software you never see: the APIs, data and logic that make an application actually work.</p>
          <p>I study software engineering at Université Abdelhamid Mehri Constantine 2 and focus on backend development with Java and Spring Boot. I care about architecture, databases and infrastructure, and about delivering complete applications, not isolated pieces.</p>
          <p>If you are not technical: tell me what your product needs to do, and I will build the reliable system behind it, connect it to your data and get it deployed.</p>
        </section>

        <section id="work">
          <h2>Selected work</h2>
          <div className="list">
            <Project title="Real-time WebSocket chat" kind="Real-time systems" thumb={T.chat} href={REPOS.chat} tech="Java, Spring Boot, WebSocket, STOMP">
              A chat app where the server pushes messages to every connected client instantly, using bidirectional, event-driven messaging.
            </Project>
            <Project title="Darja compiler and VS Code tool" kind="Compilers, developer tools" thumb={T.darja} href={REPOS.darja} tech="Compiler design, Lexer, Parser, AST, Interpreter, VS Code extension"
              extra={<p className="pipe" aria-label="Pipeline: lexer, parser, AST, interpreter">Lexer → Parser → AST → Interpreter</p>}>
              An educational programming language with Algerian Darija and Arabic keywords, its own compiler and a VS Code extension. My most original project.
            </Project>
            <Project title="Render Bypass System" kind="Backend engineering, automation" thumb={T.bypass} href={REPOS.bypass} tech="Java, Spring Boot, REST APIs, scheduled tasks">
              A lightweight Spring Boot service that sends scheduled health-check requests to configured endpoints. It explores scheduling, HTTP and monitoring, with no promises about any host's policies.
            </Project>
            <Project title="Automotive UI study" kind="Desktop UI, embedded interfaces" thumb={T.tesla} href={REPOS.tesla} tech="C++, Qt Quick, QML">
              A Tesla-inspired instrument cluster in Qt Quick, exploring adaptive layouts and C++ to QML integration. Not affiliated with Tesla.
            </Project>
          </div>
        </section>

        <section id="engineering">
          <h2>Engineering approach</h2>
          <dl className="principles">
            {PRINCIPLES.map(p => <div key={p.title}><dt>{p.title}</dt><dd>{p.body}</dd></div>)}
          </dl>
          <h3 className="sub">Toolkit</h3>
          <div className="stack">
            {STACK.map(s => (
              <div key={s.group} className="grp"><h4>{s.group}</h4><ul>{s.items.map(i => <li key={i}><Icon name={i} />{i}</li>)}</ul></div>
            ))}
          </div>
        </section>

        <section id="contact">
          <h2>Contact</h2>
          <p className="big">Have something to build? Tell me what it needs to do.</p>
          <a className="mail" href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </section>
        <footer>© Abderrahim Ghedjati. Built with React and Vite.</footer>
      </main>
    </div>
  )
}

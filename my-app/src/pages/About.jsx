import { Link } from 'react-router-dom'

import deskCraft from '../assets/desk-craft.webp'
import setup from '../assets/setup.webp'
import woodMaterial from '../assets/wood-material.webp'
import workspaceDetail from '../assets/workspace-detail.webp'

const principles = [
  {
    number: '01',
    title: 'Edit before adding',
    text: 'A desk should feel lighter after every piece is placed, not busier.',
  },
  {
    number: '02',
    title: 'Use earns attention',
    text: 'Comfort, reach, light, and storage matter more than decorative noise.',
  },
  {
    number: '03',
    title: 'Everything should pair',
    text: 'Surfaces, seating, and tools are chosen as one quiet system.',
  },
]

const materialNotes = ['Warm oak finishes', 'Matte metal details', 'Soft neutral seating', 'Setup-ready packaging']

function About() {
  return (
    <main className="about-page">
      <section className="story-hero">
        <div className="story-hero-copy">
          <div className="story-eyebrow">
            <span>DeskHaus story</span>
            <strong>Built for everyday focus</strong>
          </div>
          <h1>We make workspaces feel calm before the work begins.</h1>
        </div>

        <div className="story-hero-note">
          <p>
            DeskHaus is a small edit of desks, seating, lighting, and tools that
            work together without making the room feel staged.
          </p>
          <Link to="/products" className="home-pill-link">
            Browse the edit
          </Link>
        </div>
      </section>

      <section className="story-image-band">
        <img src={setup} alt="Complete DeskHaus workspace setup" />
        <div className="story-image-caption">
          <span>Setup thinking</span>
          <strong>One room, one visual language.</strong>
        </div>
      </section>

      <section className="story-principles" aria-label="DeskHaus principles">
        <div className="story-section-heading">
          <p className="section-kicker">Principles</p>
          <h2>Less furniture logic. More workspace logic.</h2>
        </div>

        <div className="principle-list">
          {principles.map((principle) => (
            <article key={principle.number} className="principle-row">
              <span>{principle.number}</span>
              <h3>{principle.title}</h3>
              <p>{principle.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="story-split" id="materials">
        <div className="story-split-copy">
          <p className="section-kicker">Materials</p>
          <h2>Warm where you touch it. Quiet where you see it.</h2>
          <p>
            We lean on oak textures, matte finishes, breathable seating, and
            compact forms. The result is premium without becoming delicate.
          </p>

          <div className="material-note-list">
            {materialNotes.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>

        <div className="story-split-image">
          <img src={woodMaterial} alt="Close view of oak workspace material" />
        </div>
      </section>

      <section className="story-split reverse">
        <div className="story-split-image">
          <img src={deskCraft} alt="Desk product craftsmanship" />
        </div>

        <div className="story-split-copy">
          <p className="section-kicker">Daily routines</p>
          <h2>Designed around the moments that repeat every day.</h2>
          <p>
            Opening a laptop, reaching for a notebook, adjusting the chair,
            switching on a lamp. The details stay simple because the routine
            already asks enough from you.
          </p>
        </div>
      </section>

      <section className="story-closing">
        <img src={workspaceDetail} alt="Warm desk detail with lamp and plant" />
        <div>
          <p className="section-kicker">The goal</p>
          <h2>A desk that feels ready, not precious.</h2>
          <p>
            DeskHaus pieces are meant to be used every day, rearranged when life
            changes, and kept because they make the room easier to return to.
          </p>
        </div>
      </section>
    </main>
  )
}

export default About

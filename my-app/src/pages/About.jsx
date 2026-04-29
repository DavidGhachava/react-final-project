import woodMaterial from '../assets/wood-material.webp'
import workspaceDetail from '../assets/workspace-detail.webp'
import deskCraft from '../assets/desk-craft.webp'

function About() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div>
          <p className="about-label">About DeskHaus</p>
          <h1>We design calmer workspaces for focused everyday work.</h1>
          <p>
            DeskHaus brings together warm materials, supportive furniture, and
            simple organization pieces for desks that feel clear, comfortable,
            and ready to use.
          </p>
        </div>

        <div className="about-hero-card">
          <img src={workspaceDetail} alt="Minimal workspace detail" />
        </div>
      </section>

      <section className="about-split">
        <div className="about-image-card">
          <img src={woodMaterial} alt="Premium oak wood material" />
        </div>

        <div className="about-text-block" id="materials">
          <p className="about-label">Materials</p>
          <h2>Warm textures, clean lines, and pieces that earn their place.</h2>
          <p>
            Our products use oak finishes, soft neutral tones, matte details,
            and durable everyday surfaces. The goal is a workspace that feels
            premium without becoming delicate or distracting.
          </p>
        </div>
      </section>

      <section className="about-split reverse">
        <div className="about-text-block">
          <p className="about-label">Daily routines</p>
          <h2>Furniture chosen for real work, not showroom corners.</h2>
          <p>
            Every DeskHaus setup starts with the small moments that shape a day:
            opening a laptop, reaching for a notebook, adjusting a chair, and
            switching on a lamp when the room gets quiet.
          </p>
        </div>

        <div className="about-image-card">
          <img src={deskCraft} alt="Desk product craftsmanship" />
        </div>
      </section>

      <section className="about-values">
        <div>
          <span>01</span>
          <h3>Quiet design</h3>
          <p>Simple forms and calm colors that keep attention on the work.</p>
        </div>

        <div>
          <span>02</span>
          <h3>Useful comfort</h3>
          <p>Chairs, lighting, and surfaces selected for long daily sessions.</p>
        </div>

        <div>
          <span>03</span>
          <h3>Setup thinking</h3>
          <p>Products are meant to work together, not compete for attention.</p>
        </div>
      </section>
    </main>
  )
}

export default About

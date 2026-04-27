import woodMaterial from '../assets/wood-material.webp'
import workspaceDetail from '../assets/workspace-detail.webp'
import deskCraft from '../assets/desk-craft.webp'

function About() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div>
          <p className="about-label">About DeskHaus</p>
          <h1>Designing calmer workspaces for focused everyday work.</h1>
          <p>
            DeskHaus is a premium workspace concept built around clean desks,
            thoughtful lighting, ergonomic comfort, and warm natural materials.
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

        <div className="about-text-block">
          <p className="about-label">Premium materials</p>
          <h2>Warm textures, clean lines, and products that feel intentional.</h2>
          <p>
            The visual direction focuses on oak wood, soft lighting, neutral tones,
            and products that make a desk setup feel organized without becoming cold.
          </p>
        </div>
      </section>

      <section className="about-split reverse">
        <div className="about-text-block">
          <p className="about-label">Built as a React project</p>
          <h2>Not just a layout — a functional ecommerce experience.</h2>
          <p>
            This project includes reusable components, routing, responsive layouts,
            product filtering, sorting, cart state, image optimization with WebP,
            and version control with Git.
          </p>
        </div>

        <div className="about-image-card">
          <img src={deskCraft} alt="Desk product craftsmanship" />
        </div>
      </section>

      <section className="about-values">
        <div>
          <span>01</span>
          <h3>Minimal design</h3>
          <p>Simple layouts, calm colors, and focused product presentation.</p>
        </div>

        <div>
          <span>02</span>
          <h3>Responsive UI</h3>
          <p>Built to work across desktop, tablet, and mobile screens.</p>
        </div>

        <div>
          <span>03</span>
          <h3>Real app logic</h3>
          <p>Filtering, sorting, routing, and cart state make it interactive.</p>
        </div>
      </section>
    </main>
  )
}

export default About
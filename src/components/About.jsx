function About({ about }) {
  return (
    <section className="section" id="about" aria-labelledby="about-title">
      <div className="section__head">
        <p className="section__eyebrow">Trust & Reliability</p>
        <h2 id="about-title">{about.title}</h2>
      </div>
      <div className="about__grid">
        <div className="about__content">
          <p>{about.description}</p>
        </div>
        <div className="about__trust-card">
          <ul className="about__highlights">
            {about.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;

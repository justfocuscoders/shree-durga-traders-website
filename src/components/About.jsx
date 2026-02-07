function About({ about }) {
  return (
    <section className="section" id="about" aria-labelledby="about-title">
      <div className="section__head">
        <h2 id="about-title">{about.title}</h2>
      </div>
      <div className="about__grid">
        <p>{about.description}</p>
        <ul className="about__highlights">
          {about.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default About;

function Services({ services }) {
  return (
    <section className="section" id="services" aria-labelledby="services-title">
      <div className="section__head">
        <p className="section__eyebrow">Industrial Product Range</p>
        <h2 id="services-title">{services.title}</h2>
      </div>
      <div className="cards-grid cards-grid--deals">
        {services.items.map((service, index) => (
          <article className="card deal-card" key={service.name}>
            <p className="deal-card__index">{String(index + 1).padStart(2, "0")}</p>
            <h3>{service.name}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Services;

function Services({ services }) {
  return (
    <section className="section" id="services" aria-labelledby="services-title">
      <div className="section__head">
        <h2 id="services-title">{services.title}</h2>
      </div>
      <div className="cards-grid">
        {services.items.map((service) => (
          <article className="card" key={service.name}>
            <h3>{service.name}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Services;

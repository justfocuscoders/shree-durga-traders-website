function Testimonials({ testimonials }) {
  return (
    <section className="section" id="testimonials" aria-labelledby="testimonials-title">
      <div className="section__head">
        <h2 id="testimonials-title">{testimonials.title}</h2>
      </div>
      <div className="cards-grid">
        {testimonials.items.map((item) => (
          <blockquote className="card testimonial" key={item.name}>
            <p>{item.text}</p>
            <cite>{item.name}</cite>
          </blockquote>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;

function WhyChooseUs({ whyChooseUs }) {
  return (
    <section className="section" id="why-us" aria-labelledby="why-title">
      <div className="section__head">
        <h2 id="why-title">{whyChooseUs.title}</h2>
      </div>
      <ul className="why-list">
        {whyChooseUs.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

export default WhyChooseUs;

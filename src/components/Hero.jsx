function Hero({ hero, common }) {
  const callLink = `tel:${common.callNumber.replace(/\s+/g, "")}`;
  const whatsappLink = `https://wa.me/${common.whatsappNumber}?text=${encodeURIComponent(
    common.whatsappMessage,
  )}`;

  return (
    <section className="hero section" id="home" aria-labelledby="hero-title">
      <div className="hero__content">
        <p className="hero__kicker">Shree Durga Traders</p>
        <h1 id="hero-title">{hero.title}</h1>
        <p className="hero__subtitle">{hero.subtitle}</p>
        <p className="hero__description">{hero.description}</p>
        <div className="hero__actions">
          <a className="button button--primary" href={callLink}>
            {hero.callButton}
          </a>
          <a
            className="button button--ghost"
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
          >
            {hero.whatsappButton}
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;

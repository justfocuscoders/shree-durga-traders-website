import Floormill1 from "../assets/images/Floormill1.jpg";

function Hero({ hero, common, businessType }) {
  const callLink = `tel:${common.callNumber.replace(/\s+/g, "")}`;
  const whatsappLink = `https://wa.me/${common.whatsappNumber}?text=${encodeURIComponent(
    common.whatsappMessage,
  )}`;

  return (
    <section className="hero section" id="home" aria-labelledby="hero-title">
      <div className="hero__layout">
        <div className="hero__content">
          <p className="hero__kicker">{businessType}</p>
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

        <div className="hero__media">
          <img src={Floormill1} alt="Shree Durga Traders machinery setup" />
          <div className="hero__media-overlay" />
        </div>
      </div>
    </section>
  );
}

export default Hero;

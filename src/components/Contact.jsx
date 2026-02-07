function Contact({ contact, common }) {
  const callLink = `tel:${common.callNumber.replace(/\s+/g, "")}`;
  const whatsappLink = `https://wa.me/${common.whatsappNumber}?text=${encodeURIComponent(
    common.whatsappMessage,
  )}`;

  return (
    <section className="section" id="contact" aria-labelledby="contact-title">
      <div className="section__head">
        <h2 id="contact-title">{contact.title}</h2>
      </div>
      <div className="contact-grid">
        <div className="contact-card">
          <h3>{contact.phoneLabel}</h3>
          <a href={callLink}>{common.callNumber}</a>
        </div>
        <div className="contact-card">
          <h3>{contact.whatsappLabel}</h3>
          <a href={whatsappLink} target="_blank" rel="noreferrer">
            +{common.whatsappNumber}
          </a>
        </div>
        <div className="contact-card contact-card--full">
          <h3>{contact.addressLabel}</h3>
          <p>{contact.address}</p>
          <div className="map-placeholder" role="img" aria-label={contact.mapPlaceholder}>
            {contact.mapPlaceholder}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

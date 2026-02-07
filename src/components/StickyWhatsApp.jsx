function StickyWhatsApp({ hero, common }) {
  const whatsappLink = `https://wa.me/${common.whatsappNumber}?text=${encodeURIComponent(
    common.whatsappMessage,
  )}`;

  return (
    <a
      className="sticky-whatsapp"
      href={whatsappLink}
      target="_blank"
      rel="noreferrer"
      aria-label={hero.whatsappButton}
    >
      WhatsApp
    </a>
  );
}

export default StickyWhatsApp;

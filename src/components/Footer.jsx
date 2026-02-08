function Footer({ siteName, copyright, contact, common }) {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div>
          <p className="site-footer__name">{siteName}</p>
          <p className="site-footer__line">{copyright}</p>
        </div>
        <div className="site-footer__contact">
          <p>
            {contact.phoneLabel}: <a href={`tel:${common.callNumber.replace(/\s+/g, "")}`}>{common.callNumber}</a>
          </p>
          <p>{contact.address}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

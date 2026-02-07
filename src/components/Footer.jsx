function Footer({ siteName, copyright }) {
  return (
    <footer className="site-footer">
      <p>
        {siteName} | {new Date().getFullYear()} | {copyright}
      </p>
    </footer>
  );
}

export default Footer;

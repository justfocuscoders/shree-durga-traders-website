import { useMemo, useState } from "react";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import LanguageSwitcher from "./components/LanguageSwitcher";
import Services from "./components/Services";
import StickyWhatsApp from "./components/StickyWhatsApp";
import Testimonials from "./components/Testimonials";
import WhyChooseUs from "./components/WhyChooseUs";
import { languageOptions, translations } from "./data/translations";

function App() {
  const [language, setLanguage] = useState("en");

  const t = useMemo(() => translations[language] ?? translations.en, [language]);

  return (
    <div className="app-shell">
      <header className="site-header">
        <div>
          <p className="site-header__name">{t.meta.siteName}</p>
          <p className="site-header__type">{t.header.businessType}</p>
        </div>
        <LanguageSwitcher
          currentLanguage={language}
          options={languageOptions}
          label={t.languageSwitcher.label}
          onChange={setLanguage}
        />
      </header>

      <main>
        <Hero hero={t.hero} common={t.common} />
        <About about={t.about} />
        <Services services={t.services} />
        <Gallery gallery={t.gallery} />
        <WhyChooseUs whyChooseUs={t.whyChooseUs} />
        <Testimonials testimonials={t.testimonials} />
        <Contact contact={t.contact} common={t.common} />
      </main>

      <Footer siteName={t.meta.siteName} copyright={t.footer.copyright} />
      <StickyWhatsApp hero={t.hero} common={t.common} />
    </div>
  );
}

export default App;

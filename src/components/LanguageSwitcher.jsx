function LanguageSwitcher({ currentLanguage, options, label, onChange }) {
  return (
    <div className="language-switcher" aria-label={label}>
      {options.map((option) => (
        <button
          key={option.code}
          type="button"
          className={`language-switcher__button ${
            currentLanguage === option.code ? "is-active" : ""
          }`}
          onClick={() => onChange(option.code)}
          aria-pressed={currentLanguage === option.code}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

export default LanguageSwitcher;

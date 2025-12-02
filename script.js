// Selector de idioma: por ahora informativo (podemos añadir i18n con JSON)
const langSelect = document.getElementById('lang');
if (langSelect) {
  langSelect.addEventListener('change', () => {
    const v = langSelect.value;
  });
}

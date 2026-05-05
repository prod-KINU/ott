type Lang = 'jp' | 'en';

const LANG_STORAGE_KEY = 'kinu-lang';
const LOADING_STORAGE_KEY = 'kinu-loading-seen';

const isLang = (value: string | null): value is Lang => value === 'jp' || value === 'en';

function updateImageAlt(lang: Lang) {
  document.querySelectorAll<HTMLImageElement>('img[data-alt-jp][data-alt-en]').forEach((image) => {
    const nextAlt = lang === 'jp' ? image.dataset.altJp : image.dataset.altEn;
    if (nextAlt) image.alt = nextAlt;
  });
}

function applyLanguage(lang: Lang) {
  document.documentElement.dataset.i18nLang = lang;
  document.documentElement.lang = lang === 'jp' ? 'ja' : 'en';
  localStorage.setItem(LANG_STORAGE_KEY, lang);

  document.querySelectorAll<HTMLButtonElement>('[data-lang-button]').forEach((button) => {
    const active = button.dataset.langButton === lang;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-pressed', String(active));
  });

  updateImageAlt(lang);
}

function initLanguageSwitch() {
  const saved = localStorage.getItem(LANG_STORAGE_KEY);
  applyLanguage(isLang(saved) ? saved : 'jp');

  document.querySelectorAll<HTMLButtonElement>('[data-lang-button]').forEach((button) => {
    button.addEventListener('click', () => {
      const nextLang = button.dataset.langButton;
      if (isLang(nextLang ?? null)) applyLanguage(nextLang);
    });
  });
}

function initMobileMenu() {
  const toggle = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
  const menu = document.querySelector<HTMLElement>('[data-mobile-menu]');
  if (!toggle || !menu) return;

  const setOpen = (open: boolean) => {
    toggle.setAttribute('aria-expanded', String(open));
    menu.hidden = !open;
    document.body.classList.toggle('menu-open', open);
  };

  toggle.addEventListener('click', () => {
    setOpen(toggle.getAttribute('aria-expanded') !== 'true');
  });

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setOpen(false));
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setOpen(false);
  });

  window.matchMedia('(min-width: 761px)').addEventListener('change', (event) => {
    if (event.matches) setOpen(false);
  });
}

function initLoadingOverlay() {
  const overlay = document.querySelector<HTMLElement>('[data-loading-overlay]');
  const image = document.querySelector<HTMLImageElement>('[data-loading-image]');
  if (!overlay) return;

  if (sessionStorage.getItem(LOADING_STORAGE_KEY) === 'true') {
    overlay.classList.add('is-hidden');
    overlay.setAttribute('aria-hidden', 'true');
    return;
  }

  document.body.classList.add('loading-active');

  let images: string[] = [];
  try {
    images = JSON.parse(overlay.dataset.images ?? '[]') as string[];
  } catch {
    images = [];
  }

  let index = 0;
  let done = false;
  const interval = window.setInterval(() => {
    if (!image || images.length === 0) return;
    index = (index + 1) % images.length;
    image.src = images[index];
  }, 1000);

  const finish = () => {
    if (done) return;
    done = true;
    window.clearInterval(interval);
    sessionStorage.setItem(LOADING_STORAGE_KEY, 'true');
    overlay.classList.add('is-hidden');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('loading-active');
    window.setTimeout(() => overlay.remove(), 240);
  };

  const maxTimer = window.setTimeout(finish, 12000);
  const finishOnce = () => {
    window.clearTimeout(maxTimer);
    finish();
  };

  if (document.readyState === 'complete') {
    window.requestAnimationFrame(finishOnce);
  } else {
    window.addEventListener('load', finishOnce, { once: true });
  }
}

initLanguageSwitch();
initMobileMenu();
initLoadingOverlay();

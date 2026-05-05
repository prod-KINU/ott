const PROJECT_PARAM = 'project';
const MOBILE_QUERY = '(max-width: 860px)';

const root = document.querySelector<HTMLElement>('[data-projects-root]');

if (root) {
  const firstProject = root.dataset.firstProject ?? '';
  const mobileMedia = window.matchMedia(MOBILE_QUERY);
  const triggers = Array.from(document.querySelectorAll<HTMLElement>('[data-project-trigger]'));
  const details = Array.from(document.querySelectorAll<HTMLElement>('[data-project-detail]'));
  const mobileView = document.querySelector<HTMLElement>('[data-project-mobile-view]');
  const backButton = document.querySelector<HTMLButtonElement>('[data-project-back]');
  const validSlugs = new Set(triggers.map((trigger) => trigger.dataset.projectTrigger).filter(Boolean));

  const getQuerySlug = () => {
    const slug = new URLSearchParams(window.location.search).get(PROJECT_PARAM);
    return slug && validSlugs.has(slug) ? slug : null;
  };

  const projectUrl = (slug: string) => {
    const url = new URL(window.location.href);
    url.searchParams.set(PROJECT_PARAM, slug);
    return url;
  };

  const clearProjectUrl = () => {
    const url = new URL(window.location.href);
    url.searchParams.delete(PROJECT_PARAM);
    return url;
  };

  const setMobileOpen = (open: boolean) => {
    if (!mobileView) return;
    if (open) {
      mobileView.hidden = false;
      document.body.classList.add('detail-open');
      window.requestAnimationFrame(() => mobileView.classList.add('is-open'));
    } else {
      mobileView.classList.remove('is-open');
      document.body.classList.remove('detail-open');
      window.setTimeout(() => {
        if (!mobileView.classList.contains('is-open')) mobileView.hidden = true;
      }, 230);
    }
  };

  const selectProject = (slug: string, openMobile: boolean) => {
    triggers.forEach((trigger) => {
      const active = trigger.dataset.projectTrigger === slug;
      trigger.classList.toggle('is-active', active);
      if (active) {
        trigger.setAttribute('aria-current', 'true');
      } else {
        trigger.removeAttribute('aria-current');
      }
    });

    details.forEach((detail) => {
      const active = detail.dataset.projectDetail === slug;
      detail.hidden = !active;
      detail.classList.toggle('is-active', active);
    });

    setMobileOpen(openMobile);
  };

  const syncFromUrl = (replaceMissingDesktopUrl = false) => {
    const querySlug = getQuerySlug();
    const isMobile = mobileMedia.matches;
    const slug = querySlug ?? firstProject;

    if (!slug) return;

    if (!querySlug && replaceMissingDesktopUrl && !isMobile) {
      window.history.replaceState({ project: slug }, '', projectUrl(slug));
    }

    selectProject(slug, isMobile && Boolean(querySlug));
  };

  triggers.forEach((trigger) => {
    trigger.addEventListener('click', (event) => {
      const slug = trigger.dataset.projectTrigger;
      if (!slug) return;

      event.preventDefault();
      window.history.pushState({ project: slug }, '', projectUrl(slug));
      selectProject(slug, mobileMedia.matches);
    });
  });

  backButton?.addEventListener('click', () => {
    if (getQuerySlug()) {
      window.history.back();
    } else {
      setMobileOpen(false);
    }
  });

  window.addEventListener('popstate', () => syncFromUrl(false));

  mobileMedia.addEventListener('change', () => {
    const querySlug = getQuerySlug();
    if (mobileMedia.matches) {
      selectProject(querySlug ?? firstProject, Boolean(querySlug));
    } else {
      selectProject(querySlug ?? firstProject, false);
    }
  });

  syncFromUrl(true);

  if (!getQuerySlug() && mobileMedia.matches) {
    window.history.replaceState({}, '', clearProjectUrl());
  }
}

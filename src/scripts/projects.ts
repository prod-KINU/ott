const PROJECT_PARAM = 'project';
const CATEGORY_PARAM = 'category';
const PAGE_PARAM = 'page';
const MOBILE_QUERY = '(max-width: 860px)';

const root = document.querySelector<HTMLElement>('[data-projects-root]');

if (root) {
  const firstProject = root.dataset.firstProject ?? '';
  const pageSize = Number(root.dataset.projectPageSize ?? 6);
  const mobileMedia = window.matchMedia(MOBILE_QUERY);
  const triggers = Array.from(document.querySelectorAll<HTMLElement>('[data-project-trigger]'));
  const details = Array.from(document.querySelectorAll<HTMLElement>('[data-project-detail]'));
  const mobileView = document.querySelector<HTMLElement>('[data-project-mobile-view]');
  const backButton = document.querySelector<HTMLButtonElement>('[data-project-back]');
  const filterButtons = Array.from(document.querySelectorAll<HTMLButtonElement>('[data-project-filter]'));
  const prevButton = document.querySelector<HTMLButtonElement>('[data-project-page-prev]');
  const nextButton = document.querySelector<HTMLButtonElement>('[data-project-page-next]');
  const pageStatus = document.querySelector<HTMLElement>('[data-project-page-status]');
  const validSlugs = new Set(triggers.map((trigger) => trigger.dataset.projectTrigger).filter(Boolean));
  const triggerCategories = (trigger: HTMLElement) => (trigger.dataset.projectCategories ?? '').split(/\s+/).filter(Boolean);
  const triggerHasCategory = (trigger: HTMLElement, category: string) => triggerCategories(trigger).includes(category);
  const validCategories = new Set(['all', ...triggers.flatMap((trigger) => triggerCategories(trigger))]);

  const getQuerySlug = () => {
    const slug = new URLSearchParams(window.location.search).get(PROJECT_PARAM);
    return slug && validSlugs.has(slug) ? slug : null;
  };

  const getUrlState = () => {
    const params = new URLSearchParams(window.location.search);
    const categoryParam = params.get(CATEGORY_PARAM);
    const pageParam = Number(params.get(PAGE_PARAM) ?? 1);

    return {
      category: categoryParam && validCategories.has(categoryParam) ? categoryParam : 'all',
      page: Number.isFinite(pageParam) && pageParam > 0 ? Math.floor(pageParam) : 1,
      slug: getQuerySlug()
    };
  };

  const filteredTriggers = (category: string) => (
    category === 'all'
      ? triggers
      : triggers.filter((trigger) => triggerHasCategory(trigger, category))
  );

  const pageCountFor = (category: string) => Math.max(1, Math.ceil(filteredTriggers(category).length / pageSize));

  const clampPage = (category: string, page: number) => Math.min(Math.max(page, 1), pageCountFor(category));

  const pageForSlug = (slug: string, category: string) => {
    const items = filteredTriggers(category);
    const index = items.findIndex((trigger) => trigger.dataset.projectTrigger === slug);
    return index >= 0 ? Math.floor(index / pageSize) + 1 : 1;
  };

  const pageTriggers = (category: string, page: number) => {
    const items = filteredTriggers(category);
    const start = (page - 1) * pageSize;
    return items.slice(start, start + pageSize);
  };

  const buildUrl = (slug: string | null, category: string, page: number) => {
    const url = new URL(window.location.href);
    if (slug) {
      url.searchParams.set(PROJECT_PARAM, slug);
    } else {
      url.searchParams.delete(PROJECT_PARAM);
    }

    if (category !== 'all') {
      url.searchParams.set(CATEGORY_PARAM, category);
    } else {
      url.searchParams.delete(CATEGORY_PARAM);
    }

    if (page > 1) {
      url.searchParams.set(PAGE_PARAM, String(page));
    } else {
      url.searchParams.delete(PAGE_PARAM);
    }

    return url;
  };

  const clearProjectUrl = () => {
    const url = new URL(window.location.href);
    url.searchParams.delete(PROJECT_PARAM);
    return url;
  };

  const updateFilterControls = (category: string) => {
    filterButtons.forEach((button) => {
      const active = button.dataset.projectFilter === category;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    });
  };

  const updatePaginationControls = (category: string, page: number) => {
    const totalPages = pageCountFor(category);

    if (prevButton) prevButton.disabled = page <= 1;
    if (nextButton) nextButton.disabled = page >= totalPages;
    if (pageStatus) pageStatus.textContent = `${page} / ${totalPages}`;
  };

  const applyListState = (category: string, page: number) => {
    const visible = new Set(pageTriggers(category, page));

    triggers.forEach((trigger) => {
      const inCategory = category === 'all' || triggerHasCategory(trigger, category);
      trigger.hidden = !inCategory || !visible.has(trigger);
    });

    updateFilterControls(category);
    updatePaginationControls(category, page);
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
    const state = getUrlState();
    const isMobile = mobileMedia.matches;
    let category = state.category;
    let page = clampPage(category, state.page);
    let querySlug = state.slug;

    if (querySlug) {
      const trigger = triggers.find((item) => item.dataset.projectTrigger === querySlug);
      if (trigger && category !== 'all' && !triggerHasCategory(trigger, category)) {
        category = 'all';
      }
      page = pageForSlug(querySlug, category);
    }

    applyListState(category, page);

    const visible = pageTriggers(category, page);
    const slug = querySlug ?? visible[0]?.dataset.projectTrigger ?? firstProject;
    if (!slug) return;

    if ((!querySlug || category !== state.category || page !== state.page) && replaceMissingDesktopUrl && !isMobile) {
      window.history.replaceState({ project: slug, category, page }, '', buildUrl(slug, category, page));
    }

    selectProject(slug, isMobile && Boolean(querySlug));
  };

  triggers.forEach((trigger) => {
    trigger.addEventListener('click', (event) => {
      const slug = trigger.dataset.projectTrigger;
      if (!slug) return;

      event.preventDefault();
      const state = getUrlState();
      const category = state.category;
      const page = clampPage(category, state.page);
      window.history.pushState({ project: slug, category, page }, '', buildUrl(slug, category, page));
      selectProject(slug, mobileMedia.matches);
    });
  });

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const category = button.dataset.projectFilter ?? 'all';
      const page = 1;
      applyListState(category, page);

      const visible = pageTriggers(category, page);
      const slug = visible[0]?.dataset.projectTrigger ?? null;
      window.history.pushState({ project: slug, category, page }, '', buildUrl(mobileMedia.matches ? null : slug, category, page));
      if (slug) selectProject(slug, false);
    });
  });

  prevButton?.addEventListener('click', () => {
    const state = getUrlState();
    const category = state.category;
    const page = clampPage(category, state.page - 1);
    const slug = pageTriggers(category, page)[0]?.dataset.projectTrigger ?? null;

    applyListState(category, page);
    window.history.pushState({ project: slug, category, page }, '', buildUrl(mobileMedia.matches ? null : slug, category, page));
    if (slug) selectProject(slug, false);
  });

  nextButton?.addEventListener('click', () => {
    const state = getUrlState();
    const category = state.category;
    const page = clampPage(category, state.page + 1);
    const slug = pageTriggers(category, page)[0]?.dataset.projectTrigger ?? null;

    applyListState(category, page);
    window.history.pushState({ project: slug, category, page }, '', buildUrl(mobileMedia.matches ? null : slug, category, page));
    if (slug) selectProject(slug, false);
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
    const { category, page, slug: querySlug } = getUrlState();
    applyListState(category, clampPage(category, page));
    if (mobileMedia.matches) {
      selectProject(querySlug ?? firstProject, Boolean(querySlug));
    } else {
      const fallback = pageTriggers(category, clampPage(category, page))[0]?.dataset.projectTrigger ?? firstProject;
      selectProject(querySlug ?? fallback, false);
    }
  });

  syncFromUrl(true);

  if (!getQuerySlug() && mobileMedia.matches) {
    window.history.replaceState({}, '', clearProjectUrl());
  }
}

const PARTIALS_PATH = 'partials';

const loadPartial = async (partialName, container) => {
  try {
    const response = await fetch(`${PARTIALS_PATH}/${partialName}.html`);
    if (!response.ok) {
      throw new Error(`Failed to load ${partialName}: ${response.status}`);
    }
    const html = await response.text();
    container.innerHTML = html;
  } catch (error) {
    console.error(`Partial load error: ${partialName}`, error);
  }
};

const highlightActiveNav = () => {
  const currentPage = document.body.dataset.page;
  if (!currentPage) {
    return;
  }

  const links = document.querySelectorAll('.header__link');
  links.forEach(link => {
    if (link.dataset.page === currentPage) {
      link.classList.add('header__link--active');
    }
  });
};

const attachFooterActions = () => {
  const toTopButton = document.querySelector('.footer__to-top');
  if (!toTopButton) {
    return;
  }

  toTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
};

document.addEventListener('DOMContentLoaded', async () => {
  const partialContainers = document.querySelectorAll('[data-partial]');
  await Promise.all(
    Array.from(partialContainers).map(container => {
      const name = container.dataset.partial;
      return loadPartial(name, container);
    })
  );

  highlightActiveNav();
  attachFooterActions();
});

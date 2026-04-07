(function() {
  const init = () => {
    const toggleButtons = document.querySelectorAll('.toc-toggle');

    toggleButtons.forEach(function(btn) {
      btn.addEventListener('click', function() {
        const wrapper = btn.closest('.fixed, [class*="fixed"]');
        const panel = wrapper.querySelector('.toc-panel');
        const iconOpen = btn.querySelector('.toc-icon-open');
        const iconClose = btn.querySelector('.toc-icon-close');

        const isOpen = panel.style.width === '256px';

        if (isOpen) {
          panel.style.width = '0';
          panel.style.overflow = 'hidden';
          iconOpen.classList.remove('hidden');
          iconClose.classList.add('hidden');
        } else {
          panel.style.width = '256px';
          panel.style.overflow = 'visible';
          iconOpen.classList.add('hidden');
          iconClose.classList.remove('hidden');
        }
      });
    });

    const tocLinks = document.querySelectorAll('.toc-link');
    tocLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        const wrapper = link.closest('.fixed, [class*="fixed"]');
        if (wrapper) {
          const panel = wrapper.querySelector('.toc-panel');
          const btn = wrapper.querySelector('.toc-toggle');
          const iconOpen = btn ? btn.querySelector('.toc-icon-open') : null;
          const iconClose = btn ? btn.querySelector('.toc-icon-close') : null;

          if (panel) {
            panel.style.width = '0';
            panel.style.overflow = 'hidden';
          }
          if (iconOpen) iconOpen.classList.remove('hidden');
          if (iconClose) iconClose.classList.add('hidden');
        }
      });
    });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
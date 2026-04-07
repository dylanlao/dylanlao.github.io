(function() {
  const init = () => {
    const wrappers = document.querySelectorAll('.toc-floating-wrapper');
    wrappers.forEach(function(wrapper) {
      const toggleBtn = wrapper.querySelector('.toc-toggle-btn');
      const panel = wrapper.querySelector('.toc-panel');
      const iconOpen = wrapper.querySelector('.toc-icon-open');
      const iconClose = wrapper.querySelector('.toc-icon-close');
      const tocLinks = wrapper.querySelectorAll('.toc-link');

      let isOpen = false;

      toggleBtn.addEventListener('click', function() {
        isOpen = !isOpen;
        if (isOpen) {
          panel.style.width = '224px';
          panel.style.opacity = '1';
          iconOpen.classList.add('hidden');
          iconClose.classList.remove('hidden');
        } else {
          panel.style.width = '0px';
          panel.style.opacity = '0';
          iconOpen.classList.remove('hidden');
          iconClose.classList.add('hidden');
        }
      });

      tocLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
          e.preventDefault();
          const href = link.getAttribute('href');
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
          isOpen = false;
          panel.style.width = '0px';
          panel.style.opacity = '0';
          iconOpen.classList.remove('hidden');
          iconClose.classList.add('hidden');
        });
      });
    });
  };
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
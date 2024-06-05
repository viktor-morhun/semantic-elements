document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('.header');
  const sidebar = document.createElement('div');
  const sidebarButton = document.createElement('button');

  sidebar.className = 'sidebar';
  sidebarButton.className = 'sidebar-button';
  sidebarButton.textContent = 'Menu';

  sidebar.innerHTML = `${header.innerHTML}<button class="toggle-button">Hide</button>`;
  document.body.appendChild(sidebar);
  document.body.appendChild(sidebarButton);

  const headerHeight = header.offsetHeight;
  let lastScrollTop = 0;
  let sidebarShown = false;

  window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (!sidebarShown && scrollTop > headerHeight) {
      sidebar.classList.add('visible');
      sidebarButton.style.display = 'none';
      sidebarShown = true;
    }

    header.classList.toggle('hidden', scrollTop > lastScrollTop);
    lastScrollTop = scrollTop;
  });

  document.querySelector('.toggle-button').addEventListener('click', function() {
    sidebar.classList.remove('visible');
    sidebarButton.style.display = 'block';
  });

  sidebarButton.addEventListener('click', function() {
    sidebar.classList.add('visible');
    sidebarButton.style.display = 'none';
  });
});

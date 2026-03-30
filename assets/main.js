// Sentinel Research — main.js

// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks  = document.querySelector('.nav-links');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.site-header')) {
      navLinks.classList.remove('open');
    }
  });
}

// Findings table filter (research.html)
const filterBtns = document.querySelectorAll('.filter-btn');
const tableRows  = document.querySelectorAll('.findings-table tbody tr');
if (filterBtns.length) {
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      tableRows.forEach(row => {
        if (filter === 'all' || row.dataset.severity === filter) {
          row.classList.remove('hidden');
        } else {
          row.classList.add('hidden');
        }
      });
    });
  });
}

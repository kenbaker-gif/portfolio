function filterCerts(category, button) {
  document.querySelectorAll('.cert-filter').forEach(filterButton => {
    filterButton.classList.remove('active');
  });

  button.classList.add('active');
  document.querySelectorAll('.cert-card').forEach(card => {
    card.classList.toggle('hidden', card.dataset.cat !== category);
  });
}

window.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.cert-card').forEach(card => {
    card.classList.toggle('hidden', card.dataset.cat !== 'ml');
  });
});

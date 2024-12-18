// Search functionality
const searchBox = document.getElementById('search-box');

searchBox.addEventListener('keyup', function() {
  const query = this.value.toLowerCase().trim();
  const terms = query.split(/\s+/).filter(t => t.length > 0);
  const cards = document.querySelectorAll('.cocktail-card');

  cards.forEach(card => {
    const text = card.textContent.toLowerCase();
    const matchesAll = terms.every(term => text.includes(term));
    card.style.display = matchesAll ? 'flex' : 'none';
  });
});
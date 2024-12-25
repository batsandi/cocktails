// Parse the JSON data
const cocktailsData = JSON.parse(document.getElementById('cocktails-data').textContent);
const cocktailGrid = document.getElementById('cocktail-grid');

// Render cocktail cards with a detailed layout
function renderCocktailCards(cocktails) {
  cocktailGrid.innerHTML = ''; // Clear previous cards

  cocktails.forEach(cocktail => {
    const card = document.createElement('div');
    card.className = 'cocktail-card';

    // Generate the cocktail info section
    const cocktailInfo = `
      <div class="cocktail-info">
        <h2>${cocktail.name}</h2>
        <p><em>${cocktail.glass}</em></p>
        <br>
        <p><strong>Ingredients:</strong></p>
        <ul>
          ${cocktail.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
        </ul>
        <br>
        <p><em><strong>Method:</strong> ${cocktail.method}</em></p>
      </div>
    `;

    // Generate the cocktail visual section
    const glassClass = cocktail.glass.toLowerCase().replace(/\s+/g, '-').replace(/-glass$/, '') + '-glass';  // e.g., "Coupe glass" -> "coupe-glass"

    const cocktailVisual = `
      <div class="cocktail-visual ${glassClass}">
        <div class="glass">
          <div class="bowl">
            <div class="drink" style="background:${cocktail.color};"></div>
          </div>
          <div class="stem"></div>
          <div class="base"></div>
        </div>
      </div>
    `;

    // Combine the info and visual sections
    card.innerHTML = cocktailInfo + cocktailVisual;

    // Append the card to the cocktail grid
    cocktailGrid.appendChild(card);
  });
}

// Initial render
renderCocktailCards(cocktailsData);
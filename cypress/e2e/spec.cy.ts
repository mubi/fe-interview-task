// user journeys

describe('Review log view', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Displays link to add review when no reviews exist', () => {
    // No review list to display
    // Add review link is visble
    // Review link routes to /add-review when clicked
  });

  it('Displays list of previously-added reviews', () => {
    // Review list should display
    // Image, title, year, director, review snippet, read more link
  });

  it('Allows customer to filter reviews by genre', () => {
    // Genre dropdown is visible
    // Selecting genre filters list
    // Genre filter can be cleared
  });

  it('Persists across page reloads', () => {
    // Review list is visible
    // Page is reloaded
    // Review list remains visible
  });
});

describe('Adding a review', () => {
  it('Allows customer to add a review', () => {
    // Typeahead film title should be visible and required
    // Review field should be visible and required
    // Save button should be visible
    // Review should not submit when required fields are incomplete and save button is clicked
    // Review should save when required fields are complete and save button is clicked
    // Return to index when review is saved, new review is visible
  });
});

describe('Review page', () => {
  it('Allows customer to view full review', () => {
    // Image, title, year, director, full review with paragraphs
  });

  it('Allows customer to delete review', () => {
    // Navigate to review
    // Delete review button is visible
    // Delete button prompts confirm dialog
    // Confirmation - review is deleted and no longer visible in review log
    // Cancel - dialog is closed, customer remains on review page
  });
});
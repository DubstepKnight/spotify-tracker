describe('The index page', () => {
  it('index page loads', () => {
    cy.visit('http://localhost:3000/')
  })

  it('the index page has a welcoming text', () => {
    cy.get('h1').should('contain', 'Learn about your favorite tracks!')
  })

  it('the index page has a welcoming text', () => {
    cy.get('h1').should('contain', 'Learn about your favorite tracks!')
  })
})
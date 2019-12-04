describe('page', () => {
  it('works', () => {
    cy.viewport(4000, 1601);
  })
})

describe('large_page', () => {
  it('fails', () => {
    cy.viewport(7680, 1601);
  })
})

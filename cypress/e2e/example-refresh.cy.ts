// import faker from '../../docs/.vitepress/dist/faker.js';

describe('example-refresh', () => {
  beforeEach(() => {
    cy.intercept('**/faker.js').as('FAKER_DOWNLOAD');
  });

  it('should refresh the example', () => {
    // given
    cy.visit('/api/faker.html#constructor');
    cy.get('.refresh').first().as('refresh');
    cy.get('@refresh').next().find('code').as('codeBlock');
    cy.get('@codeBlock').then(($el) => {
      const originalCodeText = $el.text();

      cy.get('@refresh').click();

      // the faker bundle is really big and takes a while some times
      cy.wait('@FAKER_DOWNLOAD', { responseTimeout: 15_000 });

      cy.get('@refresh')
        .should('not.be.disabled') // stays disabled on error
        .then(() => {
          cy.get('@codeBlock').then(($el) => {
            const newCodeText = $el.text();
            expect(newCodeText).not.to.equal(originalCodeText);

            cy.get('@refresh')
              .click()
              .should('not.be.disabled') // stays disabled on error
              .then(() => {
                cy.get('@codeBlock').then(($el) => {
                  const newCodeText2 = $el.text();
                  expect(newCodeText2).not.to.equal(originalCodeText);
                  expect(newCodeText2).not.to.equal(newCodeText);
                });
              });
          });
        });
    });
  });
});

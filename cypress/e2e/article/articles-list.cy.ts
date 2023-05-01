describe('Пользователь заходит на страницу со списком статей', () => {
    beforeEach(() => {
        cy.login().then((data) => {
            cy.visit('/articles');
        });
    });

    it('И статьи успешно загружаются', () => {
        cy.getByTestId('ArticleList').should('exist');
        cy.getByTestId('ArticleListItem').should('have.lengthOf.greaterThan', 3);
        cy.getByTestId('ArticleList').should('exist');
    });
});

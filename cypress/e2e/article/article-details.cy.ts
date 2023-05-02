let currentArticleId = '';
describe('Пользователь заходит на страницу статьи', () => {
    beforeEach(() => {
        cy.login();
        cy.createArticle().then((data) => {
            currentArticleId = data.id;
            cy.visit(`articles/${data.id}`);
        });
    });

    afterEach(() => {
        cy.removeArticle(currentArticleId);
    });

    it('И видит содержимое статьи', () => {
        cy.getByTestId('ArticleDetails.Info').should('exist');
    });

    it('И видит рекомендуемые статьи', () => {
        cy.getByTestId('ArticleRecommendationList').should('exist');
    });

    it('И оставляет комментарий', () => {
        cy.getByTestId('ArticleDetails.Info').should('exist');
        cy.getByTestId('AddNewCommentForm').scrollIntoView();
        cy.addComment('text');
        cy.getByTestId('CommentCard.Content').should('have.length', 1);
    });

    it('И ставит оцеку статье', () => {
        cy.intercept('GET', '**/articles/*', { fixture: 'article-details.json' });
        cy.getByTestId('ArticleDetails.Info').should('exist');
        cy.getByTestId('RatingCard').scrollIntoView();
        cy.setRate(3, 'feedback');
        cy.get('[data-selected=true]').should('have.length', 3);
    });
});

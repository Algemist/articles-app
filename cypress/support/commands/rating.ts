export const setRate = (rate: number = 5, feedback: string = '') => {
    cy.getByTestId(`StarRating.${rate}`).click();
    cy.getByTestId('RatingCard.Input').type(feedback);
    cy.getByTestId('RatingCard.Save').click();
};

declare global {
    namespace Cypress {
        interface Chainable {
            setRate(rate: number, feedback: string): Chainable<void>;
        }
    }
}

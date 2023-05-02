export const addComment = (comment: string) => {
    cy.getByTestId('AddNewCommentForm.Input').type(comment);
    cy.getByTestId('AddNewCommentForm.Button').click();
};

export const deleteComment = (commentId: string) =>
    cy.request({
        method: 'DELETE',
        url: `http://localhost:8000/comments/${commentId}`,
        headers: {
            Authorization: 'asd',
        },
    });

declare global {
    namespace Cypress {
        interface Chainable {
            addComment(comment: string): Chainable<void>;
            deleteComment(comment: string): Chainable<void>;
        }
    }
}

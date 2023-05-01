export const updateProfile = (name: string, lastname: string) => {
    cy.getByTestId('EditableProfileCardHeader.EditButton').click();
    cy.getByTestId('ProfileCard.LastName').clear().type(lastname);
    cy.getByTestId('ProfileCard.Name').clear().type(name);
    cy.getByTestId('EditableProfileCardHeader.SaveButton').click();
    cy.getByTestId('EditableProfileCardHeader.SaveButton').click();
};

export const resetProfile = (profileId: string) => cy.request({
    method: 'PUT',
    url: `http://localhost:8000/profile/${profileId}`,
    headers: {
        Authorization: 'asaf',
    },
    body: {
        id: '4',
        first: 'test',
        lastname: 'user',
        age: 465,
        currency: 'EUR',
        country: 'Ukraine',
        city: 'Moscow',
        username: 'testuser',
        avatar: 'https://xakep.ru/wp-content/uploads/2018/05/171485/KuroiSH-hacker.jpg',
    },
});

declare global {
    namespace Cypress {
        interface Chainable {
            updateProfile(name: string, lastname: string): Chainable<void>
            resetProfile(profileId: string): Chainable<void>
        }
    }
}

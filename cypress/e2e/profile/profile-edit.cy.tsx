let profileId = '';

describe('Пользователь заходит на страницу своего профиля', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.login().then((data) => {
            profileId = data.id;
            cy.visit(`profile/${data.id}`);
        });
    });

    afterEach(() => {
        cy.resetProfile(profileId);
    });

    it('И профиль успешно загружается', () => {
        cy.getByTestId('ProfileCard.Name').should('have.value', 'test');
    });

    it('И редактирует его', () => {
        const newName = 'sdfsdfsdfsfsdfsdf';
        const newLastname = 'lastname';
        cy.updateProfile(newName, newLastname);
        cy.getByTestId('ProfileCard.Name').should('have.value', newName);
        cy.getByTestId('ProfileCard.LastName').should('have.value', newLastname);
    });
});

import { EditableProfileCard } from '../../src/features/EditableProfileCard';
import { TestProvider } from '../../src/shared/lib/tests/componentRender/componentRender';

describe('ComponentName.cy.tsx', () => {
    it('playground', () => {
        cy.intercept('GET', '**/profile/*', { fixture: 'profile.json' });
        cy.mount(
            <TestProvider options={
                {
                    initialState: {
                        user: {
                            authData: {
                                id: '4',
                            },
                        },
                    },
                }
            }
            >
                <EditableProfileCard id="4" />
            </TestProvider>,
        );
    });
});

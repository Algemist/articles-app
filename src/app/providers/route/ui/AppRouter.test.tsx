import { screen } from '@testing-library/react';
import AppRouter from './AppRouter';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';
import { getRouteAbout, getRouteAdminPanel, getRouteProfile } from '@/shared/const/router';
import { UserRole } from '@/entities/User';

describe('app/router/AppRouter', () => {
    test('Page should be render', async () => {
        componentRender(<AppRouter />, {
            route: getRouteAbout(),
        });

        const page = await screen.findByTestId('AboutPage');
        expect(page).toBeInTheDocument();
    });

    test('NotFoundPage should be render', async () => {
        componentRender(<AppRouter />, {
            route: '/asf',
        });

        const page = await screen.findByTestId('NotFoundPage');
        expect(page).toBeInTheDocument();
    });

    test('Redirect not auth user to Main page', async () => {
        componentRender(<AppRouter />, {
            route: getRouteProfile('1'),
        });

        const page = await screen.findByTestId('MainPage');
        expect(page).toBeInTheDocument();
    });

    // test('Should render ProfilePage for auth user', async () => {
    //     componentRender(<AppRouter />, {
    //         route: getRouteProfile('1'),
    //         initialState: {
    //             user: {
    //                 authData: {},
    //                 _inited: true,
    //             },
    //         },
    //     });
    //
    //     const page = await screen.findByTestId('ProfilePage');
    //     expect(page).toBeInTheDocument();
    // });

    test('Should redirect user without access', async () => {
        componentRender(<AppRouter />, {
            route: getRouteAdminPanel(),
            initialState: {
                user: {
                    authData: {
                        id: '1',
                    },
                    _inited: true,
                },
            },
        });

        const page = await screen.findByTestId('ForbiddenPage');
        expect(page).toBeInTheDocument();
    });

    test('Should render AdminPanelPage for user with access', async () => {
        componentRender(<AppRouter />, {
            route: getRouteAdminPanel(),
            initialState: {
                user: {
                    authData: {
                        id: '1',
                        roles: [UserRole.ADMIN],
                    },
                    _inited: true,
                },
            },
        });

        const page = await screen.findByTestId('AdminPanelPage');
        expect(page).toBeInTheDocument();
    });
});

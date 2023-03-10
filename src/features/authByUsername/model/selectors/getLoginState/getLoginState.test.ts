import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginState } from './getLoginState';

describe('getLoginIsLoading.test', () => {
    test('should return username', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: 'username',
                password: 'password',
            },
        };
        expect(getLoginState(state as StateSchema)).toEqual({ username: 'username', password: 'password' });
    });

    test('should work with empty value', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginState(state as StateSchema)).toEqual(undefined);
    });
});

import { StateSchema } from 'app/providers/StoreProvider';

export function getLoginError(state: StateSchema) {
    return state?.loginForm?.error;
}

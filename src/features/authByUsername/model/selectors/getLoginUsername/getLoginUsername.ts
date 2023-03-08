import { StateSchema } from 'app/providers/StoreProvider';

export function getLoginUsername(state: StateSchema) {
    return state?.loginForm?.username || '';
}

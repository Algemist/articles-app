import { StateSchema } from 'app/providers/StoreProvider';

export function getLoginPassword(state: StateSchema) {
    return state?.loginForm?.password || '';
}

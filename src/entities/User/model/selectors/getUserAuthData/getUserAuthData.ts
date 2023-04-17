import { StateSchema } from '@/app/providers/StoreProvider';

export function getUserAuthData(state: StateSchema) {
    return state.user.authData;
}

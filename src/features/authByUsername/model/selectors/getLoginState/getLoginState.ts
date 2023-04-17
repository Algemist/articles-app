import { StateSchema } from '@/app/providers/StoreProvider';

export function getLoginState(state: StateSchema) {
    return state?.loginForm;
}

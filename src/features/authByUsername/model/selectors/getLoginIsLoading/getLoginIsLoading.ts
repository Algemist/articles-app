import { StateSchema } from '@/app/providers/StoreProvider';

export function getLoginIsLoading(state: StateSchema) {
    return state?.loginForm?.isLoading || false;
}

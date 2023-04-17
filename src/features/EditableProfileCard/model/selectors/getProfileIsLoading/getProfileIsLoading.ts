import { StateSchema } from '@/app/providers/StoreProvider';

export function getProfileIsLoading(state: StateSchema) {
    return state?.profile?.isLoading;
}

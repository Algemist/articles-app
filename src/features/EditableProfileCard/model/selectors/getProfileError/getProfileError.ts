import { StateSchema } from '@/app/providers/StoreProvider';

export function getProfileError(state: StateSchema) {
    return state?.profile?.error;
}

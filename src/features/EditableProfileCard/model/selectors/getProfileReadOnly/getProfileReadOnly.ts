import { StateSchema } from '@/app/providers/StoreProvider';

export function getProfileReadOnly(state: StateSchema) {
    return state?.profile?.readonly;
}

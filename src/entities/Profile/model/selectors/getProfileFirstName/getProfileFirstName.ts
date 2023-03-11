import { StateSchema } from 'app/providers/StoreProvider';

export function getProfileFirstName(state: StateSchema) {
    return state?.profile?.data?.firstname || '';
}

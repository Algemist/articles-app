import { StateSchema } from 'app/providers/StoreProvider';

export function getProfileData(state: StateSchema) {
    return state?.profile?.data;
}

import { StateSchema } from 'app/providers/StoreProvider';

export function getProfileForm(state: StateSchema) {
    return state?.profile?.form;
}

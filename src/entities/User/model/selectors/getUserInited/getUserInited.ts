import { StateSchema } from '@/app/providers/StoreProvider';

export function getUserInited(state: StateSchema) {
    return state.user._inited;
}

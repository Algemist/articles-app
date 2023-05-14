import { userActions, userReducer } from './model/slice/userSlice';
import { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
import { getUserInited } from './model/selectors/getUserInited/getUserInited';
import {
    isUserAdmin,
    getUserRoles,
    isUserManager,
} from './model/selectors/roleSelectors';

export { UserRole } from './model/consts/consts';
export type { UserSchema, User } from './model/types/user';

export {
    userActions,
    userReducer,
    getUserAuthData,
    getUserInited,
    isUserAdmin,
    getUserRoles,
    isUserManager,
};

export { useJsonSettings } from './model/selectors/jsonSettings';
export { saveJsonSettings } from './model/services/saveJsonSettings';

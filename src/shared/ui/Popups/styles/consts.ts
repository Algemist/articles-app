import { DropdownDirection } from '../../../types/ui';
import cls from './popup.module.scss';

export const mapDirectionClasses: Record<DropdownDirection, string> = {
    'top right': cls.optionsTopRight,
    'top left': cls.optionsTopLeft,
    'bottom right': cls.optionsBottomRight,
    'bottom left': cls.optionsBottomLeft,
};

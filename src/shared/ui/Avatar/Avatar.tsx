import { CSSProperties, FC, useMemo } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';
import AvatarIcon from '../../assets/icons/avatar.svg';
import { AppImage } from '../AppImage';
import { Icon } from '../Icon';
import { Skeleton } from '@/shared/ui/Skeleton';

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
    fallbackInverted?: boolean;
}

export const Avatar: FC<AvatarProps> = (props) => {
    const {
        src,
        className,
        size,
        alt,
        fallbackInverted = false,
    } = props;

    const mods: Mods = {};
    const styles = useMemo<CSSProperties>(() => ({
        width: size || 100,
        height: size || 100,
    }), [size]);

    const errorFallback = <Icon inverted={fallbackInverted} width={size} height={size} Svg={AvatarIcon} />;
    const fallback = <Skeleton width={size} height={size} border="50%" />;

    return (
        <AppImage
            src={src}
            alt={alt}
            style={styles}
            className={classNames(cls.Avatar, mods, [className])}
            fallback={fallback}
            errorFallback={errorFallback}
        />
    );
};

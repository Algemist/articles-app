import { memo, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './StarRating.module.scss';
import StarIcon from '@/shared/assets/icons/star.svg';
import { Icon } from '../Icon/Icon';

interface StarRatingProps {
    className?: string;
    onSelect?: (starsCount: number) => void;
    size?: number;
    selectedStarts?: number;
}

const stars = [1, 2, 3, 4, 5];

export const StarRating = memo((props: StarRatingProps) => {
    const {
        className,
        onSelect,
        size = 30,
        selectedStarts = 0,
    } = props;

    const [isHovered, setIsHovered] = useState(false);
    const [currentStarsCount, setCurrentStartsCount] = useState(selectedStarts);
    const [isSelected, setIsSelected] = useState(Boolean(selectedStarts));

    const onHover = (starsCount: number) => () => {
        if (!isSelected) {
            setCurrentStartsCount(starsCount);
        }
    };
    const onLeave = () => {
        if (!isSelected) {
            setCurrentStartsCount(0);
        }
    };

    const onClick = (starsCount: number) => () => {
        if (!isSelected) {
            onSelect?.(starsCount);
            setCurrentStartsCount(starsCount);
            setIsSelected(true);
        }
    };

    return (
        <div className={classNames(cls.StarRating, {}, [className])}>
            {stars.map((startNumber) => (
                <Icon
                    Svg={StarIcon}
                    key={startNumber}
                    className={classNames(
                        cls.starIcon,
                        { [cls.selected]: isSelected },
                        [currentStarsCount >= startNumber ? cls.hovered : cls.normal],
                    )}
                    width={size}
                    height={size}
                    onMouseLeave={onLeave}
                    onMouseEnter={onHover(startNumber)}
                    onClick={onClick(startNumber)}
                    data-testid={`StarRating.${startNumber}`}
                    data-selected={currentStarsCount >= startNumber}
                />
            ))}
        </div>
    );
});

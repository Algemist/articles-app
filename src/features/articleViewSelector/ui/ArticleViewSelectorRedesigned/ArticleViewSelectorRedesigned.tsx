import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleViewSelectorRedesigned.module.scss';
import { ArticleView } from '@/entities/Article';
import { Icon } from '@/shared/ui/redesigned/Icon';
import TileIcon from '@/shared/assets/icons/PlateIconRedesigned.svg';
import ListIcon from '@/shared/assets/icons/GridIconRedesigned.svg';
import { Card } from '@/shared/ui/redesigned/Card';

interface ArticleViewSelectorRedesignedProps {
    className?: string;
    onClick: (newView: ArticleView) => () => void;
    view: ArticleView;
}

const viewTypes = [
    {
        view: ArticleView.SMALL,
        icon: TileIcon,
    },
    {
        view: ArticleView.BIG,
        icon: ListIcon,
    },
];

export const ArticleViewSelectorRedesigned = memo(
    (props: ArticleViewSelectorRedesignedProps) => {
        const { className, onClick, view } = props;

        const { t } = useTranslation();

        return (
            // Todo сделать хелпер getHStack({gap: '16', justify: 'center'});
            <Card
                className={classNames(cls.ArticleViewSelectorRedesigned, {}, [
                    className,
                ])}
                border="round"
            >
                {viewTypes.map((viewType) => (
                    <Icon
                        Svg={viewType.icon}
                        className={classNames(
                            '',
                            { [cls.Selected]: viewType.view !== view },
                            [],
                        )}
                        width={24}
                        height={24}
                        clickable
                        key={viewType.view}
                        onClick={onClick(viewType.view)}
                    />
                ))}
            </Card>
        );
    },
);
